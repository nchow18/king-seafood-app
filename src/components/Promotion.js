import React, { useState } from 'react';
import Axios from 'axios';

function Promotion(props) {

  const {
    promo
  } = props

  console.log(promo);

  const [update, setUpdate] = useState(null);
  const [formData, setFormData] = useState({
    promo_banner: promo[0].promo_banner,
    promo_discount: promo[0].promo_discount,
    promo_picture: promo[0].promo_picture
  })

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function updatePromo() {

    const currentURL = window.location.href;
    const updateURL = currentURL.replace('0/dashboard', `1/api/details/1`)

    Axios.put(updateURL, formData).then((response) => {setUpdate(response.data)})
  }

  console.log(formData);

  return (
    <div className="promo-page">
      <div className='promo-container'>
        <li>Promotion Banner Notification</li>
        <input placeholder='Promo Banner' id='promo_banner' onChange={inputChange} value={formData.promo_banner} name='promo_banner' />
        <li>Promotion Discount</li>
        <input placeholder='Promo Discount' id='promo_discount' onChange={inputChange} value={formData.promo_discount} name='promo_discount' />
        <li>Promotion Picture (full picture/file name)</li>
        <input placeholder='Promo Picture' id='promo_picture' onChange={inputChange} value={formData.promo_picture} name='promo_picture' />
        <button onClick={() => {updatePromo()}}>UPDATE PROMO</button>
      </div>
    </div>
  );
}

export default Promotion;