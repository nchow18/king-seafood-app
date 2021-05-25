import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import '../css/Home.css';

function Home() {

    function viewProduct(id) {
        Auth.setSingleProduct(id);
        Auth.viewSingleProduct();
    }

    return (
        <>
    	    {/* <div className="flex-c-column content">
                <div className="flex-c-row">
                    <div className="promo-img-container">
                        <img alt={promo[0].featuredProduct1[0].name} className="promo-img" src={promo[0].featuredProduct1[0].picture} />
                        <div key={promo[0].featuredProduct1[0].productId} onClick={() => { viewProduct(promo[0].featuredProduct1[0].productId )}} className="promo-img-title">
                            <p>{promo[0].featuredProduct1[0].name}</p>
                            <p>RM {promo[0].featuredProduct1[0].price}</p>
                        </div>
                    </div>
                    <div className="promo-img-container">
                        <img alt={promo[0].featuredProduct1[0].name} className="promo-img" src={promo[0].featuredProduct2[0].picture} />
                        <div key={promo[0].featuredProduct2[0].productId} onClick={() => { viewProduct(promo[0].featuredProduct2[0].productId )}} className="promo-img-title">
                            <p>{promo[0].featuredProduct2[0].name}</p>
                            <p>RM {promo[0].featuredProduct2[0].price}</p>
                        </div>
                    </div>
                    <div className="promo-img-container">
                        <img alt={promo[0].featuredProduct1[0].name} className="promo-img" src={promo[0].featuredProduct3[0].picture} />
                        <div key={promo[0].featuredProduct3[0].productId} onClick={() => { viewProduct(promo[0].featuredProduct3[0].productId )}} className="promo-img-title">
                            <p>{promo[0].featuredProduct3[0].name}</p>
                            <p>RM {promo[0].featuredProduct3[0].price}</p>
                        </div>
                    </div>
                </div>                
            </div> */}
        </>
    )
}

export default Home;