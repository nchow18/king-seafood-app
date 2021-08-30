import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Auth from './utils/auth';
import MainPromo from './components/Header/MainPromo';
import './css/Whatsapp.css';
import './css/Footer.css';
import { UserProvider } from './utils/GlobalState';

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
      link: 'home',
			href: '/',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Products',
      link: 'products',
			href: '/products',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Account',
      link: 'account',
			href: '/account',
			guest: false,
			user: true,
			admin: true
		},
    {
			name: 'Cart',
      link: 'cart',
			href: '/cart',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Promotions',
      link: 'promotions',
			href: '/promotions',
			guest: true,
			user: true,
			admin: true
		},
		{
			name: 'Dashboard',
      link: 'dashboard',
			href: '/admindashboard',
			guest: false,
			user: false,
			admin: true
		},
		{
			name: 'Sign In',
      link: 'signin',
			href: '/signin',
			guest: true,
			user: false,
			admin: false
		},
		{
			name: 'Sign Up',
      link: 'signup',
			href: '/signup',
			guest: true,
			user: false,
			admin: false
		},
    {
      name: 'none'
    }
	]);


	const [currentHeaderLink, setCurrentHeaderLink] = useState(headerLinks[0]);
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
              productLinks={productLinks}
              currentHeaderLink={currentHeaderLink}
              cartCount={cartCount}
              setCartCount={setCartCount} />}
              />
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