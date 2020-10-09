import { PRODUCTS } from '../constants.js';
import { seedAndGetProducts } from '../utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const price = data.get('price');
    const description = data.get('description');
    const category = data.get('category');
    
    const newFood = {
        id: id,
        name: name,
        image: image,
        price: Number(price),
        description: description,
        category: category,
    };

    const localStorageFoods = seedAndGetProducts();

    localStorageFoods.push(newFood);

    const stringyLocalStorageFoods = JSON.stringify(localStorageFoods);
    localStorage.setItem(PRODUCTS, stringyLocalStorageFoods);
    
    form.reset();
});