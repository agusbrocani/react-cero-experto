import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'EzcHMxU3qaKdRH1pC0KHEukwzfSwwlG0';
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`

const myRequest = fetch(URL);

// myRequest.then((response) => {
//     // console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// }).catch(console.error);

// Promises en cadena
// myRequest
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(console.error);

// myRequest
// .then((response) => response.json())
// .then((data) => {
//     const imageUrl = data.data.images.original.url;
//     console.log(imageUrl);

//     const imgElement = document.createElement('img');
//     imgElement.src = imageUrl;

//     document.body.append(imgElement);
// })
// .catch(console.error);

myRequest
.then((response) => response.json())
.then(({data}: GiphyRandomResponse) => data.images.original.url)
.then((imageUrl) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    document.body.append(imgElement);
})
.catch(console.error);
