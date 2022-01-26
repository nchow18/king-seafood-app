import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth.js'
import { useMutation } from '@apollo/react-hooks';
import { ADD_CART } from '../utils/mutations';

function Products(props) {

  const {
    setCart,
    user_type,
    products,
    cart,
    setCurrentHeaderLink,
    promoData,
    userCart,
    setCartQty,
    cartQty
  } = props

  // window.scrollTo(0,0)

  useEffect(() => {

  },[])

  // const products = Object.values(productsArr).filter(prod => prod.product_status !== false);
  
  console.log(products);

  const categories = Auth.getCategories();
  const [productModal, setProductModal] = useState(false);
  const [isCat, setCat] = useState('All');
  const [isCatModal, setCatModal] = useState(false)
  const [currentProduct, setCurrentProduct] = useState();
  const [imageCounter, setImageCounter] = useState(1);
  const [isQty, setQty] = useState(1);
  const [isIndex, setIndex] = useState(0);
  const [addUserCart] = useMutation(ADD_CART);
  const [addedCartModal, setAddedCartModal] = useState(false);

  function previousPic() {
    if (imageCounter !== 1) {
      setImageCounter(imageCounter - 1)
    }
  }

  function nextPic() {
    if (imageCounter !== currentProduct.product_picture.length) {
      setImageCounter(imageCounter + 1)
    }
  }

  function addQty() {
    setQty(isQty + 1)
  }

  function minusQty() {
    if (isQty !== 1) {
      setQty(isQty - 1)
    }
  }

  function priceAdjust() {

    var newPrice = 'Price';

    if (products[isIndex].product_bulk_quantity > 0 && isQty >= products[isIndex].product_bulk_quantity) {
      //check if quantity qualifies for product_bulk_quantity
        newPrice = (isQty * products[isIndex].product_bulk_price).toFixed(2);
    } else if (products[isIndex].product_sale_price !== '0') {
      //check if sale applies
        newPrice = (products[isIndex].product_sale_price * 1.00).toFixed(2);
    } else if (promoData.discount !== '0') {
      //check if global sale applies
      if (products[isIndex].product_bulk_quantity !== 0) {
        newPrice = (products[isIndex].product_price)
      } else {
        newPrice = (products[isIndex].product_price * ((100 - promoData.discount)/100)).toFixed(2);
      }

    } else {
      //no discounts, apply regular price

      newPrice = (products[isIndex].product_price)
    }

    return newPrice;
  }

  function addCart() {

    const prod = currentProduct;

    const prodArr = {}

    var newPrice = '';

    if (prod.product_bulk_quantity > 0 && isQty >= prod.product_bulk_quantity) {
      //check if quantity qualifies for product_bulk_quantity
        newPrice = (isQty * prod.product_bulk_price).toFixed(2);
    } else if (prod.product_sale_price !== '0') {
      //check if sale applies
      if (promoData.discount > '0') {
        newPrice = (prod.product_sale_price * 1.00).toFixed(2) * ((100 - promoData.discount)/100);
      } else {
        newPrice = (prod.product_sale_price * 1.00).toFixed(2);
      }

    } else if (promoData.discount !== '0') {
      //check if global sale applies
      if (prod.product_bulk_quantity !== 0) {
        newPrice = (prod.product_price)
      } else {
        newPrice = (prod.product_price * ((100 - promoData.discount)/100)).toFixed(2);
      }

    } else {
      //no discounts, apply regular price
      newPrice = (products[isIndex].product_price)
    }

    prodArr.quantity = isQty;
    prodArr.product_price = (isQty * newPrice).toFixed(2);
    prodArr.product_name = prod.product_name;
    prodArr.product_sale_price = prod.product_sale_price;
    prodArr.product_bulk_price = prod.product_bulk_price;
    prodArr.product_bulk_quantity = prod.product_bulk_quantity;
    prodArr.product_id = prod.product_id;

    const new_cart = [...cart, prodArr]

    setCart(new_cart)
    userCart.push(prodArr);
    addCartDB(prodArr)
  }

  const addCartDB = async(prod) => {

    try {
      addUserCart({
        variables: {
          input: prod
        }
      })
    } catch (e) {
      console.log(e)
    }

    setAddedCartModal(true);

    removeAlert()
  }

  function removeAlert() {
    setTimeout(timeOut, 1500);
  }

  function timeOut() {
    setAddedCartModal(false);
    setProductModal(false);
    setCartQty(cartQty + 1)
  }

  function twoDec(num) {

    const number = num * 1.00;
    return number.toFixed(2);
  }

  function removeSpace(item) {

    const picture = item.replaceAll(' ', '');

    return picture;
  }

  function sortCategory() {
    var cat = [];

    if (isCat === 'All') {
      cat = products;
    } else if (isCat === 'Sale') {
      const result = products.filter(prod => prod.product_sale_price !== '0');
      cat = result;
    } else if (isCat === 'Newest Products') {
      const result = products.filter(prod => prod.product_new === true);
      cat = result
    } else {
      const result = products.filter(prod => prod.product_category === isCat.toLowerCase());
      cat = result;
    }
    return cat;
  }

  function scrollTop() {
    window.scrollTo(0,0);
  }

  return (
    <div className="products-page-container position-relative padding-1rem">
        {addedCartModal === true && (
          <div className="cart-added-container">
            <div className="cart-added-modal">Added to cart!</div>
          </div>
        )}
        <div className="categories-desktop-container sticky">
          <div className="bold-font">Categories</div>
          <div className="categories-desktop-list">
            {categories.map((cat) => (
              <div key={cat.name} className="category-item" onClick={() => {setCat(cat.name); scrollTop()}}>
                {cat.name}
              </div>
            ))}
          </div>
        </div>
        <div className="categories-mobile-container">
          <div className="bold-font" onClick={() => {setCatModal(true)}}>Categories</div>
            {isCatModal === true && (
              <div className="categories-desktop-list">
                <div className="bold-font" onClick={() => {setCatModal(true)}}>Categories</div>                
                {categories.map((cat) => (
                  <div key={cat.name} className="category-item" onClick={() => {setCat(cat.name); setCatModal(false)}}>
                    {cat.name}
                  </div>
                ))}
              </div>
            )}
        </div>
        <div className="products-desktop-list">
          {sortCategory().map((product, index) => (
            <div key={product._id} className="product-desktop-card" onClick={() => {setProductModal(true); setCurrentProduct(product); setIndex(index)}}>
              <div className="display-flex-center-all position-relative">
                <img alt={product._id} className="product-desktop-picture border-round" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${product.product_id}-1.jpg`} />
                <div className="sale-container">
                  {product.product_bulk_price !== '0' && (
                    <>
                      <i className="fas fa-tags sale-icon"></i>                    
                    </>
                  )}
                  {product.product_sale_price !== '0' && (
                    <>
                      <i className="fas fa-percent sale-icon"></i>
                    </>
                  )}
                </div>

              </div>
              <div className="products-desktop-description">
                <div><b>{product.product_name}</b></div>
                  {product.product_sale_price !== '0' && (
                    <div className="display-flex-column"><div className="line-through padding-right-1rem">RM {product.product_price}</div><b className="bold-font">RM {twoDec(product.product_sale_price)}</b></div>
                  )}
                  {product.product_sale_price === '0' && (
                    <>
                      {product.product_bulk_quantity === 0 && (
                        <>
                          <div className="display-flex-row">RM {twoDec(product.product_price)}</div>
                          {/* <div className="display-flex-row">RM {twoDec(product.product_price * (1 - (promoData.discount/100)))}</div>                                                     */}
                        </>
                      )}
                      {product.product_bulk_quantity !== 0 && (
                        <>
                          <div className="display-flex-row">RM {twoDec(product.product_price)}</div>    
                          <div className="" >Bundle deal! Buy {product.product_bulk_quantity} or more for RM {product.product_bulk_price} each</div>                                                 
                        </>
                      )}                                           
                    </>
                  )}  
              </div>
            </div>
          ))}
        </div>  
      {productModal === true && (
        <div onClick={() => {}} className="product-modal-container display-flex-center-all">
          <div className="product-modal-info padding-1rem">
            <div className="display-flex-right-center" onClick={() => {setProductModal(false); setImageCounter(1)}}><i className="fas fa-times font-size-12px"></i></div>          
            <div className="product-desktop-view">
              <div className="product-desktop-image-container">
                <div className="display-flex-center-all">
                  <img alt={currentProduct._id} className="product-desktop-picture-full border-round" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${currentProduct.product_id}-${imageCounter}.jpg`} />
                </div>
                <div className="display-flex-center-all">
                  {currentProduct.product_picture.length >= 1 && (
                    <div className="product-desktop-mini-pictures display-flex-center-all">
                      {currentProduct.product_picture.length > 1 && (
                        <>
                          <i className="fas fa-arrow-left" onClick={() => (previousPic())}></i>
                        </>
                      )}                      
                      {currentProduct.product_picture.map((picture) => (
                        <div key={picture}>
                          <img alt={picture} src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${removeSpace(picture)}.jpg`} />
                        </div>
                      ))}
                      {currentProduct.product_picture.length > 1 && (
                        <>
                          <i className="fas fa-arrow-right" onClick={() => (nextPic())}></i>
                        </>
                      )}                      
                    </div>
                  )}
                </div>          
              </div>
              <div className="product-desktop-view-details">
                <div className="font-size-large bold-font">{currentProduct.product_name}</div>
                {currentProduct.product_sale_price !== '0' && (
                  <div className="display-flex-row"><div className="line-through padding-right-1rem">RM {currentProduct.product_price}</div><b className="bold-font">RM {twoDec(currentProduct.product_sale_price)}</b></div>
                )}
                {currentProduct.product_sale_price === '0' && (
                  <div className="display-flex-row">RM {currentProduct.product_price}</div>
                )}                

                {currentProduct.product_bulk_price !== '0' && (
                  <div>Bundle Deal! Buy {currentProduct.product_bulk_quantity} or more for RM {currentProduct.product_bulk_price} each</div>
                )}
                {currentProduct.product_description1 !== '0' && (
                  <div>
                    - {currentProduct.product_description1}
                  </div>
                )}
                {currentProduct.product_description2 !== '0' && (
                  <div>
                    - {currentProduct.product_description2}
                  </div>
                )}
                {currentProduct.product_description3 !== '0' && (
                  <div>
                    - {currentProduct.product_description3}
                  </div>
                )}
                {currentProduct.product_description4 !== '0' && (
                  <div>
                    - {currentProduct.product_description4}
                  </div>
                )}                                                
              </div>
            </div>
            <div className="product-add-cart-container">
              {Auth.loggedIn() ? (
                  <>
                    {currentProduct.product_status ? (
                      <>
                        <div className="quantity-container">
                            <div onClick={() => {minusQty()}}>-</div>
                            <div>{isQty}</div>
                            <div onClick={() => {addQty()}}>+</div>
                          </div>
                        <div className="cart-button" onClick={() => {addCart()}}>ADD TO CART</div>
                      </>
                    ) : (
                      <div className="cart-button" onClick={() => {}}>OUT OF STOCK</div> 
                    )}

                  </>
                ) : (
                  <div className="cart-button" onClick={() => {setCurrentHeaderLink('Sign In')}}>LOG IN OR SIGN UP FOR CART</div>                  
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products;