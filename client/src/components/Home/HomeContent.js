import React from 'react';
import ProductCarousel from '../../components/Carousel/RandomProducts'
import MainProducts from '../../components/Carousel/MainProducts';
import SectionCategory from '../../components/Home/SectionCategory';
import FeaturedCarousel from '../../components/Carousel/FeaturedProducts';
import PromoCarousel from '../../components/Carousel/PromoBanner';
import {Link} from 'react-router-dom';
import AboutSection from '../../components/About/About';
import SaleSpecial from '../../components/Home/SaleSpecial';

function HomeContent(props) {

  const {
    category,
    currentProductLink,
    setCurrentProductLink,
    products,
    productLinks,
    promo,
    promotions,
    setPromo,
    currentHeaderLink,
    isPromo,
  } = props

  return (
    <>
      <div className="home-page">
        <MainProducts
          category={category}
          currentProductLink={currentProductLink}
          setCurrentProductLink={setCurrentProductLink}
          productLinks={productLinks}/>
        <div className="home-banner-content">
          <img alt="home-banner" src={`http://media.kingsseafood18.com/media/banner/${promo[0].main_banner}.jpg`} className="home-banner" />
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
              promotions={promotions}
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
      <div className="home-section">
        <b className="section-title">Categories</b>
        <SectionCategory
          currentProductLink={currentProductLink}
          setCurrentProductLink={setCurrentProductLink}
          productLinks={productLinks}
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

export default HomeContent;