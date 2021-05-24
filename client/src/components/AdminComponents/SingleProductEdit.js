import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { PRODUCT } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_PRODUCT, UPDATE_PRODUCT } from '../../utils/mutations';
import { useLocation } from 'react-router-dom';

function SingleProductEdit() {

    const [formData, setProductFormData] = useState({
        product_name: '',
        product_category: '',
        product_weight: '',
        product_price: '',
        product_picture: '',
        product_nameChinese: '',
        product_descriptionChinese: '',
    })
    const location = useLocation();
    const { id: product_id } = useParams();
    const [updateProduct, { error }] = useMutation(UPDATE_PRODUCT)
    const { loading, data} = useQuery(PRODUCT, { variables: { product_id: product_id }})

    const product = data?.products || {};

    console.log(product)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductFormData({
            ...formData,
            [name]: value
        })
    }

    const updateProductFormSubmit = async (id) => {

        try {
            updateProduct({ variables: {
                product_id: id, 
                input: {
                    product_name: formData.product_name,
                    product_description: formData.product_description,
                    product_price: parseInt(formData.product_price),
                    product_weight: formData.product_weight,
                    product_nameChinese: formData.product_nameChinese,
                    product_descriptionChinese: formData.product_descriptionChinese,
                    product_picture: formData.product_picture,
                    product_category: formData.product_category,
                    product_status: JSON.parse(formData.product_status.toLowerCase())
                },
             }})

            alert('product updated');
        } catch (id) {
            console.log(id);
        }
    } 

    const deleteProductFormSubmit = async (e) => {
        e.preventDefault();
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(formData);

    return (
        location.pathname === `/productupdate/${product_id}` &&
        <>
            <button>Refresh Products Data</button>
                <div className="admin-product-row flex-start-row night-bg">
                    <div className="product-id id-input-width" value={`${product._id}`}>{product._id}</div>
                    <form className="flex-start-row" onSubmit={updateProductFormSubmit}>

                    <div className="flex-start-column">
                            <label className="bold">Name</label>
                            <input key="test" value={`${formData.product_name}`} onChange={handleInputChange} className="product-name id-input-width" name='product_name' placeholder={product.product_name} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Category</label>
                            <input value={formData.product_category} onChange={handleInputChange} className="product-category admin-input-width" name='product_category' placeholder={product.product_category} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Price</label>
                            <input value={formData.product_price} onChange={handleInputChange} className="product-price admin-input-width" name='product_price' placeholder={product.product_price} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Description</label>
                            <input value={formData.product_description} onChange={handleInputChange} className="product-description admin-input-width" name='product_description' placeholder={product.product_description} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Weight</label>
                            <input value={formData.product_weight} onChange={handleInputChange} className="product-weight admin-input-width" name='product_weight' placeholder={product.product_weight} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Chinese Name</label>
                            <input value={formData.product_nameChinese} onChange={handleInputChange} className="product-name-chinese admin-input-width" name='product_nameChinese' placeholder={product.product_nameChinese} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Chinese Description</label>
                            <input value={formData.product_descriptionChinese} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_descriptionChinese} name='product_descriptionChinese' type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Product Status: true/false</label>
                            <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' placeholder={product.product_status.toString()} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Picture Location</label>
                            <input value={formData.product_picture} onChange={handleInputChange} className="product-picture admin-input-width" name='product_picture' placeholder={product.product_picture} type="text"></input>
                        </div>
                            <button id={product._id} onClick={() => {updateProductFormSubmit( product._id )}} className="admin-product-button admin-input-width" type='submit'>UPDATE</button>
                    </form>
                    <button className="admin-product-button" id={product._id} onClick={() => { deleteProductFormSubmit(product._id )}}>DELETE</button>
                </div>
        </>
    )
}

export default SingleProductEdit;