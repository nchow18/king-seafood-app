import React from 'react';
import Auth from '../utils/auth';
import ProductCard from '../components/ProductCard';

function Products(props) {

  const currentProduct = Auth.getProduct();


  return (
    <>
      PRODUCT - {currentProduct}
      <div className="flex-c-column">
        <ProductCard />
      </div>
    </>
  )
}

export default Products;