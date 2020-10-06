import { foodItems } from '../data.js';
import { renderFoodItem } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < foodItems.length; i++) {
    const item = foodItems[i];

    const li = renderFoodItem(item);

    ul.appendChild(li);
}