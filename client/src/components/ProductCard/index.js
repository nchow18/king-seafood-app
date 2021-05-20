import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Steak from '../../../src/assets/images/steak.jpeg';
import '../../css/Products.css';

function ProductCard() {

    const products = [
        {
          _id: '123',
          name: 'Steak',
          price: '40',
          description: 'Great steak',
          weight: '10oz',
          picture: Steak,
          nameChinese: '',
          descriptionChinese: ''
        }
      ]
    

    const viewProduct = event => {
        event.preventDefault();
        Auth.setSingleProduct(products[0]._id);
    
        Auth.viewSingleProduct();
      }

    return (
        <>
        {products.map((product) => (
            <div className="product-card">
                <div className="product-card-picture-container">
                    <img alt={product._id} src={product.picture} className="product-card-picture"/>
                </div>
                <div>
                    <p>{product.name}</p>
                </div>
            </div>
        ))}
            <Link to="/" onClick={viewProduct}>{products[0].name}</Link>
        </>
    )
}

export default ProductCard;