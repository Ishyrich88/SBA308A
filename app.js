import { fetchRecipesByIngredient } from './api.js';
import { displayRecipes, addRecipeToFavorites } from './dom.js';

// Handle ingredient search
async function handleSearch(e) {
    e.preventDefault();
    const ingredientInput = document.getElementById('ingredient-input');
    const ingredient = ingredientInput.value.trim();

    if (!ingredient) return;

    const recipes = await fetchRecipesByIngredient(ingredient);
    if (recipes) {
        displayRecipes(recipes);  // Display the recipes in the gallery
    } else {
        alert('No recipes found for this ingredient!');
    }

    ingredientInput.value = '';
}

// Event listener for the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);
