const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgs = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

let imgalt = {
    'images/pic1.jpg' : 'close up of human eye',
    'images/pic2.jpg' : 'inside a shell',
    'images/pic3.jpg' : 'purple and white flower',
    'images/pic4.jpg' : 'ancient hieroglyphics on a wall',
    'images/pic5.jpg' : 'brown butterfly with white markings on a leaf in the woods'
}

/* Declaring the alternative text for each image file */

/* Looping through images */
for (image of imgs) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgs/image);
    newImage.setAttribute('alt', imgalt[image]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', e=> {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.imgalt;
    })

}

/* Wiring up the Darken/Lighten button */
