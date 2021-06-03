import React, { useState } from 'react';
import Auth from '../utils/auth';
import ProductCard from '../components/ProductCard';
// import { useLocation } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';

function Products() {

//   const location = useLocation();

  const [isModal, setModal] = useState(false)
  const [productLinks] = useState([
		{
			name: 'All',
		},
		{
			name: 'Meat',
		},
		{
			name: 'Seafood',
		},
		{
			name: 'Vegetables',
		},
		{
			name: 'Fruits',
		},
    {
      name: 'Bundle Promotion',
    },
    {
      name: 'Squid',
    },
    {
      name: 'Special Items'
    },
    {
      name: 'Shellfish'
    },
    {
      name: 'Scallops'
    }
	])

  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])
  const currentProduct = { product: currentProductLink.name }
  Auth.setProduct(currentProduct.product)

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
    	<div className="products-card-display product-content">
        	<ProductCard
            currentProductLink={currentProductLink}
          />
      	</div>
    </>
  )
}

export default Products;