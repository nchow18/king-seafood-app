import React, { useState } from 'react';
import '../../css/Products.css';
import { useMutation } from '@apollo/react-hooks'
import { ADD_VIEWS } from '../../utils/mutations';
import SingleProduct from '../SingleProduct/';
import Quantity from '../Quantity';

function ProductCard(props) {

  const {
  products=[],
  productCategory=[],
  user,
  setCategoryModal,
  setCartCount
  } = props

  const [productArr] = useState({...products})

  const [isModal, setModal] = useState(false);
  const [currentSingleProduct, setSingleProduct] = useState(productArr[0])
  const [setView, { error }] = useMutation(ADD_VIEWS);

  function addView(product_id) {

    try {
      setView({
        variables: {
        product_id: product_id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (error) return `...ERROR`;

  return (
  <>
    {isModal && (
    <div className="single-product-modal-container">
      <SingleProduct 
        setModal={setModal}
        singleProduct={currentSingleProduct}
        user={user}
        setCategoryModal={setCategoryModal}
        setCartCount={setCartCount}
      />
    </div>
    )}
  {productCategory.map((product) => (
    <div key={product._id} className="product-card">
      {product.product_status === false && (
          <>
          <div className="out-stock-cover mobile-out-stock">
            <span>OUT OF STOCK</span>
          </div>
        </>
      )}
      <div>
          <img onClick={() => {setSingleProduct(product); setModal(true); addView(product._id)}} alt={product.product_name} src={product.product_picture[0]} className="product-card-picture"/>
      </div>
    <div className="product-card-description">
      <div className="product-card-font">
      <span className="bold">{product.product_name} {product.product_nameChinese !== '' && (
        <>{ product.product_nameChinese }</> )}</span>
      {product.product_sale_price > 1  && (
        <>
        <span><b>Price: </b><span className="font-strike">{product.product_price}</span></span>
        </>
      )}
      {product.product_sale_price <= 0 && (
        <>
        <span><b>Price: RM </b>{product.product_price}</span>
        </>
      )}
      {product.product_sale_price >= 1 && (
        <b className="font-red">Sale Price: RM {product.product_sale_price}</b>
      )}
      {product.product_bulk_quantity >=1 && (
        <b className="font-red">Bundle Deal! Buy {product.product_bulk_quantity} or more for RM {product.product_bulk_price} each</b>
      )}
      {product.product_weight !== '' && (
        <span>{product.product_weight}</span>
      )}
      {product.product_description1 !== '' && (
        <>
          <b>Description:</b><span className="blue-font">{product.product_description1}</span>
        </>
      )}
      </div>

      <div className="display-none">
        <Quantity
          product={product}
          user={user}
        />
      </div>
    </div>
    </div>
  ))}
  </>
  )
}

export default ProductCard;