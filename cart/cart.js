import { foodItems } from '../data.js';
import { renderTableRow } from './cart-utils.js';
import { findById, getFromLocalStorage, CART } from '../utils.js';

const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    
    const tr = renderTableRow(cartItem, foodItems);
    
    table.appendChild(tr);
}

const orderButton = document.querySelector('#order-button');
orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    // if (cart !== []) {
    alert(stringyCart);
    // } else {
        // alert('You don\'t have any items in your cart. Go back to the Home Page to select an item!');
    // localStorage.removeItem(CART);
    localStorage.clear();
    window.location.href = '/';
    // }
});

const total = calcOrderTotal(cart, foodItems);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;

export function calcOrderTotal(cartArray, foodItems) {
    let grandTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        const item = findById(foodItems, cartItem.id);

        const subTotal = item.price * cartItem.quantity;

        grandTotal += subTotal;
    }
    return grandTotal;
}