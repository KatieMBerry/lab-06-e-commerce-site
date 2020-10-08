import { foodItems as hardCodedFoods } from '../data.js';
import { renderFoodItem } from '../utils.js';

const PRODUCTS = 'PRODUCTS';

// go get localStorageBooks from local storage and call them localStorageBooks (if there are some there already)
let localStorageFoods = JSON.parse(localStorage.getItem(PRODUCTS));

// if there are no localStorageBooks in local storage yet
    // if they've never been to the site
if (!localStorageFoods) {
     // go grab the hard coded localStorageBooks, and SEED local storage with them.  First we'll need to stringify those:
    const stringyFoods = JSON.stringify(hardCodedFoods);

    localStorage.setItem(PRODUCTS, stringyFoods);
    //Using hardCodedFoods to SET/SEED to local storage & then we can loop through them
    localStorageFoods = hardCodedFoods;
    
}

const ul = document.querySelector('#list');

for (let i = 0; i < hardCodedFoods.length; i++) {
    const item = hardCodedFoods[i];

    const li = renderFoodItem(item);

    ul.appendChild(li);
}

