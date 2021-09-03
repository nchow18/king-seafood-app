import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import { ADD_VIEWS, ADD_CART } from '../../utils/mutations';
import Auth from '../../utils/auth';

function AddCart(props) {

  const {
    product,
    user_me,
    setCurrentHeaderLink,
    headerLinks
  } = props

  const [currentQuantity, setQuantity] = useState(1);
  const [setView, { error }] = useMutation(ADD_VIEWS);
  const [addCart] = useMutation(ADD_CART);

  function addQuantity() {
    setQuantity(currentQuantity + 1);
  }

  function reduceQuantity() {
    if (currentQuantity === 1) {
      return
    } else {
      setQuantity(currentQuantity -1);
    }
  }

  const addToCart = async (event) => {
    alert('Added to cart : Quantity : ' + currentQuantity)

    try {
      addCart({
        variables: {
          product_id: product._id,
          input: {
            product_id: product.product_id,
            quantity: currentQuantity,
            product_name: product.product_name,
            product_price: product.product_price,
            product_sale_price: product.product_sale_price,
            product_bulk_price: product.product_bulk_price,
            product_bulk_quantity:  product.product_bulk_quantity
          }
        }
      })

      user_me.cart.push({
        product_id: product.product_id,
        quantity: currentQuantity,
        product_name: product.product_name,
        product_price: product.product_price,
        product_sale_price: product.product_sale_price,
        product_bulk_price: product.product_bulk_price,
        product_bulk_quantity:  product.product_bulk_quantity
      });
      
    } catch (e) {
      console.log(e)
    }
  }

  function addView(product_id) {

    try {
      setView({
        variables: {
        product_id: product._id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (error) return `...ERROR`;

  return (
    <>
    {Auth.loggedIn() ? (
      <>
        <div className="product-cart-counter">
          <span onClick={() => addQuantity()}>+</span>
          <span>{currentQuantity}</span>
          <span onClick={() => reduceQuantity()}>-</span>
        </div>

        <button onClick={() => {addToCart(); addView()}}>ADD TO CART</button>
      </>
    ) : (
      <button onClick={() => {setCurrentHeaderLink(headerLinks[6])}}>Log In for CART</button>
    )}
    
    </>
  )
}

export default AddCart;