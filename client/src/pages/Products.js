import React, { useState } from 'react';
import Auth from '../utils/auth';
import ProductCard from '../components/ProductCard';
// import { useLocation } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../utils/queries';


function Products() {

  const { loading, data } = useQuery(PRODUCTS);
  const products = data?.products || {};
  const [isModal, setModal] = useState(false)
  const [productLinks] = useState(Auth.getCategories())

  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])

  if (loading) return `...Loading`;

  return (
  <>
  <div className="categories-container" onClick={() => {setModal(true)}}>
    <div className="categories-button">CATEGORIES</div>
  </div>
  {isModal && (
    <ProductHeader 
    productLinks={productLinks}
    currentProductLink={currentProductLink}
    setCurrentProductLink={setCurrentProductLink}
    setModal={setModal}
    />
  )}
  <div className="product-page-container">
    <div className="product-full-categories-panel">
      <div className="categories-links">
        <span><b>Categories</b></span>
        {productLinks.map((category) => (
          <span onClick={() => {setCurrentProductLink(category)}}>{category.name}</span>
        ))}
      </div>

    </div>
    <div className="products-card-display">
        <ProductCard
        currentProductLink={currentProductLink}
        products={products}
        />
    </div>
  </div>

  </>
  )
}

export default Products;