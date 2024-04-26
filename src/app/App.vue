<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (router.currentRoute.value.path === '/') router.push('/margarita');
});
</script>

<style lang="scss">
// Глобальные стили приложения
@import '@/shared/assets/main.css';
</style>