<template>
  <nav class="mb-[900px]">
    <ul class="flex space-x-4">
      <li v-for="code in COCKTAIL_CODES" :key="code">
        <a href="#" @click.prevent="onSelectCocktail(code)" class="mb-2" :class="{ 'text-xl': isActive(code) }">
          {{ code }}
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