<template>
  <nav class="mb-8">
    <ul class="space-y-4">
      <li v-for="code in COCKTAIL_CODES" :key="code">
        <a href="#" @click.prevent="onSelectCocktail(code)"
           :class="{ 'text-blue-500 font-semibold': isActive(code), 'hover:text-blue-400': !isActive(code) }">
          <router-link :to="'/cocktail/' + code">{{ code }}</router-link>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { COCKTAIL_CODES } from '@/entities/Cocktail/config';

const route = useRoute();

const emit = defineEmits<{
  (e: 'selectCocktail', code: string): void
}>();

const onSelectCocktail = (code: string) => {
  emit('selectCocktail', code);
};

const isActive = (code: string) => {
  return route.params.cocktailCode === code;
};
</script>