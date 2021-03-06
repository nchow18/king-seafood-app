import React, { useContext } from 'react';
import UpdateCartButton from '../../components/Buttons/UpdateCart';
import { UserContext } from '../../utils/GlobalState';

function CartItem(props) {

  const {
    product,
    user_cart=[],
    updateState,
    removeProduct
  } = props

  const [state, dispatch] = useContext(UserContext)

  return (
    <>
      <div>
        <div key={product._id} className="window-cart-product-row">
            <img className="window-cart-product-img" alt={product.product_name} src={product.product_picture[0]} />
            <div className="window-cart-product-details">
              <div className="window-cart-product-text">
                <b>{product.product_name}</b>

                  <p>{product.total_price}</p>

              </div>
                <div key={product._id} onClick={() => {removeProduct(product._id); dispatch({ type: 'toggle_button' })}} className="mobile-cart-remove-button">REMOVE</div>
            </div>
              <UpdateCartButton
                product={product}
                user_cart={user_cart}
                updateState={updateState}
                />
          </div>
      </div>    
    </>
  )
}

export default CartItem;