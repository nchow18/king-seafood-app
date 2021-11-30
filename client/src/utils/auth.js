import decode from 'jwt-decode';

class AuthService {
  getProfileType() {
    if (this.loggedIn()) {
        const { data } = decode(this.getToken());
        return data.admin === true ? 'admin' : 'user'
    } 
  }

  getAdmin() {
    if (this.loggedIn()) {
      const { data } = decode(this.getToken());
      return data.admin ? true : false
    }
  }

  getPromotions() {

  }

  getCategories() {
    const categories = [
		{
			name: 'All',
		},
		{
			name: 'Fish',
		},
    {
      name: 'Scallops',
    },
		{
			name: 'Shellfish',
		},
		{
			name: 'Squid',
		},
    {
      name: 'Meat'
    },
    {
      name: 'Special'
    },
    {
      name: 'Vegetables',
    },
    {
      name: 'Fruits'
    },
    {
      name: 'Hotpot'
    },
    {
      name: 'Snacks'
    },
    {
      name: 'Sauces'
    }, 
    {
      name: 'Beverages'
    },
    {
      name: 'Noodles/Soup'
    },
    {
      name: 'Sale'
    },
    {
      name: 'Newest Products'
    },   
    ]

    return categories;
  }

  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else 
      return false;
    } catch (err) {
      return false;
    }
  }               

  lightMode(mode) {
    localStorage.setItem('mode', mode)
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  setGlobalDiscount(sale) {
    return localStorage.setItem('global_sale', sale)
  }

  getGlobalDiscount() {
    const sale = localStorage.getItem('global_sale');
    return sale;
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    if (this.loggedIn() === false) {
      window.location.assign('/');
    } else if (this.getProfileType() === 'user') {
      window.location.assign('/');
    } else if (this.getProfileType() === 'admin') {
        window.location.assign('/');
    }
  }

  checkToken() {
    const token = this.getToken();
    if (localStorage.getItem('id_token')) {
      if (this.isTokenExpired(token)) {
        localStorage.removeItem('id_token')
      } else {
        return
      }
      
    }
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');

    window.alert('Logged Out')
  }
}

export default new AuthService();
