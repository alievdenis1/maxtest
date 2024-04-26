import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createMemoryHistory, createRouter, type Router } from 'vue-router';
import Navigation from '@/widgets/Navigation.vue';
import { COCKTAIL_CODES } from '@/entities/Cocktail/config';

describe('Navigation', () => {
    let router: Router;

    beforeEach(() => {
        router = createRouter({
            history: createMemoryHistory(),
            routes: [
                {
                    path: '/cocktail/:cocktailCode',
                    component: { template: 'Cocktail Page' },
                },
            ],
        });
    });

    it('генерирует событие «selectCocktail», когда выбран коктейль', async () => {
        router.push(`/cocktail/${COCKTAIL_CODES[0]}`);
        await router.isReady();

        const wrapper = mount(Navigation, {
            global: {
                plugins: [router],
                stubs: ['router-link'],
            },
        });

        await wrapper.find('a').trigger('click');
        expect(wrapper.emitted('selectCocktail')).toBeTruthy();
        expect(wrapper.emitted('selectCocktail')![0]).toEqual([COCKTAIL_CODES[0]]);
    });


});