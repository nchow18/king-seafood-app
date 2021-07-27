import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainProducts(props) {

  const {
    category=[],
    productLinks=[],
    setCurrentProductLink,
  } = props

  const [currentCategory, setCategory] = useState(category[0])

  function storeCategory(name) {
    for (var i = 0; i < productLinks.length; i++) {
      if (name === productLinks[i].name) {
        setCurrentProductLink(productLinks[i])
      }
    }
  }

  return (
    <>
      <div className="main-promo-container">
        <div className="main-promo-slider">
          {category.map((product) => (
            <div className="slider-container" >
              <Link to="/products" className="slider-icon-container" onClick={() => {storeCategory(product.name); setCategory(product); }}>
                <img alt={product.name} src={product.img} className="slider-icon" />
              </Link>
              <span>{product.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainProducts;