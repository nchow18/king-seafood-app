import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { PROMO, PRODUCTS, USER_ME } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import HomePage from '../components/Home/HomePage.js';
import SignIn from '../components/SignIn/index.js';
import Cart from './Cart.js'
import SignUp from '../components/Signup/index.js';
import NoMatch from './../pages/NoMatch';
import Products from './Products.js'
import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header/Header.js';

function Home(props) {

  const {
    currentHeaderLink,
    headerLinks,
    setCurrentHeaderLink,
    user_type
  } = props

  const {loading: loading1, data: data1} = useQuery(PRODUCTS);
  const {loading: loading2, data: data2} = useQuery(USER_ME);
  const {loading: loading3, data: data3} = useQuery(PROMO);

  const products = data1?.products || {};
  const userData = data2?.userMe || {};
  const promoData = data3?.promo[0] || {};

  const userCart = userData?.cart || {};

  const [cart, setCart] = useState(userCart);
  const [cartQty, setCartQty] = useState();

  useEffect(() => {
    setTimeout(displayPromo, 4000);

    setCurrentHeaderLink('Home')

    // convert all product_picture to STRING
    for (var p = 0; p < products.length; p++) {
      products[p].product_picture = products[p].product_picture.toString().replaceAll(' ','')
    }

    // convert all product_pictures to ARRAY
    for (var a = 0; a < products.length; a++) {
      products[a].product_picture = products[a].product_picture.split(',')
    }

  },[])

  function displayPromo() {

  }

  if (loading1) return `...Loading products`;
  if (loading2) return `...Loading user data`;
  if (loading3) return `...Loading promo data`;

  return (
    <>
      <Header 
        headerLinks={headerLinks}
        setCurrentHeaderLink={setCurrentHeaderLink}
        user_type={user_type}
        promoData={promoData}
        userData={userData}
        cartQty={cartQty}
        setCartQty={setCartQty}
        userCart={userCart}
        cart={cart} />    
      <div className="padding-1rem">
      
        {currentHeaderLink === 'Home' && (
          <HomePage
            setCurrentHeaderLink={setCurrentHeaderLink}
            products={products}
            userData={userData}
            setCartQty={setCartQty}
            cartQty={cartQty}
            cart={cart} />
        )}
        {currentHeaderLink === 'Cart' && (
          <Cart
            cart={cart}
            userData={userData}
            userCart={userCart}
            setCart={setCart}
            setCartQty={setCartQty} />
        )}
        {/* {currentHeaderLink === 'Promotions' && (

        )} */}
        {currentHeaderLink=== 'Products' && (
          <Products
            user_type={user_type}
            setCart={setCart}
            cart={cart}
            userCart={userCart}
            products={products}
            setCurrentHeaderLink={setCurrentHeaderLink}
            promoData={promoData}
            setCartQty={setCartQty}
            cartQty={cartQty}
             />
        )}
        {currentHeaderLink === 'Sign In' && (
          <SignIn
            cart={cart}
            setCartQty={setCartQty} />
        )}   
        {/* {currentHeaderLink === 'Dashboard' && (
          <Dashboard />
        )}      */}
        {/* {currentHeaderLink === 'Account' && (
          <Account
            user_me={user_me} />
        )}                               */}
      </div>
      <Footer
        promoData={promoData} />
    </>
  )
}

export default Home;