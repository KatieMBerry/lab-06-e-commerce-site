// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderFoodItem } from '../utils.js';

const test = QUnit.test;

test('should render a food item', (expect) => {
    // arrange
    const foodItem = {
        id: 'carrot-cake22',
        name: 'Low-fat Carrot Cake',
        image: 'carrot-cake.jpeg',
        price: 15, 
        description: 'Low-fat, gluten-free and high protein.  Whassup Doc?',
        category: 'low-fat-cakes',
        onSale: true,
    };
    
    const expected = '<li class="food-items"><h3 class="name">Low-fat Carrot Cake</h3><p class="description">Low-fat, gluten-free and high protein.  Whassup Doc?</p><img class="food-image" src="../assets/carrot-cake.jpeg"><p class="item-price">$15.00</p><button class="add-button">Add to Cart</button></li>';

    // act
    const actual = renderFoodItem(foodItem);
    
    // assert
    expect.equal(actual.outerHTML, expected);
});