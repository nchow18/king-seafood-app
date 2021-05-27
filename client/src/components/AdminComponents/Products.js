import React, { useState } from 'react'
import Auth from '../../utils/auth';
import { PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import DeleteSingleProduct from '../Buttons/DeleteSingleProduct';

function AdminCategories(props) {

  const [mounted, setMounted] = useState(true);
  const { loading, data} = useQuery(PRODUCTS)
  const productArr = data?.products || {};

  const updateProductFormSubmit = async (e) => {
    Auth.setAdminSingleProductId(e);
    Auth.updateSingleProduct();
  } 

  const toggle = () => setMounted(!mounted);
  if (loading) return 'Loading...';

  return (
    <>
    {/* <button onClick={toggle} >Refresh Products Data</button> */}
    {mounted && (
      <>
      <div className="admin-products-container">
      {productArr.map((product) => (
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
                <div className="admin-input-width">{JSON.parse(product.product_status)}</div>
              </div>              
              <button id={product._id} onClick={() => {updateProductFormSubmit( product._id )}} className="admin-button">UPDATE</button>
              <DeleteSingleProduct 
                product_id={product._id}
              />
            </div>
          </div>
         ))}
      </div>
      </>
    )}  
    
    </>
  )
}

export default AdminCategories;