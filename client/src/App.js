import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Header from './components/Header';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Auth from './utils/auth';
import Promotions from './pages/Promotions';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import SingleOrder from './pages/AdminSingleOrder';
import MainPromo from './components/Header/MainPromo';
import WhatsApp from './components/WhatsApp/WhatsApp';
import './css/Whatsapp.css';
import './css/Footer.css';
import { UserProvider } from './utils/GlobalState';
import WindowCart from './components/Cart/WindowCart';
import CheckoutDisplay from './components/Cart/CheckoutDisplay';
import FinalOrder from './components/Cart/FinalOrder';
import Ordered from './components/Cart/Ordered';
import PastOrders from './components/Cart/PastOrders';

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
    uri: '/graphql'
});

function App() {

  const [headerLinks] = useState([
		{
			name: 'Home',
			href: '/',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Products',
			href: '/products',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Account',
			href: '/account',
			guest: false,
			user: true,
			admin: false
		},
		{
			name: 'Promotions',
			href: '/promotions',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Dashboard',
			href: '/admindashboard',
			guest: false,
			user: false,
			admin: true
		},
		{
			name: 'Sign In',
			href: '/signin',
			guest: true,
			user: false,
			admin: false
		},
		{
			name: 'Sign Up',
			href: '/signup',
			guest: true,
			user: false,
			admin: false
		},
    {
      name: 'none'
    }
	]);

	const [currentHeaderLink, setCurrentHeaderLink] = useState(headerLinks[7]);
  const [cartModal, setCartModal] = useState(false)
  const [productLinks] = useState(Auth.getCategories())
  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])
  const [cartCount, setCartCount] = useState(0);

  Auth.checkToken();

    return (
        <ApolloProvider client={client}>
          <Router>
            <UserProvider>
              <>
              <div className="page">
                <div className="page-content">
              <MainPromo />
			    <nav className="header-container">
          <Header 
            headerLinks={headerLinks}
            currentHeaderLink={currentHeaderLink}
            setCurrentHeaderLink={setCurrentHeaderLink}
            cartModal={cartModal}
            setCartModal={setCartModal}
            cartCount={cartCount}
            setCartCount={setCartCount}
					/>
			    </nav>
      
          <Switch>
            <Route 
              exact path='/' 
              render={() => <Home 
              currentProductLink={currentProductLink} 
              setCurrentProductLink={setCurrentProductLink} 
              productLinks={productLinks} />}
              />
            <Route 
              exact path="/about" 
              component={About} />
            <Route 
              exact path="/products" 
              render={() => <Products 
              currentProductLink={currentProductLink} 
              setCurrentProductLink={setCurrentProductLink} 
              productLinks={productLinks}
              cartCount={cartCount}
              setCartCount={setCartCount} />}
              />
            <Route
              exact path="/cart"
              render={() => <WindowCart
                setCartCount={setCartCount} />} />
            <Route
              exact path="/cart/checkout"
              render={() => <CheckoutDisplay />} />              
            <Route
              exact path="/cart/finalorder"
              render={() => <FinalOrder />} />  
            <Route
              exact path="/cart/ordered"
              render={() => <Ordered/>} />     
            <Route
              exact path="/cart/pastorders"
              render={() => <PastOrders/>} />                           
					  <Route 
              exact path="/promotions" 
              component={Promotions} />
					  <Route 
              exact path="/order/:id" 
              component={SingleOrder} />
              {!Auth.loggedIn() && (
              <>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
              </>
					  )}

					  {Auth.getAdmin() === true && (
						<>
							<Route exact path="/admindashboard" component={Dashboard} />
						</>
					  )}
					  {Auth.getAdmin() === false && (
						<>
							<Route exact path="/account" component={Account} />
						</>
					  )}
            <Route component={NoMatch} />
          </Switch>
      <i onClick={() => {window.open("https://wa.me/60164223018")}} className="fab fa-whatsapp-square whatsapp-icon"></i>

      <Footer 
        headerLinks={headerLinks}
        currentHeaderLink={currentHeaderLink}
        setCurrentHeaderLink={setCurrentHeaderLink} />
        </div>
    </div>
    </>
  </UserProvider> 
</Router>
</ApolloProvider>
    );
}
export default App;