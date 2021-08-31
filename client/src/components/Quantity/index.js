import React, { useState, useContext } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPDATE_CART } from '../../utils/mutations';
import { USER_ME } from '../../utils/queries';
import { UserContext } from '../../utils/GlobalState';

function Quantity(props) {

  const {
    product=[],
    setCartCount
  } = props

  const [updateCart, {error}] = useMutation(UPDATE_CART)
  const [formData, setFormData] = useState({
    quantity: 1,
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const addToCart = async (event) => {
    alert('added to cart')
  }

  return (
    <>
      <div className="quantity-button-container">
        <span>Quantity: <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} /></span>
        {product.product_status ? (
          <div className="product-button" key={product._id} onClick={() => { addToCart(product._id, formData.quantity); setCartCount(count => count + 1)}}>ADD TO CART</div>
        ) : (
          <div className="product-button" key={product._id}>OUT OF STOCK</div>
        )}

      </div>
    </>
  )
}

export default Quantity;