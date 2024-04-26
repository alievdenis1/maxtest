<template>
  <div class="container mx-auto">
    <Header />
    <Navigation />
    <h1 class="text-4xl font-bold mb-4">Welcome to the Cocktail App</h1>
    <p class="text-lg mb-8">Explore our collection of delicious cocktails!</p>
    <router-link to="/margarita" class="btn btn-primary">Get Started</router-link>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/Header.vue';
import Footer from '@/widgets/Footer.vue';
import Navigation from '@/widgets/Navigation.vue';
</script>