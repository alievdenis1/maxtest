import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import CocktailPage from '@/pages/CocktailPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/cocktail/:cocktailCode', component: CocktailPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/cocktail/margarita');
  } else {
    next();
  }
});
export default router;
