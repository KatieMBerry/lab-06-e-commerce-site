// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBakedGood } from '../utils.js';

const test = QUnit.test;

QUnit.module('Render Baked Good');

test('renders a baked good', assert => {
    // arrange
    const cakes = {
        id: 'carrot-cake22',
        name: 'Carrot Cake',
        image: 'carrot-cake.png',
        price: 15.99, 
        description: 'Low-fat, gluten-free and high protein.  Whassup Doc?',
        category: 'low-fat-cakes',
        onSale: true,
    }
    
    const expected = 

    // act
    const dom = renderBakedGood(cakes);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});