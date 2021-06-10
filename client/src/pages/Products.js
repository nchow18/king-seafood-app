import React, { useState } from 'react';
import Auth from '../utils/auth';
import ProductCard from '../components/ProductCard';
// import { useLocation } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PRODUCTS, USER_ME } from '../utils/queries';
import { formDate } from '../utils/helpers';


function Products() {

  const {data: dataR} = useQuery(USER_ME);
  const { loading, data } = useQuery(PRODUCTS);
  const products = data?.products || {};

  const [categoryModal, setCategoryModal] = useState(false)
  const [productLinks] = useState(Auth.getCategories())
  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])

  if (loading) return `...Loading`;

  function scrollTop() {
    window.scrollTo(0,0);
  }

  var productCategory = []
  const homeCategory = Auth.getCategory();
  const empty = {name: ""};

  function clearCategoryStorage() {
    localStorage.setItem('current_category', JSON.stringify(empty));
  }

    if (currentProductLink.name === 'All' && homeCategory.name === '') {
      productCategory = products;
      localStorage.setItem('current_category', JSON.stringify(empty));
    } else if (currentProductLink.name === 'Bundle Promotion' || homeCategory.name === 'Bundles') {
      //filter based on Bundle Promotions
      const currentProduct = products.filter((product) => product.product_bulk_price !== '0');
      productCategory = currentProduct;
    } else if (currentProductLink.name === 'Sale' || homeCategory.name === 'Sale') {
      // filter based on Sale Products
      const currentProduct = products.filter((product) =>  product.product_sale_price !== '0');
      productCategory = currentProduct;
    } else if (currentProductLink.name === 'Featured' || homeCategory.name === 'Featured') {
      // filter based on Featured Products
      const currentProduct = products.filter((product) => product.product_featured === true)
      productCategory = currentProduct;
    } else if (currentProductLink.name === 'Newest Products' || homeCategory.name === 'Newest') {
      //filter based on Date
      //start with pivot point of [0] index
      const reversed = []

      for (var i = products.length; i > 0; i--) {
        reversed.push(products[i]);
      }

      for (var t = 1; t < 11; t++) {
        if (reversed[t] === false) {
          return false;
        }
          productCategory.push(reversed[t]);
      }
    } else {
      // Filter based on the remaining Products
      if ( 
        homeCategory.name === 'Fish' || 
        homeCategory.name === 'Squid' || 
        homeCategory.name === 'Shellfish' ||
        homeCategory.name === 'Fruits' || 
        homeCategory.name === 'Meat' ||
        homeCategory.name === 'Vegetables' ||
        homeCategory.name === 'Hotpot' ||
        homeCategory.name === 'Scallops' ) {

        const currentProduct = products.filter((product) => product.product_category.toLowerCase() === homeCategory.name.toLowerCase());
        productCategory = currentProduct;
      } else {
        const currentProduct = products.filter((product) => product.product_category.toLowerCase() === currentProductLink.name.toLowerCase());
        productCategory = currentProduct;
      }
    }

  return (
  <>
  <div className="nav-product-buttons">
    <i className="fas fa-arrow-circle-up top-button" onClick={() => {scrollTop()}}></i>
    {categoryModal ? (
      <i className="fas fa-arrow-circle-right top-button" onClick={() => {setCategoryModal(false); clearCategoryStorage()}}></i>
    ) : (
      <i className="fas fa-plus-square top-button" onClick={() => {setCategoryModal(true); clearCategoryStorage()}}></i>
    )}

  </div>

  {categoryModal && (
    <ProductHeader 
      productLinks={productLinks}
      currentProductLink={currentProductLink}
      setCurrentProductLink={setCurrentProductLink}
      setCategoryModal={setCategoryModal}
      />
  )}
  <div className="product-page-container">
    <div className="product-full-categories-panel">
      <div className="categories-links">
        <span><b>Categories</b></span>
        {productLinks.map((category) => (
          <span className={`categories-links link-hover ${currentProductLink.name === category.name && `categoryActive`}`} onClick={() => {setCurrentProductLink(category)}}>{category.name}</span>
        ))}
      </div>

    </div>
      <>
        <div className="products-card-display">
          <ProductCard
            currentProductLink={currentProductLink}
            products={products}
            user={dataR}
            productCategory={productCategory}
            setCategoryModal={setCategoryModal}
          />
        </div>
    </>

  </div>

  </>
  )
}

export default Products;