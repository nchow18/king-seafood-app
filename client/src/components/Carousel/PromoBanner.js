import React, { useState } from 'react';
import '../../css/flickity.css';
import PromoCard from '../FullCard/PromoCard';
import '../../css/PromoBanner.css';

function PromoCarousel(props) {

  const {
    promotions = [],
    setPromo
  } = props

  const [link] = useState([
    promotions[0].promoPicture1,
    promotions[0].promoPicture2,
    promotions[0].promoPicture3
  ])

  const [currentUrl, setUrl] = useState(link[0])
  const [isModal, setModal] = useState(false)

  if (!promotions) return `...Loading Data`;

  return (
    <>
      <div className="promo-slider-container">
        <div className="promo-banner-slider-container">
          <i className="far fa-times-circle promo-close-icon" onClick={() => {setPromo(false)}}></i>
          {!promotions[0].promoPicture1 === false && (
            <img alt="pic1" onClick={() => {setUrl(link[0]); setModal(true)}} src={`http://media.kingsseafood18.com/media/promotions/${promotions[0].promoPicture1}.jpg`} className="promo-banner" />
          )}
          {!promotions[0].promoPicture2 === false && (
            <img alt="pic2" onClick={() => {setUrl(link[1]); setModal(true)}} src={`http://media.kingsseafood18.com/media/promotions/${promotions[0].promoPicture2}.jpg`} className="promo-banner" />
          )}
          {!promotions[0].promoPicture3 === false && (
            <img alt="pic3" onClick={() => {setUrl(link[2]); setModal(true)}} src={`http://media.kingsseafood18.com/media/promotions/${promotions[0].promoPicture3}.jpg`} className="promo-banner" />
          )}
        </div>
      </div>

      {isModal && (
        <div className="promo-card-display">
          <PromoCard 
            setModal={setModal}
            currentUrl={currentUrl}
          />
        </div>
      )}
    </>
  );
}

export default PromoCarousel;