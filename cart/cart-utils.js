
import { findById, calcLineItem } from '../utils.js';

export function renderTableRow(cartItem, sourceOfTruth) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const foodData = findById(sourceOfTruth, cartItem.id);
    
    const price = foodData.price;
    const name = foodData.name;
    
    const cartItemTotal = calcLineItem(price, cartItem.quantity);
    
    tdName.textContent = name;
    tdPrice.textContent = `$${price}`;
    tdQuantity.textContent = cartItem.quantity;
    tdTotal.textContent = `$${cartItemTotal}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}
