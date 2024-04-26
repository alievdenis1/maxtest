<template>
  <div class="container mx-auto py-8">
    <Header />
    <div class="flex flex-col md:flex-row mt-3">
      <Navigation @select-cocktail="onSelectCocktail" class="md:w-1/4 md:mr-8" />
      <div v-if="cocktail && !cocktailStore.pending" class="md:w-3/4">
        <h1 class="text-4xl font-bold mb-4">{{ cocktail.strDrink }}</h1>
        <div class="flex flex-col md:flex-row">
          <div>
            <p class="text-lg mb-8">{{ cocktail.strInstructions }}</p>
            <div class="mb-4">
              <h2 class="text-2xl font-bold mb-2">Ingredients:</h2>
              <ul class="list-disc pl-6">
                <li v-for="(ingredient, index) in cocktailIngredients" :key="index">
                  {{ ingredient }}
                </li>
              </ul>
            </div>
          </div>
          <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="mb-4 md:mb-0 md:mr-8 md:w-1/2">

        </div>
      </div>
      <div v-if="cocktailStore.pending" class="text-center md:w-3/4">
        <p class="text-lg">Loading cocktail details...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCocktailStore, type Cocktail, type StrMeasureKeys } from '@/entities/Cocktail';
import Header from '@/widgets/Header.vue';
import Footer from '@/widgets/Footer.vue';
import Navigation from '@/widgets/Navigation.vue';

const router = useRouter();
const route = useRoute();
const cocktailStore = useCocktailStore();
const cocktail = ref<Cocktail | null>(null);

const getCocktails = async () => {
  const cocktailCode = route.params.cocktailCode as string;
  await cocktailStore.fetchCocktail(cocktailCode);
  cocktail.value = cocktailStore.getCocktail(cocktailCode);
};

onMounted(async () => {
  await getCocktails()
});

const onSelectCocktail = async (code: string) => {
  await router.push(`/${code}`);
  await getCocktails()
};

function getMeasure(cocktailData: Cocktail, measureKey: StrMeasureKeys): string | null {
  if (measureKey in cocktailData) {
    return cocktailData[measureKey] as string | null;
  } else {
    return null;
  }
}

const cocktailIngredients = computed((): string[] => {
  if (cocktail.value !== null) {
    const cocktailData = cocktail.value as Cocktail;
    return Object.entries(cocktailData)
        .filter(([key, _]) => key.startsWith('strIngredient'))
        .reduce((acc: string[], [key, ingredient]) => {
          const measureKey = key.replace('Ingredient', 'Measure') as StrMeasureKeys;
          const measure = getMeasure(cocktailData, measureKey);

          if (ingredient) {
            acc.push(`${ingredient as string} ${measure ?? ''}`);
          }
          return acc;
        }, []);
  } else {
    return [];
  }
});
</script>