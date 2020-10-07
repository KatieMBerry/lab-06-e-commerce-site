import { cart, foodItems } from '../data.js';
import { renderTableRow } from './cart-utils';
import { findByID } from '../utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderTableRow(foodItem);

    table.appendChild(tr);
}

const total = calculateTotal(cart);
const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

