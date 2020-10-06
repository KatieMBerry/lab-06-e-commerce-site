
export function renderFoodItem(foodItem) {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('food-items');
    title.classList.add('name');
    description.classList.add('description');
    image.classList.add('food-image');
    price.classList.add('item-price');
    button.classList.add('add-button');
    
    title.textContent = foodItem.name;
    li.appendChild(title);
    
    description.textContent = foodItem.description;
    li.appendChild(description);

    image.src = `../assets/${foodItem.image}`;
    li.appendChild(image);

    price.textContent = `$${foodItem.price.toFixed(2)}`;
    li.appendChild(price);

    button.textContent = 'Add to Cart';
    li.appendChild(button);
    // const img = document.createElement('image');

    return li;
}