import React from 'react';

function TopPromo(props) {

  const {
    promoBanner
  } = props

  return (
    <div className="top-promo">
      {promoBanner}
    </div>
  )
}

export default TopPromo