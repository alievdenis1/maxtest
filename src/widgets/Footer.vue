<template>
  <footer class="bg-gray-900 text-white py-4 mt-8">
    <div class="container mx-auto">
      <p>&copy; {{ currentYear }} Cocktail App. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>