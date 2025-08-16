import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'EzcHMxU3qaKdRH1pC0KHEukwzfSwwlG0';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`

const getRandomGifUrl = async () => {
    const response = await fetch(URL);

    // const data = (await response.json()) as GiphyRandomResponse;
    // Más legible, desestructuro para evitar hacer data.data
    const {data}: GiphyRandomResponse = await response.json();

    return data.images.original.url;
};

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

// getRandomGifUrl().then((url) => createImageInsideDOM(url));
// Mejorado
getRandomGifUrl().then(createImageInsideDOM);
