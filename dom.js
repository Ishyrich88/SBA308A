// Display dog images in the gallery
export function displayDogImages(images) {
    const gallery = document.getElementById('dog-images');
    gallery.innerHTML = ''; // Clear previous images

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        gallery.appendChild(img);
    });
}

// Add breed to favorites
export function addBreedToFavorites(breed) {
    const favoritesList = document.getElementById('favorite-breeds');
    const li = document.createElement('li');
    li.textContent = breed;
    favoritesList.appendChild(li);
}

