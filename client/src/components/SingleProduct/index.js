import React, { useContext } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import ProductPictureCarousel from '../Carousel/ProductPicture';
import { UserContext } from '../../utils/GlobalState';
import Quantity from '../Quantity';

function SingleProduct(props) {

  const {
    setModal,
    singleProduct
  } = props

  const product = singleProduct;

  if (Auth.getMode() === 'dark') {
    Auth.getMode();
  }

  const [state, dispatch] = useContext(UserContext);

  return (
    <>
        <div className="single-product-container">
        <i onClick={() => {setModal(false)}} className="fas fa-times close-button"></i>
          <div className="single-product-img-container">
            <ProductPictureCarousel
            product={product} 
            />
          </div>
          <div className="single-product-details">
            <span><b>Name: </b>{product.product_name}</span>
            {product.product_nameChinese !== '' && (
              <span><b>Chinese Name: </b>{product.product_nameChinese}</span>
            )}
            {product.product_sale_price ? (
              <>
              <span><b>Price: </b><span className="font-strike">{product.product_price}</span></span>
              </>
            ) : (
              <>
              <span><b>Price: </b>{product.product_price}</span>
              </>
            )}
            {product.product_sale_price >= 1 && (
              <span><b className="font-red">Sale Price: RM {product.product_sale_price}</b></span>
            )}
            {product.product_bulk_quantity >= 1 && (
              <span><b className="font-red">Bundle Deal! Buy {product.product_bulk_quantity} or more for RM {product.product_bulk_price} each</b></span>
            )}
            <span><b>Description: </b>{product.product_name}</span>
            {product.descriptionChinese !== '' && (
              <span><b>Chinese Description: </b>{product.product_descriptionChinese}</span>
            )}
            {product.weight !== ''&& (
              <span><b>Weight: </b>{product.product_weight}</span>
            )}

            {product.product_status !== 0 ? (
              <>
                <span><b>Availability: </b>In Stock</span>
              </>
            ) : (
              <>
                <span><b>Availability: </b>Out Of Stock</span>
              </>
            )}
            <Quantity
              product={product}
            />
            <button onClick={() => dispatch({ type: 'toggle_button' })}>
              { state.active ? "On" : "Off" }
            </button>
          </div>
        </div>        
    </>
  )
}

export default SingleProduct;