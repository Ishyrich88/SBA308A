import { fetchRandomDogs, fetchDogsByBreed } from './api.js';
import { displayDogImages, addBreedToFavorites } from './dom.js';

// Initial random dogs fetch
async function loadRandomDogs() {
    const images = await fetchRandomDogs();
    displayDogImages(images);
}

// Handle breed search
async function handleBreedSearch(e) {
    e.preventDefault();
    const breedInput = document.getElementById('breed-input');
    const breed = breedInput.value.trim().toLowerCase();

    if (!breed) return;

    const breedImages = await fetchDogsByBreed(breed);
    if (breedImages) {
        displayDogImages(breedImages);
        addBreedToFavorites(breed); // Add to favorites list
    } else {
        alert('Breed not found!');
    }

    breedInput.value = '';
}

// Event listener for the breed search form
const breedSearchForm = document.getElementById('breed-search-form');
breedSearchForm.addEventListener('submit', handleBreedSearch);

// Load random dogs on page load
loadRandomDogs();

