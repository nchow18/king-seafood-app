import React from 'react';
import '../../css/Home.css';

function PromoCard(props) {

  const {
    currentUrl,
    setModal
  } = props

  return (
    <>
    <div className="promo-card-container">
      <i onClick={() => {setModal(false)}} className="fas fa-times close-button"></i>
      <img alt="promo" src={currentUrl} className="promo-img-card" />
    </div>
    </>
  )
}

export default PromoCard;