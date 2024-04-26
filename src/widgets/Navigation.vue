<template>
  <nav class="mb-8">
    <ul class="flex space-x-4">
      <li v-for="item in menuItems" :key="item.path">
        <router-link :to="item.path" active-class="text-blue-500">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface MenuItem {
  path: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { path: '/margarita', label: 'Margarita' },
  { path: '/mojito', label: 'Mojito' },
  { path: '/a1', label: 'A1' },
  { path: '/kir', label: 'Kir' },
];
</script>