import React, { useState, useContext } from 'react';
import Auth from '../../utils/auth';
import { useMutation} from '@apollo/react-hooks';
import { REMOVE_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT_PICTURE } from '../../utils/mutations';
import '../../css/Admin.css';
import UpdateProductInputFields from './SingleProductInputFields';
import { UserContext } from '../../utils/GlobalState';

function SingleProductEdit(props) {

  const {
    singleProduct,
    setModal
  } = props

  const product = singleProduct
  const pictureArr = product.product_picture;

  const [state, dispatch] = useContext(UserContext);
  const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [addPicture] = useMutation(ADD_PRODUCT_PICTURE);

  const [formData, setFormData] = useState({
    product_name: product.product_name,
    product_description: product.product_description,
    product_category: product.product_category,
    product_weight: product.product_weight,
    product_price: product.product_price,
    product_picture: product.product_picture,
    product_nameChinese: product.product_nameChinese,
    product_status: JSON.stringify(product.product_status),
    product_descriptionChinese: product.product_descriptionChinese,
    product_sale_price: product.product_sale_price,
    product_bulk_quantity: product.product_bulk_quantity,
    product_bulk_price: product.product_bulk_price,
    product_featured: product.product_featured
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const updateProductFormSubmit = async (e) => {

    try {
      updateProduct({ variables: {
        product_id: product._id, 
        input: {
          product_name: formData.product_name,
          product_description: formData.product_description,
          product_price: formData.product_price,
          product_weight: formData.product_weight,
          product_nameChinese: formData.product_nameChinese,
          product_descriptionChinese: formData.product_descriptionChinese,
          product_picture: formData.product_picture,
          product_category: formData.product_category,
          product_status: JSON.parse(formData.product_status.toLowerCase()),
          product_sale_price: formData.product_sale_price,
          product_bulk_quantity: parseInt(formData.product_bulk_quantity),
          product_bulk_price: formData.product_bulk_price,
          product_featured: JSON.parse(formData.product_featured)
        },
       }})

      alert('product updated');
    } catch (e) {
      console.log(e);
    }
  } 

  const deleteProductFormSubmit = async (e) => {

    var confirm = window.confirm('Continue to DELETE product');

    if (confirm === false) {
      return false;
    }

    try {
      removeProduct({ variables: {
        product_id: product.product_id
      }})

      window.location.href =`/admindashboard`;
    } catch (e) {
      console.log(e);
    }
  }

  const addProductPicture = async (e) => {

    console.log('adding picture slot');

    try {
      addPicture({
        variables: {
          product_url: "",
          product_id: product._id
        }
      })
      alert('Picture slot added');
    } catch (e) {
      console.log(e)
    }
  }

  function returnDashboard() {
    window.location.href = `/admindashboard`;
  }


  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="admin-container">
        <i onClick={() => {setModal(false)}} className="fas fa-times admin-close"></i>
          <div className="margin-2rem" onClick={returnDashboard}>Return To Product List</div>
          {state.active === true && (
            <UpdateProductInputFields 
              handleInputChange={handleInputChange}
              formData={formData}
              updateProductFormSubmit={updateProductFormSubmit}
              addProductPicture={addProductPicture}
              deleteProductFormSubmit={deleteProductFormSubmit}
              pictureArr={pictureArr}
              product={product}
            />
          )}
          {state.active === false && (
            <UpdateProductInputFields 
            handleInputChange={handleInputChange}
            formData={formData}
            updateProductFormSubmit={updateProductFormSubmit}
            addProductPicture={addProductPicture}
            deleteProductFormSubmit={deleteProductFormSubmit}
            pictureArr={pictureArr}
            product={product}
          />            
          )}
        </div>
    </>
  )
}

export default SingleProductEdit;