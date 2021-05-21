import decode from 'jwt-decode';

class AuthService {
  getProfileType() {
    if (this.loggedIn()) {
        const { data } = decode(this.getToken());
        return data?.admin === undefined ? "walker" : (data?.admin ? "admin" : "owner");
    } else {
        return "guest";
    }
  }

  getProductArr(arr) {
    const products = [
      {
        _id: '1239',
        name: 'Steak',
        category: 'Meat',
        price: '40',
        description: 'Great Wagyu steak from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
        weight: '10oz',
        picture: '',
        nameChinese: '牛扒',
        descriptionChinese: ''
      },
      {
          _id: '1234',
          category: 'Seafood',
          name: 'Lobster',
          price: '100',
          description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
          weight: '10oz',
          picture: '',
          nameChinese: '龙虾',
          descriptionChinese: ''
        },
        {
          _id: '12348',
          category: 'Vegetables',
          name: 'Cabbage',
          price: '100',
          description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
          weight: '10oz',
          picture: '',
          nameChinese: '龙虾',
          descriptionChinese: ''
        },
        {
          _id: '12342',
          category: 'Fruits',
          name: 'Apple',
          price: '100',
          description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
          weight: '10oz',
          picture: '',
          nameChinese: '龙虾',
          descriptionChinese: ''
        },
    ]

    return products;
  }

  getSingleProduct() {
    return localStorage.getItem('id_product');
  }

  viewSingleProduct() {
    const productId = localStorage.getItem('id_product');

    window.location.href = `/product/${productId}`;
  }

  getProfile() {
    return decode(this.getToken());
  }

  getProduct() {
    return localStorage.getItem('product');
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
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setProduct(productType) {
    localStorage.setItem('product', productType);
  }

  lightMode(mode) {
    localStorage.setItem('mode', mode)
  }

  getMode(mode) {
    var body = document.querySelectorAll('body, .page');
    var bgWhite = document.querySelectorAll('.night-bg');
    const currentMode = localStorage.getItem('mode', mode);

    body[0].style.backgroundColor = 'var(--tertiary)';
    body[0].style.color = 'white';

    for (var i = 0; i < bgWhite.length; i++) {
        bgWhite[i].style.backgroundColor = 'rgb(74,74,74)';
    }

    if (currentMode === 'night') {

        body[0].style.backgroundColor = 'var(--tertiary)';
        body[0].style.color = 'white';

        for (var i = 0; i < bgWhite.length; i++) {
            bgWhite[i].style.backgroundColor = 'rgb(74,74,74)';
        }
    } else {
        
        body[0].style.backgroundColor = 'white';
        body[0].style.color = 'black';

        for (var u = 0; u < bgWhite.length; u++) {
            bgWhite[u].style.backgroundColor = 'white';
        }
    }

    return currentMode;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    if (this.getProfileType() === 'owner') {
      window.location.assign('/ownerprofile');
    } else if (this.getProfileType() === 'walker') {
      window.location.assign('/walkerprofile');
    } else if (this.getProfileType() === 'admin') {
        window.location.assign('/adminprofile');
    }
  }

  setSingleProduct(productId) {
    localStorage.setItem('id_product', productId);
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
