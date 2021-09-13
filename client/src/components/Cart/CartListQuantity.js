import React, {useState, useEffect} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CART, REMOVE_CART } from '../../utils/mutations';

function CartListQuantity(props) {

  const {
    item,
    user_cart,
    index,
    updateCartTotal,
    promotions
  } = props

  const global_sale = promotions[0].discount/100;

  const [currentQuantity, setQuantity] = useState(user_cart[index].quantity);
  const [addCart, { error } ] = useMutation(ADD_CART);
  const [removeCart] = useMutation(REMOVE_CART);

  function addQuantity() {
    setQuantity(currentQuantity + 1);
    user_cart[index].quantity = currentQuantity + 1;

    try {
      removeCart({
        variables: {
          product_id: item.product_name
        }
      })

      addCart({
        variables: {
          input: {
            product_id: item.product_id,
            quantity: user_cart[index].quantity,
            product_name: item.product_name,
            product_price: item.product_price,
            product_sale_price: item.product_sale_price,
            product_bulk_price: item.product_bulk_price,
            product_bulk_quantity: item.product_bulk_quantity
          }
        }
      })

    } catch (e) {
      console.log(e);
    }
  }

  function subtractQuantity() {
    if (currentQuantity === 1) {
      return;
    } else {
      setQuantity(currentQuantity - 1);
      user_cart[index].quantity = currentQuantity - 1;

      try {
        removeCart({
          variables: {
            product_id: item.product_name
          }
        })
  
        addCart({
          variables: {
            input: {
              product_id: item.product_id,
              quantity: user_cart[index].quantity,
              product_name: item.product_name,
              product_price: item.product_price,
              product_sale_price: item.product_sale_price,
              product_bulk_price: item.product_bulk_price,
              product_bulk_quantity: item.product_bulk_quantity
            }
          }
        })
  
      } catch (e) {
        console.log(e);
      }      
    }
  }

  for (var i = 0; i < user_cart.length; i++) {
    if (user_cart[i].product_sale_price === '0' && user_cart[i].product_bulk_quantity === 0) {
      user_cart[i].calc_price = (user_cart[i].product_price * (1 - global_sale) * user_cart[i].quantity).toFixed(2);
      user_cart[i].final_price = (user_cart[i].product_price * (1 - global_sale) * user_cart[i].quantity).toFixed(2);
    } else if (user_cart[i].product_sale_price >= '1') {
      user_cart[i].calc_price = ((user_cart[i].product_sale_price * (1 - global_sale)) * user_cart[i].quantity).toFixed(2);
      user_cart[i].final_price = ((user_cart[i].product_sale_price * (1 - global_sale)) * user_cart[i].quantity).toFixed(2);
    } else if (user_cart[i].product_bulk_quantity !== 0) {
      if (user_cart[i].product_bulk_quantity <= user_cart[i].quantity) {
        user_cart[i].calc_price = (user_cart[i].product_bulk_price * user_cart[i].quantity).toFixed(2);
        user_cart[i].final_price = (user_cart[i].product_bulk_price * user_cart[i].quantity).toFixed(2);
      } else if (user_cart[i].product_bulk_quantity > user_cart[i].quantity) {
        user_cart[i].calc_price = (user_cart[i].product_price * (1 - global_sale) * user_cart[i].quantity).toFixed(2);
        user_cart[i].final_price = (user_cart[i].product_price * (1 - global_sale) * user_cart[i].quantity).toFixed(2);
      }

    }
  }

  function priceAdjust() {
    const price = user_cart[index].final_price;

    return price;
  }

  if (error) return `...ERROR`;

  return (
    <div className="cart-list-counter">
      <span>{user_cart[index].product_name}</span>
      <div>      
        <span>RM {priceAdjust()}</span>
        <span onClick={() => {addQuantity(); updateCartTotal()}}>+</span>
        <span>{user_cart[index].quantity}</span>
        <span onClick={() => {subtractQuantity(); updateCartTotal()}}>-</span>
      </div> 
    </div>
  )
}

export default CartListQuantity;