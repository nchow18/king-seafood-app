import React, { useState } from 'react';
import Fish from '../../assets/images/category/fish.png';
import Fruit from '../../assets/images/category/fruits.png';
import Meat from '../../assets/images/category/meat.png';
import New from '../../assets/images/category/new.png';
import Scallop from '../../assets/images/category/scallop.png';
import Squid from '../../assets/images/category/squid.png';
import Hotpot from '../../assets/images/category/hotpot.png';
import Featured from '../../assets/images/category/top-rated.png';
import Vegetable from '../../assets/images/category/vegetable.png';
import Sale from '../../assets/images/category/sale.png';
import Special from '../../assets/images/category/special.png';
import Shellfish from '../../assets/images/category/shellfish.png';
import Auth from '../../utils/auth';

function MainProducts() {

  const [category] = useState([
    {
			name: 'Sale',
      img: Sale
		},
    {
      name: 'Fish',
      img: Fish
    },
    {
      name: 'Scallops',
      img: Scallop
    },
    {
      name: 'Shellfish',
      img: Shellfish
    },
    {
      name: 'Squid',
      img: Squid
    },
    {
      name: 'Meat',
      img: Meat
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
      name: 'Fruits',
      img: Fruit
    },
    {
      name: 'Vegetables',
      img: Vegetable
    },   
		{
			name: 'Newest',
      img: New
		},
		{
			name: 'Featured',
      img: Featured
		},
  ])

  const [currentCategory, setCategory] = useState(category[0])


  function storeCategory(product) {
    Auth.setCategory(product);
  }

  console.log(currentCategory);

  return (
    <>
      <div className="main-promo-container">
        <div className="main-promo-slider">
          {category.map((product) => (
            <div className="slider-container" >
              <div className="slider-icon-container" onClick={() => {storeCategory(product); setCategory(product); }}>
                <img alt={product.name} src={product.img} className="slider-icon" />
              </div>
              <span>{product.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainProducts;