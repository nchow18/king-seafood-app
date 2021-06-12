import React from 'react';
import { PROMO } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import '../css/Promotions.css';

function Promotions() {
    
    const { loading, data } = useQuery(PROMO);
    const promo = data?.promo || {};

    if (loading) return `...Loading`;

    console.log(promo);

    return (
        <>
    	    <div className="promo-page-content">
            <div className="promo-page-container">
              <img alt="promo" src={promo[0].promoPicture1} className="promo-page-img"/>
            </div>

          </div>
        </>
    )
}

export default Promotions;