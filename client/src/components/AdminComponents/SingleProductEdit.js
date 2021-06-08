import React, { useState, useEffect } from 'react';

import '../../css/Admin.css';
import SinglePictureUpdate from '../AdminComponents/SinglePictureUpdate';
import SingleProductInput from './SingleProductInput';
import SingleProductView from './SingleProductView';

function SingleProductEdit(props) {

  const {
    singleProduct,
    setEdit,
    edit
  } = props

  const product = singleProduct
  const pictureArr = product.product_picture;

  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log('updating picture slot');
  }, [status])

  return (
    <>
      <form className="admin-form-container night-bg">
        {edit ? (
          <>
            <div className="admin-button" onClick={() => {setEdit(false)}}>EDIT PRODUCT</div>
            <SingleProductView 
              product={product}
            />
          </>
        ) : (
          <>
          <div className="admin-button" onClick={() => {setEdit(true)}}>VIEW PRODUCT</div>
            <SingleProductInput 
            product={product}
          />
          </>
        )}
          {product.product_picture.map((picture) => (
            <div key={picture} className="admin-input-row">
              <SinglePictureUpdate
                pictureArr={pictureArr}
                product_id={product._id}
                picture={picture}
                setStatus={setStatus}
                edit={edit}
                setEdit={setEdit}/>

            </div>
          ))}              

      </form>  
    </>
  )
}

export default SingleProductEdit;