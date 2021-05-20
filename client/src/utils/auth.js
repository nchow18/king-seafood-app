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

  getSingleProduct() {
    return localStorage.getItem('id_product');
  }

  viewSingleProduct() {
    const productId = localStorage.getItem('id_product');

    window.location.href = `/${productId}`;
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
