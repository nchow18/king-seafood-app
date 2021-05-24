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
  const promo = [{
    promoMsg1: 'Free Shipping',
    promo1Start: '11/11/11',
    promo1End: '11/11/11',
    promoMsg2: 'Free Gift',
    promo2Start: '11/11/11',
    promo2End: '11/11/11',
    promoMsg3: 'Free Tomato',
    promo3Start: '11/11/11',
    promo3End: '11/11/11',
    mainPromo: 'FREE DELIVERY + FREE GIFT (MINIMUM ORDER RM 150)',
    featuredProduct1: [{ productId: '1239', name: 'Steak', price: '100', picture: 'https://www.thespruceeats.com/thmb/kxu3tr3tIob-VCMNTKc5b7g2VFA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg'}],
    featuredProduct2: [{ productId: '1239', name: 'Chicken', price: '100', picture: 'https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900'}],
    featuredProduct3: [{ productId: '12342', name: 'Fruits', price: '100', picture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN'}],
  }]

  return promo;
}

  getCategories() {
    const categories = [
      'All',
      'Meat',
      'Vegetables',
      'Fruits',
      'Seafood',
    ]

    return categories;
  }

  getOrders() {
    const cart = this.getProductArr();
    var cartPriceArr = [];
    var orderArr = [];
  
    for (var i = 0; i < cart.length; i++) {
      cartPriceArr.push(cart[i].price);
    }

    for (var r = 0; r < cart.length; r++) {
        orderArr.push({
        orderName: cart[r].name, 
        orderCategory: cart[r].category, 
        orderWeight: cart[r].weight,
        orderPrice: cart[r].price,
        productId: cart[r]._id
        });
    }

    var cartTotal = cartPriceArr.reduce((a, b) => a + b, 0);

    const orders = [{
      user_id: "123",
      _id: '555',
      createdAt: '11/11/11',
      orderTotal: cartTotal,
      orders: orderArr,
      deliveryDate: '05/28/2021',
      delivered: false,
    }]

    return orders;
  }

  getUser() {
    const user = [
      {
        user_id: '111',
        firstName: 'Nathan',
        lastName: 'Chow',
        streetNumber: 5,
        streetName: 'street',
        region: 'penang',
        postalCode: '5555',
        city: 'MalaysiaCity',
        state: 'Malaysia',
        email: 'test@gmail.com'
      }
    ]

    return user;
  }

  getCart() {
    const product = this.getProductArr();
    const productArr = product[0];
    var totalArr = [];

    for (var i = 0; i < product.length; i++) {
      totalArr.push(product[i].price)
    }

    const totalCart = totalArr.reduce((a,b) => a + b, 0)


    var cart = [
      {
        user_id: '111',
        cartTotal: totalCart,
        productList: [{
          qty: '1', product_id: '1239', product: productArr
        },
        {
          qty: '1', product_id: '1239', product: productArr
        }],
        deliveryDate: '11/11/11',
        status: 'completed'
      },
    ];

    return cart;
  }

  getProductArr(arr) {
    const products = [
      {
        _id: '1239',
        category: 'Meat',
        name: 'Steak',
        price: 40,
        description: 'Great Wagyu steak from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
        weight: '10oz',
        picture: 'https://assets.bonappetit.com/photos/57ae47b5f1c801a1038bd23a/16:9/w_1280,c_limit/garlic-rosemary-steak.jpg',
        nameChinese: '牛扒',
        descriptionChinese: '',
        Availability: 1,
      },
      {
        _id: '1234',
        category: 'Seafood',
        name: 'Lobster',
        price: 100,
        description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
        weight: '10oz',
        picture: 'https://st.depositphotos.com/1874629/1688/i/600/depositphotos_16882595-stock-photo-cooked-european-common-lobster.jpg',
        nameChinese: '龙虾',
        descriptionChinese: '',
        Availability: 1,
      },
      {
        _id: '12348',
        category: 'Vegetables',
        name: 'Cabbage',
        price: 20,
        description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
        weight: '10oz',
        picture: 'https://healthyrecipesblogs.com/wp-content/uploads/2013/10/steamed-cabbage-square-2020.jpg',
        nameChinese: '龙虾',
        descriptionChinese: '',
        Availability: 1,
      },
      {
        _id: '12342',
        category: 'Fruits',
        name: 'Avocado',
        price: 30,
        description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
        weight: '',
        picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toast-with-avocado-and-cress-royalty-free-image-544809990-1541541433.jpg?crop=0.667xw:1.00xh;0.147xw,0&resize=480:*',
        nameChinese: '龙虾',
        descriptionChinese: '',
        availability: 0,
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

  setSingleOrder(order_id) {
    return localStorage.setItem('id_order', order_id);
  }

  updateSingleProduct(product_id) {
    window.location.href = `/productupdate/${product_id}`;
  }

  getSingleProductId(product_id) {
    console.log(product_id);
    return product_id;
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

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    if (this.loggedIn() === false) {
      window.location.assign('/home');
    } else if (this.getProfileType() === 'user') {
      window.location.assign('/account');
    } else if (this.getProfileType() === 'admin') {
        window.location.assign('/admindashboard');
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
