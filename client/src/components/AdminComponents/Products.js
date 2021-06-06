import React, { useState } from 'react'
import Auth from '../../utils/auth';
import { PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import DeleteSingleProduct from '../Buttons/DeleteSingleProduct';
import SingleProductEdit from './SingleProductEdit';
import '../../css/Admin.css';

function AdminCategories(props) {

  const {
    currentCategory
  } = props

  const [isModal, setModal] = useState(false);
  const { loading, data} = useQuery(PRODUCTS)
  const productArr = data?.products || {};
  const [products] = useState({...productArr})
  const [singleProduct, setSingleProduct] = useState(products[0])

  var chosenArr = [];

  if (currentCategory.name === 'All') {
    chosenArr = productArr;
  } else {
    const filteredArr = productArr.filter((product) => product.product_category.toLowerCase() === currentCategory.name.toLowerCase());
    chosenArr = filteredArr;
  }

  if (loading) return 'Loading...';

  return (
    <>
      <>
      <div className="admin-products-container">
      {isModal && (
        <div className="single-product-edit-container">  
          <SingleProductEdit
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
            products={products}
            setModal={setModal} />
        </div>
      )}
      {chosenArr.map((product) => (
        <div key={product._id} className="admin-form-container night-bg">
          <div className="admin-input-width" value={`${product._id}`}>{product._id}</div>
            <div className="flex-start-row">
              <div className="admin-input-row">
                <label className="bold">Name</label>
                <div className="admin-input-width">{product.product_name}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Category</label>
                <div className="admin-input-width">{product.product_category}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Price</label>
                <div className="admin-input-width">{product.product_price}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Weight</label>
                <div className="admin-input-width">{product.product_weight}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Chinese Name</label>
                <div className="admin-input-width">{product.product_chineseName}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Status: true/false</label>
                <div className="admin-input-width">{JSON.stringify(product.product_status)}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Product Sale Price</label>
                <div className="admin-input-width">{product.product_sale_price}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Product Bulk Quantity</label>
                <div className="admin-input-width">{product.product_bulk_quantity}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Product Bulk Price</label>
                <div className="admin-input-width">{product.product_bulk_price}</div>
              </div>
              <div className="admin-input-row">
                <label className="bold">Featured: True/False</label>
                <div className="admin-input-width">{JSON.stringify(product.product_featured)}</div>
              </div>
              {product.product_picture.map((picture) => (
                <div className="admin-input-row">
                <label className="bold">Picture</label>
                <div className="admin-input-width admin-picture-font-size">{picture}</div>
                </div>
              ))}              
              <button id={product._id} onClick={() => {setSingleProduct(product);setModal(true)}} className="admin-button">UPDATE</button>
              <DeleteSingleProduct 
                product_id={product._id}
              />
            </div>
          </div>
         ))}
      </div>
      </>
    </>
  )
}

export default AdminCategories;