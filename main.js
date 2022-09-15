const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


let imgalt = {
    'pic1.jpg' : 'close up of human eye',
    'pic2.jpg' : 'inside a shell',
    'pic3.jpg' : 'purple and white flower',
    'pic4.jpg' : 'ancient hieroglyphics on a wall',
    'pic5.jpg' : 'brown butterfly with white markings on a leaf in the woods'
}

/* Declaring the alternative text for each image file */

/* Looping through images */


for (const image of imgs) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'imgs/${image}');
    newImage.setAttribute('alt', imgalt[image]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', e=> {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}


 //Wiring up the Darken/Lighten button 

 btn.addEventListener('click', () => {
    const cName = btn.getAttribute('class');
    if (cName === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});