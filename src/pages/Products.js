import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../css/main.css';

function Products(props) {

  const {
    categories,
    products
  } = props

  const [isCategory, setCategory] = useState(categories);
  const [isProducts, setProducts] = useState(products);

  console.log(isProducts);

  function updateProducts(cat) {

    var list = [];

    for (var i = 0; i < products.length; i++) {
      for (var y = 0; y < products[i].category.length; y++) {
        if (products[i].category[y].trim() === cat.toLowerCase()) {
          list.push(products[i]);
        }
      }
    }

    setProducts(list);
  }

  return (
    <div className="products-container">
      <div className="category-container">
        {categories.map((cat) => (
          <li className={`category-icon ${isCategory === cat && `isCategoryActive`}`} onClick={() => {setCategory(cat); updateProducts(cat)}}>{cat}</li>
        ))}
      </div>
      <div className="products-list">
        {isProducts.map((prod) => (
          <ProductCard
            prod={prod}
          />
        ))}
      </div>
    </div>
  )
}

export default Products;