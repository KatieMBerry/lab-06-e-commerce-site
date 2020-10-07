import { foodItems } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById } from '../utils.js';
import { cart } from '../data/static-cart.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    
    const tr = renderTableRow(cartItem, foodItems);
    
    table.appendChild(tr);
}

const total = calculateTotal(cart, foodItems);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;

function calculateTotal(cartArray, foodItems) {
    let grandTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        const item = findById(foodItems, cartItem.id);

        const subTotal = item.price * cartItem.quantity;

        grandTotal += subTotal;
    }
    return grandTotal;
}