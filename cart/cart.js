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
    let grandTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        const item = findById(foodItems, cartItem.id);

        const subTotal = item.price * item.quantity;

        grandTotal += subTotal;
    }
    return grandTotal;
}