// IMPORT MODULES under test here:

import { renderTableRow } from '../cart/cart-utils.js';


const test = QUnit.test;

test('should take in a cartItem and return a tr ele with the appropriate contents', (expect) => {
    // arrange
    const cartItem = {
        id: 'carrot-cake22',
        price: 15.99, 
    };
    
    const expected = '<tr><td>Apple</td><td>$1.50</td><td>3</td><td>$4.50</td><tr>';

    // act
    const actual = renderTableRow(cartItem);
    
    // assert
    expect.equal(actual.outerHTML, expected);
});

