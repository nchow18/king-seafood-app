import React, { useState, useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Home from './pages/Home';
import Cart from './pages/Cart';
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

  useEffect(() => {

    const checkURL = window.location.href.search('localhost');
    const heroku = 'https://nuxe-website.herokuapp.com/api/products'

    if (checkURL >= 1) {
      Axios.get(`http://localhost:3001/api/products`).then((data) => setProducts(sortProducts(data.data)))
    } else {
      const prodArr = Axios.get(heroku).then((data) => data.data)
    }

    const localCart = localStorage.getItem('user_cart');
    const localFav = localStorage.getItem('user_fav');

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
      arr[i].category = JSON.stringify(arr[i].category).trim().replaceAll('"', '').split(',');
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

  console.log(cart);
  console.log(fav);

  return (
        <BrowserRouter>
          <TopPromo />
          <Header
            cart={cart}
            fav={fav} />
            <div className="page-content">
              <Switch>
                <Route
                  exact path='/'
                  render={() => <Home
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
                    />} />
                <Route
                  exact path='/favorites'
                  render={() => <Favorites
                    fav={fav}
                    setFav={setFav}
                    cart={cart}
                    setCart={setCart}
                    />} />
              
                <Route component={NoMatch} />
              </Switch>
            </div>
          <Footer />
        </BrowserRouter>
    );
}
export default App;
