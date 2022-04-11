import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import AddProduct from '../components/AddProduct';
import Promotion from '../components/Promotion';
import Axios from 'axios';

function Dashboard(props) {

  const {
    products,
    setProducts,
    promo
  } = props

  const [isLogged, setLogged] = useState(false);
  const [dash, setDash] = useState(['Products', 'Promotion'])
  const [dashLink, setDashLink] = useState('Products')
  const code = process.env.REACT_APP_ADMIN;
  const LS = localStorage.getItem('ks-admin-dashboard')
  const [image, setImage] = useState(null);

  const apiClient = Axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const apiLive = Axios.create({
    baseURL: 'https://kingsseafood18.com/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const currentURL = window.location.href.search('localhost');

  useEffect(() => {

    if (LS === null) {
      return;
    } else if (LS === 'admin-logged-in') {
      setLogged(true);
    }

  },[])

  function checkPW() {

    const value = document.getElementById('adminPW').value;

    if (code === value) {

      setLogged(true);

      localStorage.setItem('ks-admin-dashboard', 'admin-logged-in')

    } else {
      alert('Incorrect Password')
    }
  }

  const handleClick = () => {

    if (currentURL >= 1) {
      apiClient.post('/image-upload', image)
      .then(res => {
        console.log('Axios response: ', res)
      })
    } else {
      apiLive.post('/image-upload', image)
      .then(res => {
        console.log('Axios response: ', res)
      })
    }

    alert('Image uploaded successfully');    
  }

  const handleFileInput = (e) => {
    console.log('handleFileInput working!')
    console.log(e.target.files[0]);

    const formData = new FormData(); 
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }

  function sortArray(x, y) {
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  }

  const prodTitle = [
    'PROD ID',
    'CATEGORY',
    'NAME',
    'DESC 1',
    'DESC 2',
    'DESC 3',
    'DESC 4',
    'PRICE',
    'BULK QUANTITY',
    'BULK PRICE',
    'SALE PRICE',
    'FEATURED (true or false)',
    'STATUS (true or false)',
    'PICTURE (name.jpg)'
  ]

  return (
    <div className="dashboard-page">
      {isLogged ? (
        <div className="dashboard-logged-page">
          <div className="dashboard-header">
            {dash.map((link) => (
              <div key={link} onClick={() => {setDashLink(link)}} className="dash-link">{link}</div>
            ))}      
          </div>
          {dashLink === 'Promotion' && (
            <Promotion
              promo={promo} />
          )}
          {dashLink === 'Products' && (
            <>
              <div className="dashboard-title">ADD NEW PRODUCT</div>
              <AddProduct
                products={products}
                setProducts={setProducts}
                prodTitle={prodTitle} /> 

              <div className="dashboard-title">
                <li>IMAGE UPLOADER</li>
                <input id='image' type='file' onChange={handleFileInput}/>
                <button onClick={() => handleClick()}>UPLOAD IMAGE</button>               
              </div> 
                 
              <div className="dashboard-title">UPDATE, DELETE PRODUCTS</div>     
              {products.sort(sortArray).map((prod, index) => (
                <div key={prod.product_id}>
                  <ProductItem
                    prod={prod}
                    prodTitle={prodTitle}
                    index={index}
                    products={products}
                    setProducts={setProducts}
                    />
                </div>
              ))}            
            </>
          )}        

        </div>
      ) : (
        <div className="dashboard-notlogged-page">
          <div className="dashboard-loggin-container">
            <div>Dashboard Log in</div>
            <input id='adminPW' placeholder='Enter password'></input>
            <button onClick={() => checkPW()}>SUBMIT</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard;