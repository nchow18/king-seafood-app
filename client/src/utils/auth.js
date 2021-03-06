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

  adminSetCategory(item) {
    return localStorage.setItem('adminCategory', item);
  }

  adminGetCategory() {
    return localStorage.getItem('adminCategory');
  }

  getPromotions() {

  }

  getCategories() {
    const categories = [
		{
			name: 'All',
		},
		{
			name: 'Meat',
		},
		{
			name: 'Vegetables',
		},
		{
			name: 'Fruits',
		},
    {
      name: 'Bundle Promotion',
    },
    {
      name: 'Squid',
    },
    {
      name: 'Special'
    },
    {
      name: 'Shellfish'
    },
    {
      name: 'Scallops'
    }
    ]

    return categories;
  }

  saveCart(data) {
    localStorage.removeItem('user_cart');
    return localStorage.setItem('user_cart', JSON.stringify(data));
  }

  saveGuestCart(data) {
    localStorage.removeItem('guest_cart');
    return localStorage.setItem('guest_cart', JSON.stringify(data))
  }

  setCartQuantity(quantity) {
    return localStorage.setItem('user_cart_quantity', quantity);
  }

  getGuestCartQuantity() {
    const length = localStorage.getItem('guest_cart_quantity')
    const total = length;
    return total;
  }

  getUserCartQuantity() {
    const length = localStorage.getItem('user_cart_quantity')
    const total = length;
    return total;
  }

  getOrders() {

  }

  getUser() {

  }

  getCartTotal(data) {
    const total = data;
    return total;
  }

  setProductArr() {

  }

  getProductArr() {

  }

  setSingleProduct(product_id) {
    return localStorage.setItem('id_product', product_id)
  }

  getSingleProduct() {
    return localStorage.getItem('id_product');
  }

  viewSingleProduct() {
    const productId = localStorage.getItem('id_product');

    window.location.href = `/product/${productId}`;
  }

  updateSingleProduct() {
    const product_id = this.getSingleProductId();
    window.location.href = `/productupdate/${product_id}`;
  }

  setAdminSingleProductId(id) {
    return localStorage.setItem('id_admin_product', id)
  }

  getSingleProductId() {
    return localStorage.getItem('id_admin_product')
  }

  setSingleOrder(order_id) {
    return localStorage.setItem('id_order', order_id);
  }

  getSingleOrder() {
    return localStorage.getItem('id_order')
  }

  viewSingleOrder() {
    const orderId = this.getSingleOrder();

    window.location.href = `/order/${orderId}`;
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
      } else 
      return false;
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

        for (var q = 0; q < bgWhite.length; q++) {
            bgWhite[q].style.backgroundColor = 'rgb(74,74,74)';
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
      window.location.assign('/home');
    } else if (this.getProfileType() === 'user') {
      window.location.assign('/home');
    } else if (this.getProfileType() === 'admin') {
        window.location.assign('/admindashboard');
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
  }
}

export default new AuthService();
