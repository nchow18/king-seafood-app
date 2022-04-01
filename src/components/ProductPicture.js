import React, { useState } from 'react';

function ProductPicture(props) {

  const {
    prod
  } = props

  const [picture, setPicture] = useState(0)
  const [isModal, setModal] = useState(false);

  console.log(picture);

  return (
    <div>
      <img className="product-card-img" onClick={() => setModal(true)} alt={prod.name} src={process.env.PUBLIC_URL + `/products/${prod.picture[picture].trim()}.jpeg`} />
      {prod.picture.length > 1 && (
        <div className="product-card-img-extra">
          {prod.picture.map((img, index) => (
            <img key={index} className="product-card-img-small" onClick={() => setPicture(index)} alt={index} src={process.env.PUBLIC_URL + `/products/${prod.picture[picture].trim()}.jpeg`} />
          ))}
        </div>
      )}

    
    {isModal === true && (
      <div onClick={() => setModal(false)} className="picture-modal">
        <img alt={prod.name} src={process.env.PUBLIC_URL + `/products/${prod.picture[picture].trim()}.jpeg`} />
      </div>
    )}
    </div>

  )
}

export default ProductPicture;