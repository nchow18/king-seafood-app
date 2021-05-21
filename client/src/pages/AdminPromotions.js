import React from 'react';
import Auth from '../utils/auth';

function AdminPromotions() {

    const promo = Auth.getPromotions();

    console.log(promo);

    function updateForm() {

    }

    return (
        <>
            <div className="flex-c-column order-container">
                <form onSubmit={updateForm}className="flex-start-row">
                    <div>
                        <b>HOME PAGE PROMO</b>
                        <div className="flex-start-row admin-input-width">
                            <label>MAIN PROMO</label>
                            <textarea placeholder={promo[0].mainPromo}></textarea>
                        </div>
                    </div>


                        <div className="flex-start-column admin-input-width">
                            <label>Promotion 1</label>
                            <input placeholder={promo[0].promoMsg1}></input>
                            <label>Promotion 1 - Start Date</label>
                            <input className="date-input-size" type="date"></input>
                            <label>Promotion 1 - End Date</label>
                            <input className="date-input-size" type="date"></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Promotion 2</label>
                            <input placeholder={promo[0].promoMsg2}></input>
                            <label>Promotion 1 - Start Date</label>
                            <input className="date-input-size" type="date"></input>
                            <label>Promotion 1 - End Date</label>
                            <input className="date-input-size" type="date"></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Promotion 3</label>
                            <input placeholder={promo[0].promoMsg3}></input>
                            <label>Promotion 1 - Start Date</label>
                            <input className="date-input-size" type="date"></input>
                            <label>Promotion 1 - End Date</label>
                            <input className="date-input-size" type="date"></input>
                        </div>

                    <div>    
                        <b>FEATURED PRODUCT 1</b>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Name</label>
                            <input placeholder={promo[0].featuredProduct1[0].name}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product ID</label>
                            <input placeholder={promo[0].featuredProduct1[0].productId}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Price</label>
                            <input placeholder={promo[0].featuredProduct1[0].price}></input>                            
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Picture</label>
                            <input placeholder={promo[0].featuredProduct1[0].picture}></input>                        
                        </div>
                    </div>
                    <div>
                        <b>FEATURED PRODUCT 2</b>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Name</label>
                            <input placeholder={promo[0].featuredProduct1[0].name}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product ID</label>
                            <input placeholder={promo[0].featuredProduct2[0].productId}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Price</label>
                            <input placeholder={promo[0].featuredProduct1[0].price}></input>                            
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Picture</label>
                            <input placeholder={promo[0].featuredProduct1[0].picture}></input>                        
                        </div>
                    </div>
                    <div>
                        <b>FEATURED PRODUCT 3</b>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Name</label>
                            <input placeholder={promo[0].featuredProduct1[0].name}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product ID</label>
                            <input placeholder={promo[0].featuredProduct3[0].productId}></input>
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Price</label>
                            <input placeholder={promo[0].featuredProduct1[0].price}></input>                            
                        </div>
                        <div className="flex-start-row admin-input-width">
                            <label>Featured Product Picture</label>
                            <input placeholder={promo[0].featuredProduct1[0].picture}></input>                        
                        </div>
                    </div>
                    <button className="order-button">UPDATE</button>
                </form>
            </div>
        </>
    )
}

export default AdminPromotions;