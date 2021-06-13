import React, { useState, useEffect } from 'react';
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
import MainProducts from '../components/Carousel/MainProducts';
import SectionCategory from '../components/Home/SectionCategory';
import Fish from '../assets/images/category/fish.png';
import Fruit from '../assets/images/category/fruits.png';
import Meat from '../assets/images/category/meat.png';
import New from '../assets/images/category/new.png';
import Scallop from '../assets/images/category/scallop.png';
import Squid from '../assets/images/category/squid.png';
import Hotpot from '../assets/images/category/hotpot.png';
import Featured from '../assets/images/category/top-rated.png';
import Vegetable from '../assets/images/category/vegetable.png';
import Sale from '../assets/images/category/sale.png';
import Special from '../assets/images/category/special.png';
import Shellfish from '../assets/images/category/shellfish.png';
import SaleSpecial from '../components/Home/SaleSpecial';

function Home() {

  const [category] = useState([
    {
			name: 'Sale',
      img: Sale
		},
    {
      name: 'Fish',
      img: Fish
    },
    {
      name: 'Scallops',
      img: Scallop
    },
    {
      name: 'Shellfish',
      img: Shellfish
    },
    {
      name: 'Squid',
      img: Squid
    },
    {
      name: 'Meat',
      img: Meat
    },
    {
      name: 'Special',
      img: Special
    },
    {
      name: 'Hotpot',
      img: Hotpot
    },
    {
      name: 'Fruits',
      img: Fruit
    },
    {
      name: 'Vegetables',
      img: Vegetable
    },   
		{
			name: 'Newest',
      img: New
		},
		{
			name: 'Featured',
      img: Featured
		},
  ])

  const [isPromo, setPromo] = useState(false);
  const { loading, data } = useQuery(PROMO);
  const promo = data?.promo || {};
  const { data: Data } = useQuery(PRODUCTS);
  const products = Data?.products || {};
  const location = useLocation();
  const featuredProducts = [];

  useEffect(() => {
    // setTimeout(displayPromo, 4000);
    const empty = {name: ""};
    localStorage.setItem('current_category', JSON.stringify(empty))
  }, [])

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

  return (
  location.pathname === `/` &&
  <>
    <div className="home-page">
      <MainProducts
        category={category} />
      <div className="home-banner-content">
        <img alt="home-banner" src={promo[0].main_banner} className="home-banner" />
        <div className="logo-container">
          <p>{promo[0].home_message}</p>
          </div>
        <div className="home-banner-text">
        {/* TEXT HERE */}
      
        <Link to="/products"><div className="home-button-white">SHOP NOW</div></Link>
        </div>
      </div>

    </div>
    {isPromo === true && (
      <div>
        {promo.promoPicture1 === true || promo.promoPicture2 === true || promo.promoPicture3 === true || (
            <PromoCarousel
              promotions={promo}
              setPromo={setPromo}
            />
        )}
      </div>
    )}
    <div className="home-section">
        <SaleSpecial
          products={products}
        />        
    </div>    
    <div className="home-section">
        <b className="section-title">Featured Products</b>
        <FeaturedCarousel
          products={products}
        />        
    </div>
    <div className="home-section category-section">
        <b className="section-title">Categories</b>
        <SectionCategory
        />        
    </div>
    <div className="home-section">
      <b className="section-title">Popular Products</b>
      <p></p>
      <ProductCarousel />
    </div>
    <AboutSection
      promo={promo} />
  </>
  )
}

export default Home;