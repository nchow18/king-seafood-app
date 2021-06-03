import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PRODUCT_PICTURE, UPDATE_PRODUCT_PICTURE } from '../../utils/mutations';

function SinglePictureUpdate(props) {

  const {
    picture,
    product_id
  } = props

  const [removePicture, { error }] = useMutation(REMOVE_PRODUCT_PICTURE);
  const [updateProductPicture] = useMutation(UPDATE_PRODUCT_PICTURE);
  console.log(picture);
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
      alert('Picture Deleted');
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
      alert('Picture Updated')
    } catch (e) {
      console.log(e)
    }
  }

  if (error) return `...ERROR`;

  return (
    <>
      <b className="bold">Picture</b>  
      <div className="picture-update-button" onClick={() => {deletePicture()}}>DELETE</div>
      <div className="picture-update-button" onClick={() => {updatePicture()}}>UPDATE</div>
      <input className="product-picture admin-input-width" name='picture_url' value={formData.picture_url} onChange={handleInputChange} type="text" />
    </>
  )
}

export default SinglePictureUpdate;