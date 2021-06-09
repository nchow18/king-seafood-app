import React, { useState } from 'react';
import Fish from '../../assets/images/category/fish.png';
import Fruit from '../../assets/images/category/fruits.png';
import Meat from '../../assets/images/category/meat.png';
import New from '../../assets/images/category/new.png';
import Scallop from '../../assets/images/category/scallop.png';
import Squid from '../../assets/images/category/squid.png';
import Hotpot from '../../assets/images/category/steam.png';
import Featured from '../../assets/images/category/top-rated.png';
import Vegetable from '../../assets/images/category/vegetable.png';
import Sale from '../../assets/images/category/sale.png';
import Bundle from '../../assets/images/category/bundle.png';
import Special from '../../assets/images/category/special.png';
import Shellfish from '../../assets/images/category/shellfish.png';

function MainProducts() {

  const [category] = useState([
		{
			name: 'Sale',
      img: Sale
		},
		{
			name: 'Newest',
      img: New
		},
		{
			name: 'Featured',
      img: Featured
		},
    {
      name: 'Bundles',
      img: Bundle
    },
    {
      name: 'Special',
      img: Special
    },
    {
      name: 'Hotpot',
      img: Hotpot
    },
    {
      name: 'Squid',
      img: Squid
    },
    {
      name: 'Fish',
      img: Fish
    },
    {
      name: 'Shellfish',
      img: Shellfish
    },
    {
      name: 'Scallops',
      img: Scallop
    },
    {
      name: 'Fruits',
      img: Fruit
    },
    {
      name: 'Meat',
      img: Meat
    },
    {
      name: 'Vegetables',
      img: Vegetable
    }    
  ])

  return (
    <>
      <div className="main-promo-container">
        <div className="main-promo-slider">
          {category.map((product) => (
            <div className="slider-container">
              <div className="slider-icon-container">
                <img alt={product.name} src={product.img} className="slider-icon" />
              </div>
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainProducts;