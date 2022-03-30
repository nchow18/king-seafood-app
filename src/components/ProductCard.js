import React from 'react';
import ProductPicture from './ProductPicture';

function ProductCard(props) {

  const {
    prod
  } = props

  return (
    <div className="product-card-container">
      <div className="product-card-picture">
        <ProductPicture
          prod={prod}
        />
      </div>
      <div className="product-card-details">
        <li>{prod.name}</li>
        <li>Price: RM {prod.price}</li>
        {prod.bulk_qty !== '' && (
          <li>Bundle Deal! Buy {prod.bulk_qty} or more for RM {prod.bulk_price} each</li>
        )}
        {prod.d1 !== '' && (
          <li>{prod.d1}</li>
        )}
        {prod.d2 !== '' && (
          <li>{prod.d2}</li>
        )}
        {prod.d3 !== '' && (
          <li>{prod.d3}</li>
        )}
        {prod.d4 !== '' && (
          <li>{prod.d4}</li>
        )}                        
      </div>
    </div>
  )
}

export default ProductCard;