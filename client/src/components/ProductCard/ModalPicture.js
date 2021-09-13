import React from 'react';
import '../../css/Products.css';

function ModalPicture(props) {

  const {
    setModal,
    index,
    products
  } = props

  return (
    <div onClick={() => {setModal(false)}} className="product-card-modal">
      {products[index].product_picture.map((image) => (
        <img onClick={() => {}} alt={index} src={`http://media.kingsseafood18.com/media/products/${image}.jpg`} className="modal-card-picture"/>
      ))}

    </div>
  )
}

export default ModalPicture;