// Display recipes in the gallery
export function displayRecipes(recipes) {
    const gallery = document.getElementById('recipes');
    gallery.innerHTML = '';  // Clear previous recipes

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const img = document.createElement('img');
        img.src = recipe.strMealThumb;
        img.alt = recipe.strMeal;

        const title = document.createElement('h3');
        title.textContent = recipe.strMeal;

        const button = document.createElement('button');
        button.textContent = 'Add to Favorites';
        button.addEventListener('click', () => addRecipeToFavorites(recipe.strMeal));

        recipeDiv.append(img, title, button);
        gallery.appendChild(recipeDiv);
    });
}

// Add a recipe to the favorites list
export function addRecipeToFavorites(recipeName) {
    const favoritesList = document.getElementById('favorite-recipes');
    const li = document.createElement('li');
    li.textContent = recipeName;
    favoritesList.appendChild(li);
}
