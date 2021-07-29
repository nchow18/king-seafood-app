import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/GlobalState';
import '../../css/Admin.css';
import SinglePictureUpdate from '../AdminComponents/SinglePictureUpdate';
import SingleProductInput from './SingleProductInput';
import SingleProductView from './SingleProductView';

function SingleProductEdit(props) {

  const {
    singleProduct,
    setEdit,
    edit,
    productArr
  } = props

  const product = singleProduct
  const pictureArr = product.product_picture;
  const [status, setStatus] = useState(false);
  const [currentPicture, updatePictureState] = useState(false);

  useEffect(() => {
    console.log('updating picture slot');
    setStatus(false);
    updatePictureState(false);
  }, [status, currentPicture])

  function deletePictureArr(product_id, picture_url) {
    console.log('deleting picture: ' + product_id);

    let product_index = '';
    let picture_index = '';

    //finding product index
    for (var i = 0; i < productArr.length; i++) {
      if (productArr[i]._id === product_id) {
        product_index += i;
      }
    }

    // finding picture index
    for (var r = 0; r < pictureArr.length; r++) {
      if (pictureArr[r] === picture_url) {
        picture_index += r;
      }
    }

    console.log('picture URL: ' + picture_url);
    console.log('picture_index: ' + picture_index);
    console.log('index: ' + product_index);
    console.log(productArr[product_index].product_picture)

    productArr[product_index].product_picture.splice(picture_index,1);
    console.log(productArr[product_index].product_picture)
  }

  function updatePictureArr(product_id, picture_url, new_picture) {
    console.log('updating picture: ' + product_id)

    let product_index = '';
    let picture_index = '';

    //finding product index
    for (var i = 0; i < productArr.length; i++) {
      if (productArr[i]._id === product_id) {
        product_index += i;
      }
    }

    // finding picture index
    for (var r = 0; r < pictureArr.length; r++) {
      if (pictureArr[r] === picture_url) {
        picture_index += r;
      }
    }

    console.log('picture URL: ' + picture_url);
    console.log('picture_index: ' + picture_index);
    console.log('index: ' + product_index);
    console.log(productArr[product_index].product_picture)

    productArr[product_index].product_picture.splice(picture_index,1);
    console.log(productArr[product_index].product_picture)

    productArr[product_index].product_picture.push(new_picture)
    console.log(productArr[product_index].product_picture)
  }

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
        {currentPicture ? (
          <>
          {product.product_picture.map((picture) => (
            <div key={picture} className="admin-input-row">
              <SinglePictureUpdate
                pictureArr={pictureArr}
                product_id={product._id}
                picture={picture}
                updatePictureState={updatePictureState}
                deletePictureArr={deletePictureArr}
                setStatus={setStatus}
                edit={edit}
                setEdit={setEdit}/>
            </div>
          ))} 
          </>
        ) : (
          <>
          {product.product_picture.map((picture) => (
            <div key={picture} className="admin-input-row">
              <SinglePictureUpdate
                pictureArr={pictureArr}
                product_id={product._id}
                picture={picture}
                updatePictureState={updatePictureState}
                deletePictureArr={deletePictureArr}
                updatePictureArr={updatePictureArr}
                setStatus={setStatus}
                edit={edit}
                setEdit={setEdit}/>
            </div>
          ))} 
          </>
        )}
            
      </form>  
    </>
  )
}

export default SingleProductEdit;