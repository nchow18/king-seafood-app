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
            <div className="page-title">
                ADD NEW PRODUCT
            </div>
            <div className="admin-product-row flex-start-row">
                <div className="product-id" value="ID">ID</div>
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
            <div className="flex-start-row">
                <div className="page-title">
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