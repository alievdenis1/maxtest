export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    // ... другие свойства коктейля
}

export interface CocktailResponse {
    drinks: Cocktail[];
}