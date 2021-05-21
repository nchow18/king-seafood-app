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
            {chosenArr.map((product) => (
                <div className="admin-product-row flex-start-row night-bg">
                    <div className="product-id" value={product._id}>{product._id}</div>
                    <form className="flex-start-row" onSubmit={updateProduct}>
                        <div className="flex-start-column padding-1rem">
                            <label className="bold">Name</label>
                            <input className="product-name admin-input-width" name='name' placeholder={product.name} type="text"></input>
                            <label className="bold">Category</label>
                            <input className="product-category admin-input-width" name='category' placeholder={product.category} type="text"></input>
                            <label className="bold">Price</label>
                            <input className="product-price admin-input-width" name='price' placeholder={product.price} type="text"></input>
                            <label className="bold">Description</label>
                            <input className="product-description admin-input-width" name='description' placeholder={product.description} type="text"></input>
                        </div>
                        <div className="flex-start-column">
                        <label className="bold">Weight</label>
                            <input className="product-weight admin-input-width" name='weight' placeholder={product.weight} type="text"></input>
                            <label className="bold">Chinese Name</label>
                            <input className="product-name-chinese admin-input-width" name='nameChinese' placeholder={product.nameChinese} type="text"></input>
                            <label className="bold">Chinese Description</label>
                            <input className="product-description-chinese admin-input-width" name='descriptionChinese' placeholder={product.descriptionChinese} type="text"></input>
                            <label className="bold">Picture Location</label>
                            <input className="product-picture admin-input-width" name='picture' placeholder={product.picture} type="text"></input>
                            <button className="admin-product-button admin-input-width" type='submit'>UPDATE</button>
                        </div>
                    </form>
                    <button className="admin-product-button" id={product._id} onClick={() => { deleteProduct(product._id )}}>DELETE</button>
                </div>
            ))}
        </>
    )
}

export default AdminCategories;