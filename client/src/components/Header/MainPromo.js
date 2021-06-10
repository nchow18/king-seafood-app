import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PROMO } from '../../utils/queries';
import '../../css/Header.css';

function MainPromo() {

  const { loading, data } = useQuery(PROMO)
  const promo = data?.promo || {};

  if (promo.length === false) {
    return false;
  }

  const topPromotion = promo[0].mainPromo;
  const promoMsg1 = promo[0].promoMsg1;
  const promoMsg2 = promo[0].promoMsg2;
  const promoMsg3 = promo[0].promoMsg3;

  if (loading) return `...Loading`;

  return (
    <>
    <div className="header-main-promo">
      <div className="header-promo-slide">
        <span className="promo-item promo-setup">{topPromotion}</span>
        <span className="promo-item1 promo-setup">{promoMsg1}</span>          
        <span className="promo-item2 promo-setup">{promoMsg2}</span>          
        <span className="promo-item3 promo-setup">{promoMsg3}</span> 
      </div>
    </div>

    </>
  )
}

export default MainPromo;