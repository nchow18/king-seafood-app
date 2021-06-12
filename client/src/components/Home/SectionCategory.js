import React, { useState } from 'react';
import Fish from '../../assets/images/products/fish.jpeg';
import Scallop from '../../assets/images/products/scallop.jpeg';
import Shellfish from '../../assets/images/products/shellfish.jpeg';
import Squid from '../../assets/images/products/squid.jpeg';
import Meat from '../../assets/images/products/meat.jpeg';
import Hotpot from '../../assets/images/products/hotpot.jpeg';
import Fruit from '../../assets/images/products/fruit.jpeg';
import Vegetable from '../../assets/images/products/vegetable.jpeg';
import '../../css/Home.css';
import Auth from '../../utils/auth';

function SectionCategory(props) {

  const [category] = useState([
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
  ])

  function storeCategory(product) {
    Auth.setCategory(product);
  }
  
  return (
    <>
      <div className="category-container">
        {category.map((product) => (
          <div className="category-img-container" onClick={() => {storeCategory(product)}}>
            <img alt={product.name} src={product.img} className="category-img" />
            <div className="category-img-label">
              <span>{product.name.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionCategory;