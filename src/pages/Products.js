import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../css/main.css';

function Products(props) {

  const {
    categories,
    products,
    fav,
    setFav,
    cart,
    setCart
  } = props

  const [isCategory, setCategory] = useState(categories);
  const [isProducts, setProducts] = useState(products);

  function updateProducts(cat) {

    var list = [];

    for (var i = 0; i < products.length; i++) {
      
      if (products[i].status !== false) {
        for (var y = 0; y < products[i].category.length; y++) {
          if (products[i].category[y].trim() === cat.toLowerCase()) {
            list.push(products[i]);
          }
        }
      }
    }

    setProducts(list);
  }

  return (
    <div className="products-container">
      <div className="category-container">
        {categories.map((cat) => (
          <li key={cat} className={`category-icon ${isCategory === cat && `isCategoryActive`}`} onClick={() => {setCategory(cat); updateProducts(cat)}}>{cat}</li>
        ))}
      </div>
      <div className="products-list">
        {isProducts.map((prod) => (
          <div key={prod.product_id}>
            <ProductCard
              prod={prod}
              fav={fav}
              setFav={setFav}
              cart={cart}
              setCart={setCart}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;