import { foodItems as hardCodedFoods } from './data.js';
import { PRODUCTS, CART } from './constants.js';

export function seedAndGetProducts() {
    let localStorageFoods = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageFoods) {
        const stringyFoods = JSON.stringify(hardCodedFoods);

        localStorage.setItem(PRODUCTS, stringyFoods);

        localStorageFoods = hardCodedFoods;
    }
    return localStorageFoods;
}

export function addFood(newFood) {
    const productArray = getFromLocalStorage(PRODUCTS);

    productArray.push(newFood);

    setInLocalStorage(PRODUCTS, productArray);
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        } 
    } 
}


export function renderFoodItem(foodItem) {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const removeButton = document.createElement('button');

    li.classList.add('food-items');
    title.classList.add('name');
    description.classList.add('description');
    image.classList.add('food-image');
    price.classList.add('item-price');
    button.classList.add('add-button');
    removeButton.classList.add('remove-item-button');
    
    title.textContent = foodItem.name;
    li.appendChild(title);
    
    description.textContent = foodItem.description;
    li.appendChild(description);

    image.src = `../assets/${foodItem.image}`;
    li.appendChild(image);

    price.textContent = `$${foodItem.price.toFixed(2)}`;
    li.appendChild(price);

    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
        alert('You chose ' + foodItem.name + ' for your cart!');
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, foodItem.id);
        
        if (itemInCart === undefined) {
            const newCartItem = {
                id: foodItem.id,
                quantity: 1
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }
        setInLocalStorage(CART, cart);
    });

    removeButton.textContent = 'Remove One';
    removeButton.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, foodItem.id);

        if (itemInCart) {
            if (itemInCart.quantity !== 0) {
                itemInCart.quantity--;
            }
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);
    li.appendChild(removeButton);

    return li;
}

export function calcLineItem(quantity, amount) {
    const lineItem = quantity * amount;
    return lineItem;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

// this function will not return anything
export function setInLocalStorage(PRODUCTS, productArray) {
    const stringyItem = JSON.stringify(productArray);
    localStorage.setItem(PRODUCTS, stringyItem);
    return productArray;
}