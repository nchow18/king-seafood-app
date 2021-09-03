import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { PROMO, PRODUCTS, USER_ME } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';


import '../css/Home.css';
import HomeContent from './../components/Home/HomeContent';
import Fish from './../assets/images/category/fish.png';
import Fruit from './../assets/images/category/fruits.png';
import Meat from './../assets/images/category/meat.png';
import New from './../assets/images/category/new.png';
import Scallop from './../assets/images/category/scallop.png';
import Squid from './../assets/images/category/squid.png';
import Hotpot from './../assets/images/category/hotpot.png';
import Featured from './../assets/images/category/top-rated.png';
import Vegetable from './../assets/images/category/vegetable.png';
import Sale from './../assets/images/category/sale.png';
import Special from './../assets/images/category/special.png';
import Shellfish from './../assets/images/category/shellfish.png';

import NoMatch from './../pages/NoMatch';
import Products from './../pages/Products';
import Promotions from './../pages/Promotions';
import Account from './../pages/Account';
import Dashboard from './../pages/Dashboard';
import SignIn from './../components/SignIn';
import SignUp from './../components/Signup';
import SingleOrder from './../pages/AdminSingleOrder';
import MainPromo from './../components/Header/MainPromo';
import About from './../pages/About';
import WindowCart from './../components/Cart/WindowCart';
import CheckoutDisplay from './../components/Cart/CheckoutDisplay';
import FinalOrder from './../components/Cart/FinalOrder';
import Ordered from './../components/Cart/Ordered';
import PastOrders from './../components/Cart/PastOrders';


function Home(props) {

  const {
    currentProductLink,
    setCurrentProductLink,
    currentHeaderLink,
    setCurrentHeaderLink,
    productLinks=[],
    cartCount,
    setCartCount,
    headerLinks
  } = props

  const [category] = useState([
    {
			name: 'Sale',
      img: Sale
		},
    {
      name: 'Fish',
      img: Fish
    },
    {
      name: 'Scallops',
      img: Scallop
    },
    {
      name: 'Shellfish',
      img: Shellfish
    },
    {
      name: 'Squid',
      img: Squid
    },
    {
      name: 'Meat',
      img: Meat
    },
    {
      name: 'Special',
      img: Special
    },
    {
      name: 'Hotpot',
      img: Hotpot
    },
    {
      name: 'Fruits',
      img: Fruit
    },
    {
      name: 'Vegetables',
      img: Vegetable
    },   
		{
			name: 'Newest',
      img: New
		},
		{
			name: 'Featured',
      img: Featured
		},
  ])

  const [pastOrders, setPastOrders] = useState(false);
  const [isPromo, setPromo] = useState(false);
  const { loading, data } = useQuery(PROMO);
  const { data: dataUserMe } = useQuery(USER_ME);
  const promo = data?.promo || {};
  const { data: Data } = useQuery(PRODUCTS);
  const products = Data?.products || {};
  const featuredProducts = [];
  const user_me = dataUserMe?.userMe || {};
  const user_cart = user_me.cart;

  console.log(user_me);
  console.log(user_cart);
  console.log(promo);

  useEffect(() => {
    // setTimeout(displayPromo, 4000);
    const empty = {name: ""};
    localStorage.setItem('current_category', JSON.stringify(empty))
  }, [])

  function displayPromo() {
    setPromo(true);
  }

  if (loading) return `...Loading`;

  if (data) {
    for (var i = 0; i < products.length; i++) {
      if (promo[0].featuredProduct1 === products[i]._id) {
      featuredProducts.push(products[i])
      }
      if (promo[0].featuredProduct2 === products[i]._id) {
      featuredProducts.push(products[i])
      }
      if (promo[0].featuredProduct3 === products[i]._id) {
      featuredProducts.push(products[i])
      }
    }
  }

  if (localStorage.getItem('new_cart') === null) {
    localStorage.setItem('new_cart', JSON.stringify([]));
  }

  if (localStorage.getItem('guest_cart') === null) {
    localStorage.setItem('guest_cart', JSON.stringify([]))
  }

  if (localStorage.getItem('previous_orders') === null) {
    localStorage.setItem('previous_orders', JSON.stringify('empty'))
  }

  return (
    <div>
      {currentHeaderLink.link === 'home' && (
        <HomeContent
          category={category}
          currentProductLink={currentProductLink}
          setCurrentProductLink={setCurrentProductLink}
          products={products}
          productLinks={productLinks}
          promo={promo}
          promotions={promo}
          setPromo={setPromo}
          currentHeaderLink={currentHeaderLink}
          isPromo={isPromo} />
      )}
      {currentHeaderLink.link === 'cart' && (
        <WindowCart
          setCartCount={setCartCount}
          products={products}
          user_me={user_me}
          setPastOrders={setPastOrders}
          promotions={promo} />
      )}
      {currentHeaderLink.link === 'promotions' && (
        <Promotions
          promotions={promo} />
      )}
      {currentHeaderLink.link === 'products' && (
        <Products
          currentProductLink={currentProductLink} 
          setCurrentProductLink={setCurrentProductLink} 
          productLinks={productLinks}
          cartCount={cartCount}
          setCartCount={setCartCount}
          products={products}
          user_me={user_me}
          setCurrentHeaderLink={setCurrentHeaderLink}
          headerLinks={headerLinks}
        />
      )}
      {currentHeaderLink.link === 'signin' && (
        <SignIn />
      )}   
      {currentHeaderLink.link === 'signup' && (
        <SignUp />
      )}
      {currentHeaderLink.link === 'dashboard' && (
        <Dashboard />
      )}     
      {currentHeaderLink.link === 'account' && (
        <Account
          user_me={user_me} />
      )}                              
    </div>
  )
}

export default Home;