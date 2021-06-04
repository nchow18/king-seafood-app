import React from 'react';
import Auth from '../utils/auth';
import { PROMO, PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useLocation } from 'react-router-dom';
import FeaturedCarousel from '../components/Carousel/FeaturedProducts';
import PromoCarousel from '../components/Carousel/PromoBanner';
import {Link} from 'react-router-dom';
import AboutSection from '../components/About/About';
import '../css/Home.css';
import ProductCarousel from '../components/Carousel/RandomProducts'
import Logo from '../assets/images/king-logo.png';

function Home() {

  const { loading, data } = useQuery(PROMO);
  const promo = data?.promo || {};
  const { data: Data } = useQuery(PRODUCTS);
  const products = Data?.products || {};
  const location = useLocation();

  const featuredProducts = [];

  if (loading) return `...Loading`;

  if (data) {
  for (var i = 0; i < products.length; i++) {
    if (promo[0].featuredProduct1 === products[i]._id) {
    featuredProducts.push(products[i])
    }
    if (promo[0].featuredProduct2 === products[i]._id) {
    featuredProducts.push(products[i])
    }
    if (promo[0].featuredProduct3 === products[i]._id) {
    featuredProducts.push(products[i])
    }
  }
  }


  Auth.setGlobalDiscount(promo[0].discount);

  console.log(promo[0].promo1End);

  return (
  location.pathname === `/` &&
  <>
  	  <div className="home-page">
    <div className="home-banner-content">
      <img alt="home-banner" src="https://wallpaperaccess.com/full/1491748.jpg" className="home-banner" />
      <div className="logo-container">
        <p>FRESHLY FROZEN SEAFOOD</p>
        <img alt="logo" src={Logo} className="king-logo" />
        </div>
      <div className="home-banner-text">
      {/* TEXT HERE */}
    
      <Link to="/products"><div className="home-button-white">SHOP NOW</div></Link>
      </div>
    </div>
      <b className="section-title featured-title">Featured Products</b>
    <div className="promo-fullscreen">
      <div className="promo-flex-row">
      {featuredProducts.map((product) => (
        <div key={product._id} className="promo-img-container">
        <img alt={product.product_name} className="promo-img" src={product.product_picture} />
        <div key={product._id} onClick={() => {}} className="promo-img-title">
          <p>{product.product_name}</p>
          <p>RM {product.product_price}</p>
        </div>
        </div>
      ))}
      </div>
    </div> 
    </div>
    {promo.promoPicture1 === true || promo.promoPicture2 === true || promo.promoPicture3 === true || (
      <div className="home-section">
        <b className="section-title">Current Promotions</b>
        <PromoCarousel
          promotions={promo}
        />
      </div>
    )}

    <div className="home-promo-mobile">
      <b className="section-title">Featured Products</b>
      <FeaturedCarousel
        products={featuredProducts}
      />
    </div>
     
    <div className="home-section">
    <b className="section-title">Products you might like</b>
    <p></p>
    <ProductCarousel />
    </div>
    <AboutSection />
  </>
  )
}

export default Home;