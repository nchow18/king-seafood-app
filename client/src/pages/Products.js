import React, { useState } from 'react';
import Auth from '../utils/auth';
import ProductCard from '../components/ProductCard';
// import { useLocation } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS, USER_ME } from '../utils/queries';


function Products(props) {


  const {
    productLinks=[],
    currentProductLink,
    setCurrentProductLink,
  } = props

  const {data: dataR} = useQuery(USER_ME);
  const { loading, data } = useQuery(PRODUCTS);
  const products = data?.products || {};

  const [categoryModal, setCategoryModal] = useState(false)



  if (loading) return `...Loading`;

  function scrollTop() {
    window.scrollTo(0,0);
  }

  var productCategory = [];

  if (currentProductLink.name === 'All') {
    var sortNumber = products;
    //sorting by inventory_id
    const invArr = sortNumber.sort((a,b) => a.inventory_id - b.inventory_id);
    productCategory = [];
    productCategory = [...invArr];
  } else if (currentProductLink.name === 'Sale') {
    // filter based on Sale Products
    const currentSale = products.filter((product) => product.product_sale_price > 0)
    const currentBundle = products.filter((product) =>  product.product_bulk_price > 0);
    var invArr = [...currentBundle,...currentSale];
    const sort = invArr.sort((a,b) => a.inventory_id - b.inventory_id)
    productCategory = [];
    productCategory = [...sort];
  } else if (currentProductLink.name === 'Featured') {
    // filter based on Featured Products
    const currentProduct = products.filter((product) => product.product_featured === true)
    productCategory = currentProduct;
  } else if (currentProductLink.name === 'Newest Products') {
    const newProduct = products.filter((product) => product.product_new === true);
    const sorted = newProduct.sort((a,b) => a.inventory_id - b.inventory_id);
    productCategory = [];
    productCategory = [...sorted];
  } else {
    const currentProduct = products.filter((product) => product.product_category.toLowerCase() === currentProductLink.name.toLowerCase());
    const sorted = currentProduct.sort((a,b) => a.inventory_id - b.inventory_id);
    productCategory = [];
    productCategory = [...sorted];
  }

  return (
  <>
  <div className="nav-product-buttons">
    <i className="fas fa-arrow-circle-up top-button" onClick={() => {scrollTop()}}></i>
    {categoryModal ? (
      <span className="category-button" onClick={() => {setCategoryModal(false); }}>Category</span>
    ) : (
      <span className="category-button" onClick={() => {setCategoryModal(true); }}>Category</span>
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
          <span key={category.name} className={`categories-links link-hover ${currentProductLink.name === category.name && `categoryActive`}`} onClick={() => {setCurrentProductLink(category);}}>{category.name}</span>
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