import React, { useState, useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Footer from './components/Footer';
import TopPromo from './components/TopPromo';
import Axios from 'axios';
import './App.css';
import './css/main.css';

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [fav, setFav] = useState([])
  const [promo, setPromo] = useState([])
  const [sale, setSale] = useState()
  const [promoBanner, setPromoBanner] = useState();

  const localCart = localStorage.getItem('user_cart');
  const localFav = localStorage.getItem('user_fav');

  const checkURL = window.location.href.search('localhost');

  const apiClient = Axios.create({
    baseURL: 'https://kingsseafood18.com/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const apiLive = Axios.create({
    baseURL: 'https://kingsseafood18.com/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  useEffect(() => {

    if (checkURL >= 1) {

      apiClient.get(`/products`)
        .then((data) => {setProducts(sortProducts(data.data)); console.log(data.data)})
        .catch(error => { console.log(error.response)})
      apiClient.get(`/details`)
        .then((data) => {setPromo(data.data); setSale(data.data[0].promo_discount); setPromoBanner(data.data[0].promo_banner); console.log(data.data)})
        .catch(error => { console.log(error.response)})
    } else {
      apiLive.get(`/products`)
        .then((data) => {setProducts(sortProducts(data.data)); console.log(data.data)})
        .catch(error => { console.log(error.response)})
      apiLive.get(`/details`)
        .then((data) => {setPromo(data.data); setSale(data.data[0].promo_discount); setPromoBanner(data.data[0].promo_banner); console.log(data.data)})
        .catch(error => { console.log(error.response)})
    }

    if (localCart === null) {
      console.log('cart does not exist, creating new local cart')

      localStorage.setItem('user_cart', JSON.stringify(cart))
    } else {

      setCart(JSON.parse(localCart))
    }

    if (localFav === null) {
      console.log('favorites list does not exist, creating new local favorites')

      localStorage.setItem('user_fav', JSON.stringify(fav))
    } else {

      setFav(JSON.parse(localFav))
    }

  },[])

  function sortProducts(data) {

    const arr = data;

    for (var i = 0; i < data.length; i++) {
      arr[i].picture = JSON.stringify(arr[i].picture).trim().replaceAll('"', '').split(',');
      arr[i].category = JSON.stringify(arr[i].category).trim().replaceAll('"', '').replaceAll('/','').split(',');
    }

    return arr;
  }

  const categories = [
    'All',
    'Fish',
    'Scallops',
    'Shellfish',
    'Squid',
    'Meat',
    'Special',
    'Vegetables',
    'Fruits',
    'Hotpot',
    'Snacks',
    'Sauces',
    'Beverages',
    'Noodles/Soup',
    'Sale',
    'Newest Products'
  ]

  if (cart.length !== 0) {
    localStorage.setItem('user_cart', JSON.stringify(cart))
  }

  if (fav.length !== 0) {
    localStorage.setItem('user_fav', JSON.stringify(fav))
  }

  // console.log(cart);
  // console.log(fav);
  // console.log(promo);

  return (
    <BrowserRouter>
      <TopPromo
        promoBanner={promoBanner} />
      <Header
        cart={cart}
        fav={fav}
        promo={promo} />
        <div className="page-content">
          <Switch>
            <Route
              exact path='/'
              render={() => <Home
                promo={promo}
              />}
              />
            <Route
              exact path='/products'
              render={() => <Products
                categories={categories}
                products={products}
                fav={fav}
                setFav={setFav}
                cart={cart}
                setCart={setCart}
                />} />
            <Route
              exact path='/cart'
              render={() => <Cart
                cart={cart}
                setCart={setCart}
                sale={sale}
                />} />
            <Route
              exact path='/favorites'
              render={() => <Favorites
                fav={fav}
                setFav={setFav}
                cart={cart}
                setCart={setCart}
                />} />
            <Route
              exact path='/dashboard'
              render={() => <Dashboard
                products={products}
                setProducts={setProducts}
                promo={promo}
                />} />                    
          
            <Route component={NoMatch} />
          </Switch>
        </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
