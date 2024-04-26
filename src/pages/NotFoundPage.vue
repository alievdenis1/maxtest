<template>
  <div class="container mx-auto py-8">
    <Header />
    <Navigation />
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p class="text-lg mb-8">Oops! The page you're looking for does not exist.</p>
      <router-link to="/" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Go Back Home
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/Header.vue';
import Footer from '@/widgets/Footer.vue';
import Navigation from '@/widgets/Navigation.vue';
</script>