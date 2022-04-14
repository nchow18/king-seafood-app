import React, { useState } from 'react';

function Favorites(props) {

  const {
    fav,
    setFav,
    cart,
    setCart
  } = props

  const [isModal, setModal] = useState(false);
  const [pic, setPic] = useState();

  function removeFav(index) {

    const newArr = [];

    for (var i = 0; i < fav.length; i++) {
      if (i !== index) {
        newArr.push(fav[i])
      }
    }

    setCart(newArr);    
    
    if (fav.length === 1) {
      setFav([]);
    } else {
      setFav(newArr)
    }
  }

  function addCart(item) {

    var newCart = []
    item.quantity = 1

    if (cart.length > 0) {
      newCart = [...cart, item]
    } else {
      newCart = [item]
    }

    setCart(newCart)
  }

  return (
    <div className="favorites-page">
      {fav.map((item, index) => (
        <div key={item.product_id} className="favorites-list">
          <img onClick={() => {setPic(item); setModal(true)}} alt={item.name} src={process.env.PUBLIC_URL + `/products/${item.picture[0]}`} />
          <div className="favorites-details">
            <div>
              <li>{item.name}</li>
              <li>Price: RM {item.price}</li>
              {item.d1 !== '' && (<li>» {item.d1}</li>)}
              {item.d2 !== '' && (<li>» {item.d2}</li>)}
              {item.d3 !== '' && (<li>» {item.d3}</li>)}
              {item.d4 !== '' && (<li>» {item.d4}</li>)}
            </div>
            <div className="favorites-button-container">
              <div onClick={() => addCart(item)} className="favorites-button">
                ADD TO CART
              </div>
              <div onClick={() => removeFav(index)} className="favorites-button">
                REMOVE FAVORITE
              </div>              
            </div>
          </div>
        </div>
      ))}
      {isModal === true && (
        <div onClick={() => setModal(false)} className="picture-modal">
          <img alt={pic.name} src={process.env.PUBLIC_URL + `/products/${pic.picture[0]}`} />
        </div>
      )}
    </div>
  )
}

export default Favorites;