import React, { useState, useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Home from './pages/Home';
import Axios from 'axios';
import './App.css';

function App() {



  useEffect(() => {

    const checkURL = window.location.href.search('localhost');
    const heroku = 'https://nuxe-website.herokuapp.com/api/products'

    if (checkURL >= 1) {
      Axios.get(`http://localhost:3001/api/products`).then((data) => {})
    } else {
      Axios.get(heroku).then((data) => {})
    }


  },[])
  

  return (
        <BrowserRouter>
              <Switch>
                <Route 
                  exact path='/' 
                  render={() => <Home 
                  />}
                  />
                <Route exact path='/products' render={() => <Products
                   />} />
                                
                <Route component={NoMatch} />
              </Switch>
        </BrowserRouter>
    );
}
export default App;
