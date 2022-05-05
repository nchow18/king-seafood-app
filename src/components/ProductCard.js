import React, { useState } from 'react';
import ProductPicture from './ProductPicture';
import AddCartButton from './AddCartButton';

function ProductCard(props) {

  const {
    prod,
    fav,
    setFav,
    cart,
    setCart
  } = props

  return (
    <div className="product-card-container">
      <div className="product-card-picture">
        <ProductPicture
          prod={prod}
        />
      </div>
      <div className="product-card-content">
        <div className="product-card-details">
          <li>{prod.name}</li>
          {prod.sale_price !== '' && (
            <li><b>Price: </b><strike>RM {prod.price}</strike> RM {prod.sale_price}</li>
          )}
          {prod.sale_price === '' && (
            <li><b>Price: </b> RM {prod.price}</li>
          )}
          {prod.bulk_qty !== '' && (
            <li><b>Bundle Deal!</b> Buy <b>{prod.bulk_qty}</b> or more for <b>RM {prod.bulk_price}</b> each</li>
          )}
          {prod.d1 !== '' && (
            <li>» {prod.d1}</li>
          )}
          {prod.d2 !== '' && (
            <li>» {prod.d2}</li>
          )}
          {prod.d3 !== '' && (
            <li>» {prod.d3}</li>
          )}
          {prod.d4 !== '' && (
            <li>» {prod.d4}</li>
          )}
        </div>
        <AddCartButton 
          prod={prod}
          fav={fav}
          setFav={setFav}
          cart={cart}
          setCart={setCart} />
      </div>
    </div>
  )
}

export default ProductCard;