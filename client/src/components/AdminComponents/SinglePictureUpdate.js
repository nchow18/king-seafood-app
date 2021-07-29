import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PRODUCT_PICTURE, UPDATE_PRODUCT_PICTURE } from '../../utils/mutations';
import { UserContext } from '../../utils/GlobalState';

function SinglePictureUpdate(props) {

  const {
    picture,
    product_id,
    deletePictureArr,
    updatePictureArr,
    productArr,
    updatePictureState
  } = props

  const [dispatch] = useContext(UserContext);
  const [removePicture, { error }] = useMutation(REMOVE_PRODUCT_PICTURE);
  const [updateProductPicture] = useMutation(UPDATE_PRODUCT_PICTURE);
  const [formData, setFormData] = useState({
    picture_url: picture
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const deletePicture = async (e) => {
    try {
      removePicture({
        variables: {
          product_id: product_id,
          product_url: picture
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const updatePicture = async (e) => {
    try {
      updateProductPicture({
        variables: {
          product_url: formData.picture_url,
          product_id: product_id,
          product_old_url: picture
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (error) return `...ERROR`;

  return (
    <>
      <b className="bold">Picture</b>  
      {/* <div className="picture-update-button" onClick={() => {deletePicture()}}>DELETE</div> */}
      <div className="picture-update-button" onClick={() => {deletePictureArr(product_id, picture); updatePictureState(true); deletePicture()}}>DELETE</div>
      {/* <div className="picture-update-button" onClick={() => {updatePictureArr(product_id, picture); updatePicture();}}>UPDATE</div> */}
      <div className="picture-update-button" onClick={() => {updatePictureArr(product_id, picture, formData.picture_url); updatePicture(); updatePictureState(true)}}>UPDATE</div>
      <input className="product-picture admin-input-width" name='picture_url' value={formData.picture_url} onChange={handleInputChange} type="text" />
    </>
  )
}

export default SinglePictureUpdate;