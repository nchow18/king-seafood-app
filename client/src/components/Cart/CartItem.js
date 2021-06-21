import React, { useContext } from 'react';
import UpdateCartButton from '../../components/Buttons/UpdateCart';
import { UserContext } from '../../utils/GlobalState';

function CartItem(props) {

  const {
    product,
    user_cart=[],
    updateState,
    removeProduct,
    updateMainCart,
    setNewCount
  } = props

  const [state, dispatch] = useContext(UserContext)
  
  return (
    <>
      <div>
        <div key={product._id} className="window-cart-product-row">
            <div className="cart-item-img-details">
              <img className="window-cart-product-img" alt={product.product_name} src={product.product_picture[0]} />
              <div className="window-cart-product-details">
                <div className="window-cart-product-text">
                  <b>{product.product_name}</b>
                  <p>{JSON.parse(product.total_price).toFixed(2)}</p>
                </div>
                <div key={product._id} onClick={() => {removeProduct(product._id); dispatch({ type: 'toggle_button' })}} className="mobile-cart-remove-button">REMOVE</div>
              </div>
            </div>
              <UpdateCartButton
                product={product}
                user_cart={user_cart}
                updateState={updateState}
                updateMainCart={updateMainCart}
                setNewCount={setNewCount}
                />
          </div>
      </div>    
    </>
  )
}

export default CartItem;