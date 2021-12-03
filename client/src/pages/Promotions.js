import React from 'react';

function Promotions() {

  return (
    <div className="promo-content">
      <img alt="promo" src={process.env.PUBLIC_URL + `./images/promotions/dec_promo.jpeg`} />
    </div>
  )
}

export default Promotions;