
/*
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames 
const pics = [pic1, pic2, pic3, pic4, pic5]


/* Declaring the alternative text for each image file 
let pic1 = "https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic1.jpg";
let pic2 = "https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic2.jpg";
let pic3 = "https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic3.jpg";
let pic4 = "https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic4.jpg";
let pic5 = "https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic5.jpg";
 Looping through images */

/*
const newImage = document.createElement('img');
newImage.setAttribute('https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic1.jpg', pic1);
newImage.setAttribute('https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic2.jpg', pic2);
newImage.setAttribute('https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic3.jpg', pic3);
newImage.setAttribute('https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic4.jpg', pic4);
newImage.setAttribute('https://github.com/DanTheHydrated/ImageGallery/blob/main/images/pic5.jpg', pic5);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  function thumbnailLoop() {
  var i;
  for (i = 0; i < 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + (i+1) + ".jpg");
  thumbBar.appendChild(newImage);
}
}

thumbnailLoop();

/* Making the clicked thumbnail the large image */

thumbBar.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
}
}); // Close event listener

  
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}); // Close event listener
