import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
// import { useLocation } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';

function Products(props) {

  const {
    productLinks=[],
    currentProductLink,
    setCurrentProductLink,
    setCartCount,
    setCurrentHeaderLink,
    products,
    user_me,
    headerLinks
  } = props

  const [categoryModal, setCategoryModal] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0,0);
  //   return () => {

  //   }
  // }, [categoryModal])

  if (categoryModal) {
    window.scrollTo(0,0);
  } else {
    window.scrollTo(0,0);
  }

  function scrollTop() {
    window.scrollTo(0,0);
  }

  var productCategory = [];

  if (currentProductLink.name === 'All') {
    //sorting by inventory_id
    const invArr = products.sort((a,b) => a.inventory_id - b.inventory_id);
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
  } else if (currentProductLink.name === 'Snacks') {
    const currentProduct = products.filter((product) => product.product_new === true)
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
            user_me={user_me}
            productCategory={productCategory}
            setCategoryModal={setCategoryModal}
            setCartCount={setCartCount}
            setCurrentHeaderLink={setCurrentHeaderLink}
            headerLinks={headerLinks}
          />
        </div>
    </>

  </div>

  </>
  )
}

export default Products;