import { foodItems as hardCodedFoods } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById, getFromLocalStorage } from '../utils.js';
import { CART } from '../constants.js';

const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    
    const tr = renderTableRow(cartItem, hardCodedFoods);
    
    table.appendChild(tr);
}

const orderButton = document.querySelector('#order-button');
orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '/';
});

const total = calcOrderTotal(cart, hardCodedFoods);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;

export function calcOrderTotal(cartArray, hardCodedFoods) {
    let grandTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        const item = findById(hardCodedFoods, cartItem.id);

        const subTotal = item.price * cartItem.quantity;

        grandTotal += subTotal;
    }
    return grandTotal;
}