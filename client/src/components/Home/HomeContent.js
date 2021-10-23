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
    setCurrentHeaderLink,
    promo,
    headerLinks,
  } = props

  return (
    <>
      <div className="home-page">
        <div className="home-banner-content">
          <img alt="home-banner" src={`http://media.kingsseafood18.com/media/banner/${promo[0].main_banner}.jpg`} className="home-banner" />
          <div className="logo-container">
            <p>{promo[0].home_message}</p>
            </div>
          <div className="home-banner-text">
          {/* TEXT HERE */}
        
          <div onClick={() => {setCurrentHeaderLink(headerLinks[1])}} className="home-button-white">SHOP NOW</div>
          </div>
        </div>
      </div>
      <AboutSection
        promo={promo} />
  </>
  )
}

export default HomeContent;