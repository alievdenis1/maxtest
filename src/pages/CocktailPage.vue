<template>
  <div class="container mx-auto">
    <Header />
    <Navigation @select-cocktail="onSelectCocktail" />
    <div v-if="cocktail && !cocktailStore.pending">
      <h1 class="text-4xl font-bold mb-4">{{ cocktail.strDrink }}</h1>
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="mb-4">
      <p class="text-lg mb-8">{{ cocktail.strInstructions }}</p>
      <div class="mb-4">
        <h2 class="text-2xl font-bold mb-2">Ingredients:</h2>
        <ul>
          <li v-for="(ingredient, index) in cocktailIngredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="cocktailStore.pending">
      <p>Loading cocktail details...</p>
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

const getCoctails = async () => {
  const cocktailCode = route.params.cocktailCode as string;
  await cocktailStore.fetchCocktail(cocktailCode);

  console.log(cocktailCode)
  cocktail.value = cocktailStore.getCocktail(cocktailCode);
  console.log(cocktail.value)
};

onMounted(async () => {
  await getCoctails()
});

const onSelectCocktail = (code: string) => {
  getCoctails()
  router.push(`/${code}`);
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