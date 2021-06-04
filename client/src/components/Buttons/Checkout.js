import React from 'react';

function Checkout(props) {

  const {
    cart=[]
  } = props

  console.log(cart);

  const checkout = async (event) => {
    console.log('checking out');
  }

  return (
    <>

    </>
  )
}

export default Checkout;