import React from 'react';
import Auth from '../utils/auth';
import '../css/Admin.css';

function AdminProducts() {

    const products = Auth.getProductArr();

    function updateProduct() {
        window.confirm('Confirm Product Update');
    }

    function deleteProduct(id) {
        window.confirm('product ' + id + ' removed')
    }

    function addProduct() {
        window.confirm('Add product?')
    }

    return (
        <>
        <div className="flex-start-column">
            <div className="page-title">
                ADD NEW PRODUCT
            </div>
            <div className="admin-product-row flex-start-row">
                <input className="product-id" value="ID"></input>
                <form onSubmit={addProduct}>
                    <input className="product-name" name='name' placeholder="NAME" type="text"></input>
                    <input className="product-category" name='category' placeholder="CATEGORY" type="text"></input>
                    <input className="product-price" name='price' placeholder="PRICE" type="text"></input>
                    <input className="product-description" name='description' placeholder="DESCRIPTION" type="text"></input>
                    <input className="product-weight" name='weight' placeholder="WEIGHT" type="text"></input>
                    <input className="product-name-chinese" name='nameChinese' placeholder="NAME_CHINESE" type="text"></input>
                    <input className="product-description-chinese" name='descriptionChinese' placeholder="DESCRIPTION_CHINESE" type="text"></input>
                    <button className="admin-add-product-button" type='submit'>ADD PRODUCT</button>
                </form>
            </div>
            <div className="page-title">
                CURRENT PRODUCTS
            </div>
            <div className="admin-product-row flex-start-row">
                <input className="product-id" value="ID"></input>
                <input className="product-name" value="NAME"></input>
                <input className="product-category" value="CATEGORY"></input>
                <input className="product-price" value="PRICE"></input>
                <input className="product-description" value="DESCRIPTION"></input>
                <input className="product-weight" value="WEIGHT"></input>
                <input className="product-name-chinese" value="NAME-CHINESE"></input>
                <input className="product-description-chinese" value="DESCRIPTION-CHINESE"></input>
            </div>
            {products.map((product) => (
                <div className="admin-product-row flex-start-row">
                    <input className="product-id" value={product._id}></input>
                    <form onSubmit={updateProduct}>
                        <input className="product-name" name='name' placeholder={product.name} type="text"></input>
                        <input className="product-category" name='category' placeholder={product.category} type="text"></input>
                        <input className="product-price" name='price' placeholder={product.price} type="text"></input>
                        <input className="product-description" name='description' placeholder={product.description} type="text"></input>
                        <input className="product-weight" name='weight' placeholder={product.weight} type="text"></input>
                        <input className="product-name-chinese" name='nameChinese' placeholder={product.nameChinese} type="text"></input>
                        <input className="product-description-chinese" name='descriptionChinese' placeholder={product.descriptionChinese} type="text"></input>
                        <button className="admin-product-button" type='submit'>UPDATE</button>
                    </form>
                    <button className="admin-product-button" id={product._id} onClick={() => { deleteProduct(product._id )}}>DELETE</button>
                </div>
            ))}
        </div>

        </>
    )
}

export default AdminProducts;