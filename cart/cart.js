import { cart, foodItems } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById } from '../utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const foodItem = cart[i];

    const tr = renderTableRow(foodItem);

    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

function calculateTotal(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const trueItem = findById(foodItems, item.id);

        const subTotal = trueItem.price * item.quantity;

        accumulator += subTotal;
    }
    return accumulator;
}