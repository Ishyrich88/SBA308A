const apiKey = '1';  
const apiBaseURL = 'https://www.themealdb.com/api/json/v1/';

export async function fetchRecipesByIngredient(ingredient) {
    try {
        const response = await fetch(`${apiBaseURL}${apiKey}/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;  // Array of recipes
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

export async function fetchRecipeDetails(id) {
    try {
        const response = await fetch(`${apiBaseURL}${apiKey}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals[0];  // Recipe details
    } catch (error) {
        console.error('Error fetching recipe details:', error);
    }
}

