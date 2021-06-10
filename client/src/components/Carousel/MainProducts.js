import React, { useState } from 'react';
import Auth from '../../utils/auth';

function MainProducts(props) {

  const {
    category=[]
  } = props

  const [currentCategory, setCategory] = useState(category[0])


  function storeCategory(product) {
    Auth.setCategory(product);
  }

  console.log(currentCategory);

  return (
    <>
      <div className="main-promo-container">
        <div className="main-promo-slider">
          {category.map((product) => (
            <div className="slider-container" >
              <div className="slider-icon-container" onClick={() => {storeCategory(product); setCategory(product); }}>
                <img alt={product.name} src={product.img} className="slider-icon" />
              </div>
              <span>{product.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainProducts;