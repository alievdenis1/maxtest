import { defineStore } from 'pinia';
import type { Cocktail } from '@/shared/types/cocktail.types';
import { fetchCocktailByCode } from '@/shared/api/cocktailApi';

interface CocktailsState {
    cocktails: Record<string, Cocktail[]>;
}

export const useCocktailsStore = defineStore('cocktails', {
    state: (): CocktailsState => ({
        cocktails: {},
    }),
    actions: {
        async fetchCocktail(cocktailCode: string) {
            if (!this.cocktails[cocktailCode]) {
                const data = await fetchCocktailByCode(cocktailCode);
                this.cocktails[cocktailCode] = data.drinks;
            }
        },
    },
});