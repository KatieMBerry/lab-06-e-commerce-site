// IMPORT MODULES under test here:
import { calcOrderTotal } from '../cart/cart.js';
import { renderTableRow } from '../cart/cart-utils.js';
import { seedAndGetProducts, addFood } from '../utils.js';


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

test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newFood = {
        id: 'salad420',
        name: 'Chickpea Salad',
        image: 'chick-pea.png',
        price: 12.50,
        description: 'Delicious and Healthy!',
        category: 'salad',
    };

    const expected = [
        {
            id: 'carrot-cake',
            name: 'Low-fat Carrot Cake',
            image: 'carrot-cake.jpeg',
            price: 15.99, 
            description: 'Low-fat, gluten-free and high protein.  Whassup Doc?',
            category: 'low-fat-cakes',
        },
        {
            id: 'charcuterie',
            name: 'Charcuterie',
            image: 'charcuterie-plate.PNG',
            price: 18.99, 
            description: 'Assorted meats, cheeses, fruits & veg.  Perfect for sharing.',
            category: 'shares',
        },
        {
            id: 'shortbread',
            name: 'Million Dollar Shortbread',
            image: 'shortbread.PNG',
            price: 12.99, 
            description: 'Rich and decadent.',
            category: 'cookies',
        },
        {
            id: 'torte',
            name: 'Chocolate Torte',
            image: 'torte.PNG',
            price: 20.99, 
            description: 'Dense and silky.  Great with coffee!',
            category: 'confections',
        },
        {
            id: 'assorted-cookies',
            name: 'Assorted Cookies',
            image: 'assorted-cookies.jpg',
            price: 14.99, 
            description: 'Assorted meats, cheeses, fruits & veg.  Perfect for sharing.',
            category: 'gifts',
        },
        {
            id: 'croissant',
            name: 'Croissants',
            image: 'croissant.jpeg',
            price: 10.99, 
            description: 'Pillowy!',
            category: 'breads',
        },
        {
            id: 'salad420',
            name: 'Chickpea Salad',
            image: 'chick-pea.png',
            price: 12.50,
            description: 'Delicious and Healthy!',
            category: 'salad',
        }
    ];

    addFood(newFood);

    const actual = seedAndGetProducts(expected);
    expect.deepEqual(actual, expected);
});