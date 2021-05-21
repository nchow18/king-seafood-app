import React, { useState, useEfect, useEffect } from 'react';
import Auth from '../utils/auth';
import '../css/Admin.css';
import AdminCategories from '../components/AdminComponents/Products';
import ReactDOM from 'react-dom';

function AdminProducts() {

    const productsArr = Auth.getProductArr();
    const catArr = Auth.getCategories();

    const categories = catArr;

    function addProduct() {
        window.confirm('Add product?')
    }

    var chosenArr = '';

    const sortCategory = async (event) => {
        event.preventDefault();
        const e = document.getElementById('select-category');
        const category = e.value;
        
        Auth.adminSetCategory(category);
    }

    if (Auth.adminGetCategory() === 'All') {
        chosenArr = productsArr;
        console.log(chosenArr);
    } else {
        chosenArr = productsArr.filter((product) => product.category === Auth.adminGetCategory());
        console.log(chosenArr);
    }

    useEffect((event) => {
        console.log('render!');
    })

    const [mounted, setMounted] = useState(true);
    const toggle = () => setMounted(!mounted);

    return (
        <>
        <div className="flex-start-column">
            <div className="page-title bold font-2rem">
                    ADD NEW PRODUCT
            </div>
            <div className="admin-product-row flex-start-row">
                <div className="product-id" value="ID">ID</div>
                <form className="flex-start-row" onSubmit={addProduct}>
                        <div className="flex-start-column padding-1rem">
                            <label className="bold">Name</label>
                            <input className="product-name admin-input-width" name='name' type="text"></input>
                            <label className="bold">Category</label>
                            <input className="product-category admin-input-width" name='category' type="text"></input>
                            <label className="bold">Price</label>
                            <input className="product-price admin-input-width" name='price' type="text"></input>
                            <label className="bold">Description</label>
                            <input className="product-description admin-input-width" name='description' type="text"></input>
                        </div>
                        <div className="flex-start-column">
                        <label className="bold">Weight</label>
                            <input className="product-weight admin-input-width" name='weight' type="text"></input>
                            <label className="bold">Chinese Name</label>
                            <input className="product-name-chinese admin-input-width" name='nameChinese' type="text"></input>
                            <label className="bold">Chinese Description</label>
                            <input className="product-description-chinese admin-input-width" name='descriptionChinese' type="text"></input>
                            <label className="bold">Picture Location</label>
                            <input className="product-picture admin-input-width" name='picture' type="text"></input>
                            <button className="admin-product-button admin-input-width" type='submit'>ADD PRODUCT</button>
                        </div>
                    </form>
            </div>
            <div className="flex-start-row">
                <div className="page-title bold font-2rem">
                    CURRENT PRODUCTS
                </div>
                <form className="sort-list" onSubmit={sortCategory}>
                    <label for="category">Sort by CATEGORY:</label>
                    <select id="select-category" name="category">
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <button onClick={toggle} type="submit">SELECT</button>
                    - (Click twice to REFRESH)
                </form>
            </div>
            {mounted && <AdminCategories
            chosenArr={chosenArr}
             />}


        </div>

        </>
    )
}

export default AdminProducts;