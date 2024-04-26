import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import CocktailPage from '@/pages/CocktailPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/:cocktailCode', component: CocktailPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
