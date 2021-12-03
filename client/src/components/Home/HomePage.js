import React, { useState, useEffect } from 'react';

function HomePage(props) {

  const {
    setCurrentHeaderLink,
    products,
    userData,
    setCartQty,
    cartQty,
    cart
  } = props

  function randomProducts() {
    var prod = [];

    for (var i = 0; i < 6; i++) {
      const randomNumber = Math.round(Math.random() * products.length);
      const randomProd = products[randomNumber];

      prod = [...prod, randomProd]
    }
    return prod
  }

  return (
    <div className="homepage-desktop">
      <div className="banner-box position-relative">
        <img onClick={() => {setCurrentHeaderLink('Products')}} alt='banner' className="home-desktop-banner" src={process.env.PUBLIC_URL + '/images/home/homepage-without-bottom.png'} />
      </div>
      <div className="homepage-banner-bottom">
        <div className="banner-text font-face-bebas">SCROLL TO DISCOVER OUR POPULAR PRODUCTS</div>
        <img alt="arrow" className="banner-arrow-icon" src={process.env.PUBLIC_URL + '/images/home/down_arrow.png'} />
      </div>
      <div className="home-second-page-container display-flex-column-center-all">
        <h3 className="font-face-bebas text-center">POPULAR PRODUCTS</h3>
        <div className="home-popular-products">
            {randomProducts().map((prod) => (
              <div key={prod.product_id} className="home-popular-products-item" onClick={() => {setCurrentHeaderLink('Products')}}>
                <h6><b>{prod.product_name}</b></h6>
                <img alt="prod" className="home-popular-products-picture" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${prod.product_picture[0]}.jpg`} />
                <h6>RM {prod.product_price}</h6>
              </div>
            ))}
          </div>        
      </div>
    </div>
  )
}


export default HomePage;