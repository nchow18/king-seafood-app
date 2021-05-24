import React, { useState, useEffect } from 'react'
import Auth from '../../utils/auth';
import { PRODUCT, PRODUCTS } from '../../utils/queries';
import { REMOVE_PRODUCT, UPDATE_PRODUCT } from '../../utils/mutations';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';

function AdminCategories(props) {

    const [formData, setProductFormData] = useState({
        product_name: '',
        product_category: '',
        product_weight: '',
        product_price: '',
        product_picture: '',
        product_nameChinese: '',
        product_descriptionChinese: '',
    })

    const [updateProduct, { error }] = useMutation(UPDATE_PRODUCT)
    const [productData, { loading, data }] = useLazyQuery(PRODUCTS)
    const { products } = state;

    useEffect(() => {
        if ()
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductFormData({
            ...formData,
            [name]: value
        })
    }

    const updateProductFormSubmit = async (e) => {
        e.preventDefault();

        try {
            updateProduct({ variables: { input: {
                product_name: formData.product_name,
                product_description: formData.product_description,
                product_price: parseInt(formData.product_price),
                product_weight: formData.product_weight,
                product_nameChinese: formData.product_nameChinese,
                product_descriptionChinese: formData.product_descriptionChinese,
                product_picture: formData.product_picture,
                product_category: formData.product_category,
                product_status: JSON.parse(formData.product_status.toLowerCase())
            } }})

            alert('product added');
        } catch (e) {
            console.log(e);
        }
    } 

    const deleteProductFormSubmit = async (e) => {
        e.preventDefault();
    }

    const {
        chosenArr = []
    } = props


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>  
            {chosenArr.map((product) => (
                <div className="admin-product-row flex-start-row night-bg">
                    <div className="product-id" value={product._id}>{product._id}</div>
                    <form className="flex-start-row" onSubmit={updateProductFormSubmit}>

                    <div className="flex-start-column">
                            <label className="bold">Name</label>
                            <input value={formData.product_name} onChange={handleInputChange} className="product-name id-input-width" name='product_name' placeholder={product.product_name} type="text"></input>
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
                            <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' placeholder={product.product_status} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                            <label className="bold">Picture Location</label>
                            <input value={formData.product_picture} onChange={handleInputChange} className="product-picture admin-input-width" name='product_picture' placeholder={product.product_picture} type="text"></input>
                        </div>
                            <button className="admin-product-button admin-input-width" type='submit'>UPDATE</button>
                    </form>
                    <button className="admin-product-button" id={product._id} onClick={() => { deleteProductFormSubmit(product._id )}}>DELETE</button>
                </div>
            ))}
        </>
    )
}

export default AdminCategories;