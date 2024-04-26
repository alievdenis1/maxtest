import axios, { type AxiosResponse } from 'axios';
import type { CocktailResponse } from '../types';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktailByCode = async (cocktailCode: string): Promise<CocktailResponse> => {
    const response: AxiosResponse<CocktailResponse> = await axios.get(`${BASE_URL}/search.php?s=${cocktailCode}`);
    return response.data;
};