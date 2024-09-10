// Fetch random dog images
export async function fetchRandomDogs() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
        const data = await response.json();
        return data.message; // Array of image URLs
    } catch (error) {
        console.error('Error fetching random dog images:', error);
    }
}

// Fetch dogs by breed
export async function fetchDogsByBreed(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`);
        const data = await response.json();
        return data.message; // Array of breed-specific image URLs
    } catch (error) {
        console.error('Error fetching breed images:', error);
    }
}
