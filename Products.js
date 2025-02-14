class Product {
  constructor(id, name, image, price, oldPrice, discount, rating, reviewCount) {
    this.id = id; // Unique identifier for the product
    this.name = name; // Product name
    this.image = image; // Image URL
    this.price = price; // Current price
    this.oldPrice = oldPrice; // Old price for comparison
    this.discount = discount; // Discount percentage

    this.rating = rating;
    this.reviewCount = reviewCount;
  }
}
// Create the products array
const products = [
  new Product(
    1,
    'Olive Oil extra virgem – 100ml Bottle',
    './assets/image/product1.jpg',
    0.5,
    1.99,
    75,
    './assets/image/review-4S.png',
    5
  ),
  new Product(
    2,
    'Fresh strawberry hand-picked –  per unit',
    './assets/image/product5.png',
    8.99,
    9.99,
    11,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    3,
    'Simply Orange Pulp Free Juice– 52 fl oz',
    './assets/image/product2.png',
    2.45,
    4.13,
    41,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    4,
    'Cantaloupe Melon Fresh Organic Cut',
    './assets/image/product4.png',
    1.25,
    2.98,
    59,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    5,
    'All Natural 85_15 Ground Beef –1lb',
    './assets/image/product3.png',
    14.12,
    17.12,
    18,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    6,
    'California Pizza Kitchen Margherita, Crispy Thin',
    './assets/image/product6.png',
    3.99,
    5.49,
    27,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    7,
    '100 Percent Apple Juice – 64fl oz Bottle',
    './assets/image/product7.png',
    4.99,
    6.99,
    29,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    8,
    'Marketside Fresh Organic Bananas, Bunch',
    './assets/image/product8.png',
    1.29,
    1.79,
    28,
    './assets/image/review-4S.png',
    5
  ),
  new Product(
    9,
    'Vitaminwater zero sugar squeezed electrolyte…',
    './assets/image/product9.png',
    4.49,
    5.99,
    25,

    './assets/image/review-4S.png',
    5
  ),
  new Product(
    10,
    'Heinz Tomato Ketchup – 32 oz Bottle',
    './assets/image/product10.png',
    3.49,
    4.49,
    22,
    './assets/image/review-4S.png',
    5
  ),
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
      productCard.classList.add('product-card');

      productCard.innerHTML = `
         
            <div class="d-flex card">
              <span class="badge card-badge bg-danger">${product.discount}%</span>
              <span class="position-absolute wishlist-icon"> <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></span>
              <div class=" ">
                <img src="${product.image}" class="card-img" alt="${product.name}" />
              </div>
              <div class=" card-body d-flex m-0 p-0">
                <p class=" card-title ">${product.name}</p>
                <div class='d-flex card-review'>
                  <img src="${product.rating}" class="d-flex me-3 " alt="${product.rating}" />
                  <p >${product.reviewCount}</p>
                </div>
               <div class="card-price">
                  <h6 class="card-price1 m-0">€${product.price}
                  <span class="card-price2 text-decoration-line-through">€${product.oldPrice}</span></h6>
                </div>
                <div class='d-flex'>
                <button class="card-button">Add to the cart  <span class='plus ms-5'> + </span>  </button>
                </div>
              </div>
            </div>
          
      `;

      container.appendChild(productCard);
    }
  });
};

// Use the renderProducts function
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products, [1, 2, 3, 4, 5, 6], '.productRow-01');
  renderProducts(products, [1, 2, 3, 4, 5, 6], '.productRow-02');
  renderProducts(products, [1, 2], '.productRow-03');
  renderProducts(products, [3, 4], '.productRow-04');
  renderProducts(products, [5, 6], '.productRow-05');
  renderProducts(products, [7, 8], '.productRow-06');
});
