import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PRODUCT } from '../../utils/mutations';

function DeleteSingleProduct(props) {

  const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT);

  const {
    product_id
  } = props

  const deleteProductSubmit = async (event) => {
    var confirm = window.confirm('Confirm Deleting Product');

    if (confirm === false) {
      return false;
    }

    try {
      removeProduct({
        variables: { product_id: product_id }
      })

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <>
      <button id={product_id} onClick={() => {deleteProductSubmit(product_id)}} className="admin-button">DELETE</button>
    </>
  )
}

export default DeleteSingleProduct;