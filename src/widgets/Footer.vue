<template>
  <footer class="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 mt-8">
    <div class="container mx-auto text-center">
      <p class="text-sm tracking-wide">&copy; {{ currentYear }} Cocktail App. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>