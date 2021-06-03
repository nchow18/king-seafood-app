import React, { useState } from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';
import PromoCard from '../FullCard/PromoCard';

function PromoCarousel(props) {

  const {
    promotions = []
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
      <Flickity>
        {!promotions[0].promoPicture1 === false && (
          <img alt="pic1" onClick={() => {setUrl(link[0]); setModal(true)}} src={promotions[0].promoPicture1} className="promo-banner" />
        )}
        {!promotions[0].promoPicture2 === false && (
          <img alt="pic2" onClick={() => {setUrl(link[1]); setModal(true)}} src={promotions[0].promoPicture2} className="promo-banner" />
        )}
        {!promotions[0].promoPicture3 === false && (
          <img alt="pic3" onClick={() => {setUrl(link[2]); setModal(true)}} src={promotions[0].promoPicture3} className="promo-banner" />          
        )}
      </Flickity>
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