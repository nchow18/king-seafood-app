import React, { useEffect } from 'react';
import { CLEAR_CART } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';

function Ordered() {

  const [clearCart] = useMutation(CLEAR_CART);

  useEffect(() => {
    if (Auth.loggedIn() === true) {
      const user_id = Auth.getProfile();
      try {
        clearCart({
          variables: {
            user_id: user_id.data._id
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  })

  localStorage.removeItem('guest_cart');
  localStorage.removeItem('new_cart');
  localStorage.removeItem('guest_cart_quantity');
  localStorage.removeItem('cart_total')
  window.location.assign('/cart/pastorders')

  return(
    <>
      <div>
        ORDERED
      </div>
    </>
  )
}

export default Ordered;