import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import { StoreProvider } from "./utils/GlobalState";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import Auth from './utils/auth';
import SingleProduct from './components/SingleProduct';
import Promotions from './pages/Promotions';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import SingleOrder from './pages/AdminSingleOrder';

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
			for: 'guest'
		},
		{
			name: 'Products',
			href: '/products',
			for: 'guest'
		},
		{
			name: 'Account',
			href: '/account',
			for: 'user'
		},
		{
			name: 'Promotions',
			href: '/promotions',
			for: 'guest'
		},
		{
			name: 'Cart',
			href: '/cart',
			for: 'user'
		},
		{
			name: 'Dashboard',
			href: '/admindashboard',
			for: 'admin'
		},
		{
			name: 'Sign In',
			href: '/signin',
			for: 'guest'
		},
		{
			name: 'Sign Up',
			href: '/signup',
			for: 'guest'
		},
		{
			name: 'Log Out',
			href: '/logout',
			for: 'user'
		}
	]);

	const [currentHeaderLink, setCurrentHeaderLink] = useState(headerLinks[0]);

	const promo = Auth.getPromotions();

    return (
        <ApolloProvider client={client} onload={Auth.getMode()}>
          <Router>
            <StoreProvider>
              <>
			  <nav className="header-container">
				  <div>{promo[0].mainPromo}</div>
				<Header 
						headerLinks={headerLinks}
						currentHeaderLink={currentHeaderLink}
						setCurrentHeaderLink={setCurrentHeaderLink}
					/>
			  </nav>

                  <div className="page">
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/products" component={Products} />
					  <Route exact path="/promotions" component={Promotions} />
					  <Route exact path="/account" component={Account} />
					  <Route exact path="/signup" component={SignUp} />
					  <Route exact path="/signin" component={SignIn} />
					  <Route exact path="/admindashboard" component={Dashboard} />
					  <Route exact path="/cart" component={Cart} />
					  <Route exact path="/product/:id" component={SingleProduct} />
					  <Route exact path="/order/:id" component={SingleOrder} />
                      <Route component={NoMatch} />
                    </Switch>
                  </div>
                <Footer />
              </>
            </StoreProvider> 
          </Router>
        </ApolloProvider>
    );
}
export default App;