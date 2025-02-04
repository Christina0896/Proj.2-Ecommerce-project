class Product {
  constructor(id, name, image, price, oldPrice, discount, tags) {
    this.id = id; // Unique identifier for the product
    this.name = name; // Product name
    this.image = image; // Image URL
    this.price = price; // Current price
    this.oldPrice = oldPrice; // Old price for comparison
    this.discount = discount; // Discount percentage
    this.tags = tags; // Tags (e.g., organic, best-seller, etc.)
  }
}
// Create the products array
const products = [
  new Product(1, 'Olive Oil extra virgem – 100ml Bottle', './assets/image/product1.jpg', 0.5, 1.99, 75, ['Organic']),
  new Product(2, 'Fresh strawberry hand-picked –  per unit', './assets/image/product5.png', 8.99, 9.99, 11, [
    'cold sale',
  ]),
  new Product(3, 'Free range Eggs 12unit', './assets/image/product2.png', 2.45, 4.13, 41, []),
  new Product(4, 'Cantaloupe Melon Fresh Organic Cut', './assets/image/product4.png', 1.25, 2.98, 59, ['organic']),
  new Product(5, 'Marthie & Claudine', './assets/image/product3.png', 14.12, 17.12, 18, []),
  new Product(
    6,
    'California Pizza Kitchen Margherita, Crispy Thin Crus…',
    './assets/image/product6.png',
    3.99,
    5.49,
    27,
    ['cold sale']
  ),
  new Product(7, 'Pepsi Soft Drink – 12 fl oz Can (6-Pack)', './assets/images/pepsi.png', 4.99, 6.99, 29, []),
  new Product(8, 'Organic Bananas – 1 Bunch', './assets/images/bananas.png', 1.29, 1.79, 28, 'Fruits', ['organic']),
  new Product(
    9,
    'Nestle Toll House Chocolate Chip Cookie Dough – 16 oz',
    './assets/images/cookie-dough.png',
    4.49,
    5.99,
    25,
    []
  ),
  new Product(10, 'Heinz Tomato Ketchup – 32 oz Bottle', './assets/image/product10.png', 3.49, 4.49, 22, []),
];

// Export the products array
// Function to render products
const renderProducts = (products, cardIds, containerSelector, columnClass) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ''; // Clear any existing content

  cardIds.forEach((id) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      const productCard = document.createElement('div');
      productCard.classList.add(columnClass);

      productCard.innerHTML = `
         
            <div class="card">
              <span class="badge card-badge bg-danger">${product.discount}%</span>
              <div class="d-flex align-items-center ms-2 mt-2">
                <img src="${product.image}" class="card-img" alt="${product.name}" />
              </div>
              <span class="card-tags mb-2 ms-2">${product.tags}</span>
              <div class=" card-body p-0 m-2 ms-2">
                <p class="d-flex card-title">${product.name}</p>
               <div class="card-price">
                  <h6 class="card-price1 m-0">€${product.price}
                  <span class="card-price2 text-decoration-line-through">€${product.oldPrice}</span></h6>
                </div>
                <button class="card-button">Add to the cart</button>
              </div>
            </div>
          
      `;

      container.appendChild(productCard);
    }
  });
};

// Use the renderProducts function
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products, [1, 2, 3, 4, 5, 6], '.productRow-01', 'col-2');
  renderProducts(products, [1, 2, 3, 4, 5, 6], '.productRow-02', 'col-4');
  renderProducts(products, [1, 2], '.productRow-03', 'col-6');
  renderProducts(products, [1, 2], '.productRow-04', 'col-6');
  renderProducts(products, [1, 2], '.productRow-05', 'col-6');
  renderProducts(products, [1, 2], '.productRow-06', 'col-6');
});
