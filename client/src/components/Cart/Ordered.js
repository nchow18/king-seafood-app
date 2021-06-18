import React from 'react';

function Ordered() {

  localStorage.removeItem('guest_cart');
  localStorage.removeItem('new_cart');
  localStorage.removeItem('guest_cart_quantity');
  localStorage.removeItem('cart_total')
  window.location.assign('/cart')

  return(
    <>
      <div>
        ORDERED
      </div>
    </>
  )
}

export default Ordered;