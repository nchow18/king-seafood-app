import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Auth from './utils/auth';

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
			guest: false,
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
			name: 'Log Out',
      link: 'logout',
			href: '/logout',
			guest: false,
			user: false,
			admin: false
		}
	]);

	const [currentHeaderLink, setCurrentHeaderLink] = useState(headerLinks[0]);

  const user_type = Auth.getProfileType();

    return (
      <ApolloProvider client={client}>
        <Router>
            <>
              <div className="page">
                <Switch>
                  <Route 
                    exact path='/' 
                    render={() => <Home 
                      currentHeaderLink={currentHeaderLink}
                      user_type={user_type}
                      headerLinks={headerLinks}
                      setCurrentHeaderLink={setCurrentHeaderLink}
                      user_type={user_type}
                    />}
                    />
                  <Route component={NoMatch} />
                </Switch>
                <i onClick={() => {window.open("https://wa.me/60164223018")}} className="fab fa-whatsapp-square whatsapp-icon"></i>
              </div>
            </>
        </Router>
      </ApolloProvider>
    );
}
export default App;