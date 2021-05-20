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
import ProductHeader from './components/ProductHeader';
import Auth from './utils/auth';
import SingleProduct from './components/SingleProduct';
import Promotions from './pages/Promotions';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

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
			href: '/',
			for: 'guest'
		},
		{
			name: 'Profile',
			href: '/profile',
			for: 'user'
		},
		{
			name: 'Promotions',
			href: '/promotions',
			for: 'guest'
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

	const [productLinks] = useState([
		{
			name: 'Meat',
			href: '/products'
		},
		{
			name: 'Seafood',
			href: '/products'
		},
		{
			name: 'Vegetables',
			href: '/products'
		},
		{
			name: 'Fruits',
			href: '/products'
		},

	])

	const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])
	const [currentHeaderLink, setCurrentHeaderLink] = useState(headerLinks[0]);

	const currentProduct = { product: currentProductLink.name }

	Auth.setProduct(currentProduct.product)

	const productId = Auth.getSingleProduct();
    const productType = Auth.getProduct();

	console.log(productId);
	console.log(productType);

    return (
        <ApolloProvider client={client}>
          <Router>
            <StoreProvider>
              <>
			  <nav className="header-container">
				  <div>FREE DELIVER + FREE GIFT (MINIMUM ORDER RM 150)</div>
				<Header 
						headerLinks={headerLinks}
						currentHeaderLink={currentHeaderLink}
						setCurrentHeaderLink={setCurrentHeaderLink}
					/>
					{currentHeaderLink.name === 'Products' && (
					<ProductHeader 
						productLinks={productLinks}
						currentProductLink={currentProductLink}
						setCurrentProductLink={setCurrentProductLink}
					/>
					)}
			  </nav>

                  <div className="page">
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/products" component={Products} />
					  <Route exact path="/promotions" component={Promotions} />
					  <Route exact path="/profile" component={Profile} />
					  <Route exact path="/dashboard" component={Dashboard} />
					  <Route exact path="/cart" component={Cart} />
					  <Route exact path="/:id" component={SingleProduct} />
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