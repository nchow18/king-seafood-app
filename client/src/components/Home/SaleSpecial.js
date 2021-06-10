import React from 'react';
import Sale from '../../assets/images/sale-platter.jpeg'
import Caviar from '../../assets/images/special-caviar.jpeg';
import Auth from '../../utils/auth';

function SaleSpecial(props) {

  function storeCategory(product) {
    Auth.setCategory(product);
  }

  return (
    <>
      <div className="sale-special-content">
        <div onClick={() => {storeCategory({name: 'Sale'})}}>
          <img alt="sale" src={Sale} />
          <span>SALE</span>
        </div>
        <div onClick={() => {storeCategory({name: 'Special'})}}>
          <img alt="caviar" src={Caviar} />
          <span>SPECIAL PRODUCTS</span>
        </div>
      </div>
    </>
  )
}

export default SaleSpecial;