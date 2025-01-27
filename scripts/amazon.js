const products = [{
  image: 'images/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
}, {
  image: 'images/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}, {
  image: 'images/black-2-slot-toaster.jpg',
  name: '2-Slot Toaster Black',
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}, {
  image: 'images/6-piece-white-dinner-plate-set.jpg',
  name: '6 Piece White Dinner Plate Set',
  rating: {
    stars: 4,
    count: 37
  },
  priceCents: 2067
}, {
  image: 'images/6-piece-non-stick-baking-set.webp',
  name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
  rating: {
    stars: 4.5,
    count: 175
  },
  priceCents: 3499
}, {
  image: 'images/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name: 'Plain Hooded Fleece Sweatshirt',
  rating: {
    stars: 4.5,
    count: 317
  },
  priceCents: 2400
}, {
  image: 'images/luxury-tower-set-6-piece.jpg',
  name: 'Plain Hooded Fleece Sweatshirt',
  rating: {
    stars: 4.5,
    count: 144
  },
  priceCents: 3599
}, {
  image: 'images/liquid-laundry-detergent-plain.jpg',
  name: 'Plain Hooded Fleece Sweatshirt',
  rating: {
    stars: 4.5,
    count: 305
  },
  priceCents: 2899
}];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars" src="images/rating-${product.rating.stars *10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-name="${product.name}">
        Add to Cart
      </button>

    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',() => {
      const productName = button.dataset.productName;

      let matchingItem;

      cart.forEach((item)=>{
        if (item.productName===productName) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity+=1
      }
      else {
        cart.push({
          productName: productName,
          quantity: 1
        });
      }

      let cartQuantity=0;

      cart.forEach((item)=>{
        cartQuantity += item.quantity;
      })

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

      console.log(cartQuantity);
      console.log(cart);
    });
  })