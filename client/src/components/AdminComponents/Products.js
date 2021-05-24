import React, { useState, useEffect } from 'react'
import Auth from '../../utils/auth';
import { PRODUCT, PRODUCTS } from '../../utils/queries';
import { REMOVE_PRODUCT, UPDATE_PRODUCT } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';

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
    const { loading, data} = useQuery(PRODUCTS)


    const productArr = data?.products || {};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductFormData({
            ...formData,
            [name]: value
        })
    }

    const updateProductFormSubmit = async (e) => {
        Auth.setAdminSingleProductId(e);
        Auth.updateSingleProduct();
    } 

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(formData);


    return (
        <>  
        <div className="flex-start-column">
            <button>Refresh Products Data</button>
            {productArr.map((product) => (
                <div className="admin-product-row flex-start-row night-bg">
                    <div className="product-id id-input-width" value={`${product._id}`}>{product._id}</div>
                    <div className="flex-start-row">

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
                            <button id={product._id} onClick={() => {updateProductFormSubmit( product._id )}} className="admin-product-button admin-input-width">UPDATE</button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default AdminCategories;