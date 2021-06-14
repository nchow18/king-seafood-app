import React, { useState } from 'react';
import Fish from '../../assets/images/products/fish.jpeg';
import Scallop from '../../assets/images/products/scallop.jpeg';
import Shellfish from '../../assets/images/products/shellfish.jpeg';
import Squid from '../../assets/images/products/squid.jpeg';
import Meat from '../../assets/images/products/meat.jpeg';
import Hotpot from '../../assets/images/products/hotpot.jpeg';
import Fruit from '../../assets/images/products/fruits.jpeg';
import Vegetable from '../../assets/images/products/vegetables.jpeg';
import '../../css/Home.css';
import { Link } from 'react-router-dom';

function SectionCategory(props) {

  const {
    currentProductLink,
    setCurrentProductLink,
    productLinks=[]
  } = props

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

  function setCategory(name) {
    for (var i = 0; i < productLinks.length; i++) {
      if (name === productLinks[i].name) {
        setCurrentProductLink(productLinks[i])
      }
    }
  }
  
  return (
    <>
      <div className="category-container">
        {category.map((product) => (
          <Link to="/products" className="category-img-container" onClick={() => {setCategory(product.name)}}>
            <img alt={product.name} src={product.img} className="category-img" />
            <div className="category-img-label">
              <span>{product.name.toUpperCase()}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default SectionCategory;