import React from 'react';
import Sale from '../../assets/images/products/sale.jpeg'
import Special from '../../assets/images/products/special.jpeg';
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
          <img alt="caviar" src={Special} />
          <span>SPECIAL PRODUCTS</span>
        </div>
      </div>
    </>
  )
}

export default SaleSpecial;