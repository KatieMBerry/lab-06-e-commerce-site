import { foodItems as sourceOfTruth } from '../data.js';
import { findById } from '../utils.js';

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const foodData = findById(sourceOfTruth, cartItem.id);

    const price = foodData.price;
    const name = foodData.name;
    
    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;
    
    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}
