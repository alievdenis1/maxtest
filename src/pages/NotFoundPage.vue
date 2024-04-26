<template>
  <div class="container mx-auto">
    <Header />
    <Navigation />
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="text-lg mb-8">Oops! The page you're looking for does not exist.</p>
    <router-link to="/" class="btn btn-primary">Go Back Home</router-link>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/Header.vue';
import Footer from '@/widgets/Footer.vue';
import Navigation from '@/widgets/Navigation.vue';
</script>