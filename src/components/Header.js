import React, { useState , useEffect } from 'react';
import '../css/main.css';
import { NavLink } from 'react-router-dom';

function Header(props) {

  const {
    fav,
    cart,
    promo
  } = props

  const [link, setLink] = useState('HOME')
  const [isModal, setModal] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    
  },[])

  console.log(promo);

  return (
    <div className="header-container">
      <div>KINGS SEAFOOD 18</div>
      <div className="header-icons">
        <li>
          <NavLink style={{ textDecoration: 'none'}} onClick={() => setLink('HOME')} className={`header-button ${link === 'HOME' && `active`}`} to={`/`}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/products`}>
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/cart`}>
            CART ( {cart.length} )
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/favorites`}>
            FAVORITES ( {fav.length} )
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button header-lock" to={`/dashboard`}>
            🔒
          </NavLink>
        </li>        
      </div>
      {isModal === true && (
        <div onClick={() => setModal(false)} className="promo-modal"> 
          <div className="promo-img-container">
            <img alt="banner" className="promo-img" src={process.env.PUBLIC_URL + `/products/${promo[0].promo_picture}`} />
          </div>
        </div>
      )}
      <div onClick={() => setModal(true)} className="promo-icon">
        🎁
      </div>
    </div>
  )
}

export default Header;