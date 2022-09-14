const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic1.jpg", 
"https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic2.jpg",
"https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic3.jpg",
"https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic4.jpg",
"https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic5.jpg"]


/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
