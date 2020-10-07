// IMPORT MODULES under test here:
import { calcOrderTotal } from '../cart/cart.js';
import { renderTableRow } from '../cart/cart-utils.js';


const test = QUnit.test;

test('should take in a cartItem and return a tr ele with the appropriate contents', (expect) => {
    // arrange
    const cartItem = {
        id: 'carrot-cake',
        quantity: 2, 
    };
    
    const expected = '<tr><td>Low-fat Carrot Cake</td><td>$15.99</td><td>2</td><td>$31.98</td></tr>';

    // act
    const actual = renderTableRow(cartItem);
    
    // assert
    expect.equal(actual.outerHTML, expected);
});

test('should take in cart line totals and return a tr ele grand total value', (expect) => {
    const cart = {
        id: 'carrot-cake',
        quantity: 2
    };

    const expected = '<tr><td>Total: </td><td>$31.98</td><tr>';

    const actual = calcOrderTotal(cart);
    
    // assert
    expect.equal(actual.outerHTML, expected);
});

// test('should take in a cart\'s line item totals and return a tr ele that is the total cost of items in the cart', (expect) => {
//     const cart = {
//         id: 'carrot-cake',
//         quantity: 2
//     };
//     const expected = 
// });
