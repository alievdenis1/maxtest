import { defineStore } from 'pinia';
import type { Cocktail } from '../types';
import { fetchCocktailByCode } from '../api';

interface CocktailsState {
    cocktails: Record<string, Cocktail>;
    pending: boolean;
}

export const useCocktailStore = defineStore('cocktails', {
    state: (): CocktailsState => ({
        cocktails: {},
        pending: false,
    }),
    actions: {
        async fetchCocktail(cocktailCode: string) {
            if (!this.cocktails[cocktailCode]) {
                this.pending = true;
                const data = await fetchCocktailByCode(cocktailCode);
                this.pending = false;
                if (data.drinks && data.drinks.length > 0) {
                    this.cocktails[cocktailCode] = data.drinks[0];
                }
            }
        },
        getCocktail(cocktailCode: string): Cocktail | null {
            return this.cocktails[cocktailCode];
        },
    },
});