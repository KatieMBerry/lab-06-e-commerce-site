import { renderFoodItem, seedAndGetProducts } from '../utils.js';

const localStorageFoods = seedAndGetProducts();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageFoods.length; i++) {
    const item = localStorageFoods[i];

    const li = renderFoodItem(item);

    ul.appendChild(li);
}

