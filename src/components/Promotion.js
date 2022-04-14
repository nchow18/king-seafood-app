import React, { useState } from 'react';
import Axios from 'axios';

function Promotion(props) {

  const {
    promo
  } = props

  const [update, setUpdate] = useState(null);
  const [image, setImage] = useState(null);
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

  const apiClient = Axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const apiLive = Axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const currentURL = window.location.href.search('localhost');

  function updatePromo() {

    if (currentURL >= 1) {
      apiClient.put('/details/1', formData).then((response) => {setUpdate(response.data)})
    } else {
      apiLive.put('/details/1', formData).then((response) => {setUpdate(response.data)})
    }


    alert('Promotions updated')
  }

  const handleClick = () => {

  if (currentURL >= 1) {
    apiClient.post('image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })

    alert('Image uploaded successfully')
  } else {
    apiLive.post('image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })

    alert('Image uploaded successfully')
    }
  }



  const handleFileInput = (e) => {
    console.log(e.target.files[0]);

    const formData = new FormData(); 
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }

  return (
    <div className="promo-page">
      <div className="dashboard-title">
        <li>IMAGE UPLOADER</li>
        <input id='image' type='file' onChange={handleFileInput}/>
        <button onClick={() => handleClick()}>UPLOAD IMAGE</button>               
      </div>     
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