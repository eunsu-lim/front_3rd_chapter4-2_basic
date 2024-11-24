async function loadProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    
    const chunkSize = 1000; 
    for (let i = 0; i < products.length; i += chunkSize) {
        const chunk = products.slice(i, i + chunkSize);
        displayProducts(chunk); 
    }
}

function displayProducts(products) {
    const container = document.querySelector('#all-products .container');
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const productElement = createProductElement(product);
        fragment.appendChild(productElement);
    });

    container.appendChild(fragment);
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <div class="product-picture">
            <img src="${product.image}" alt="product: ${product.title}" width="250" loading="lazy">
        </div>
        <div class="product-info">
            <h5 class="categories">${product.category}</h5>
            <h4 class="title">${product.title}</h4>
            <h3 class="price"><span>US$ ${product.price}</span></h3>
            <button>Add to bag</button>
        </div>
    `;
    return productElement;
}

async function heavyCalculation() {
    await new Promise(resolve => {
        setTimeout(() => {
            for (let i = 0; i < 10000000; i++) {
                Math.sqrt(i); 
            }
            resolve();
        }, 0);
    });
    console.log('Calculation complete');
}

async function runTasks() {
    await loadProducts();
    await heavyCalculation(); 
}

document.addEventListener('DOMContentLoaded', runTasks);