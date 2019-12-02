'use strict';

//global variables
var imgOne = document.getElementById('bag');
var imgTwo = document.getElementById('banana');
var imgThree = document.getElementById('bathroom');
var imageHouse = document.getElementById('image-house');
var imgArray = [];


//RandomImage constructor
function RandomImage(src, name) {
  this.src = `../img/${src}.jpg`;
  this.alt = name;
  this.title = name;
  this.seen = 0;
  this.clicked = 0;

  imgArray.push(this);
}

//helper function
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//generate random images
function populateImgs() {
  var index = randomIndex(imgArray.length);
  imgOne.src = imgArray[index].src;
  imgOne.alt = imgArray[index].alt;
  imgOne.title = imgArray[index].title;

  imgArray[index].seen++;

  var indexTwo = randomIndex(imgArray.length);

  var indexThree = randomIndex(imgArray.length);

  while (indexTwo === index || indexTwo === indexThree || index === indexThree) {
    indexTwo = randomIndex(imgArray.length);
  }

  imgTwo.src = imgArray[indexTwo].src;
  imgTwo.alt = imgArray[indexTwo].alt;
  imgTwo.title = imgArray[indexTwo].title;

  imgThree.src = imgArray[indexThree].src;
  imgThree.alt = imgArray[indexThree].alt;
  imgThree.title = imgArray[indexThree].title;

  imgArray[indexTwo].seen++;
  imgArray[indexThree].seen++;
  console.table(imgArray);
}

//event listener
function handleClick(event) {
  var votedOn = event.target.title;
  for (var i = 0; i < imgArray.length; i++) {
    if (votedOn === imgArray[i].title) {
      imgArray[i].clicked++;
    }
  }
  populateImgs();
}

//create a function that populates the following data as a list within the result-house section: title, seen, clicked
// var renderlist = function() {
//     document.getElementById('result-list');
//     var ulEl = document.createElement('ul');
//     var liEl = document.createElement('li');

//     liEl.textContent = (`${title} was seen ${seen} times and voted for ${clicked}.`)
//     ulEl.appendChild(liEl);
// }


//new image instantiation
function populateOnPageLoad() {
  new RandomImage('bag', 'R2D2 Bag');
  new RandomImage('banana', 'Banana Slicer');
  new RandomImage('bathroom', 'iPad & TP Stand');
  new RandomImage('boots', 'Toeless Rainboots');
  new RandomImage('breakfast', 'All-in-One Breakfast Maker');
  new RandomImage('bubblegum', 'Meatball Bubblegum');
  new RandomImage('chair', 'Funny Red Chair');
  new RandomImage('cthulhu', 'Cthulhu Action Figure');
  new RandomImage('dog-duck', 'Duckbill Dog Muzzle');
  new RandomImage('dragon', 'Canned Dragon Meat');
  new RandomImage('pen', 'Dining Utensil Pen');
  new RandomImage('pet-sweep', 'Pet Sweep');
  new RandomImage('scissors', 'Pizza Scissors');
  new RandomImage('shark', 'Shark Sleeping Bag');
  new RandomImage('sweep', 'Microfiber Onesie');
  new RandomImage('tauntaun', 'TaunTaun Baby Mat');
  new RandomImage('unicorn', 'Canned Unicorn Meat');
  new RandomImage('usb', 'Reptile Tail USB');
  new RandomImage('water-can', 'Nonsensical Watering Can');
  new RandomImage('wine-glass', 'Terrarium for Wine');
}

//render
imageHouse.addEventListener('click', handleClick);
populateOnPageLoad();
populateImgs();
