import React from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';

function PromoCarousel(props) {

  const {
    promotions = []
  } = props

  if (!promotions) return `...Loading Data`;

  return (
    <>

      <Flickity>
        {!promotions[0].promoPicture1 === false && (
          <img alt="pic1" src={promotions[0].promoPicture1} className="promo-banner" />
        )}
        {!promotions[0].promoPicture2 === false && (
          <img alt="pic2" src={promotions[0].promoPicture2} className="promo-banner" />
        )}
        {!promotions[0].promoPicture3 === false && (
          <img alt="pic3" src={promotions[0].promoPicture3} className="promo-banner" />          
        )}


      </Flickity>

    </>
  );
}

export default PromoCarousel;