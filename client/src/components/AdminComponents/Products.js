import React from 'react'
import Auth from '../../utils/auth';

function AdminCategories(props) {

    const products = Auth.getProductArr();

    const {
        chosenArr = []
    } = props

    function updateProduct() {
        window.confirm('Confirm Product Update');
    }

    function deleteProduct(id) {
        window.confirm('product ' + id + ' removed')
    }

    return (
        <>
            <div className="admin-product-row flex-start-row">
                <input className="product-id" value="ID"></input>
                <input className="product-name" value="NAME"></input>
                <input className="product-category" value="CATEGORY"></input>
                <input className="product-price" value="PRICE"></input>
                <input className="product-description" value="DESCRIPTION"></input>
                <input className="product-weight" value="WEIGHT"></input>
                <input className="product-name-chinese" value="NAME_CHINESE"></input>
                <input className="product-description-chinese" value="DESCRIPTION_CHINESE"></input>
            </div>
            {chosenArr.map((product) => (
                <div className="admin-product-row flex-start-row">
                    <div className="product-id" value={product._id}>{product._id}</div>
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
        </>
    )
}

export default AdminCategories;