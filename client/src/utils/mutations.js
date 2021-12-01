import gql from 'graphql-tag';

//0 LOGIN
//1 ADD_USER
//2 ADD_CART
//3 REMOVE_CART
//4 UPDATE_USER
//5 ADD_PRODUCT
//6 UPDATE_PRODUCT
//7 REMOVE_PRODUCT
//8 ADD_ORDER
//9 UPDATE_ORDER
//10 UPDATE_ORDER_STATUS
//11 UPDATE_PROMO
//12 UPDATE_ADDRESS
//13 UPDATE_CART
//14 REMOVE_PRODUCT_PICTURE
//15 ADD_PRODUCT_PICTURE
//16 REMOVE_ORDER
//17 UPDATE_PRODUCT_PICTURE
//18 ADD_VIEWS
//19 ADD_USER_ORDER
//20 CLEAR_CART

export const LOGIN = gql`
    mutation login($email: String!, $password:String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            email
            admin
        }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput) {
    addUser(input: $input) {
      token
      user {
          _id
          first_name
          last_name
          email
      }
    }
  }
`;



export const REMOVE_CART = gql`
  mutation removeCartItem($product_id: String) {
    removeCartItem(product_id: $product_id) {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
    mutation updateUserAccount($input: UserInput) {
        updateUserAccount(input: $input) {
          _id
        }
    }
`;

export const ADD_PRODUCT = gql`
    mutation addProduct($input: ProductInput!) {
        addProduct(input:$input) {
        _id
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($input: ProductInput!, $product_id: ID!) {
        updateProduct(input:$input, product_id: $product_id) {
        _id
        }
    }
`;

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($product_id: ID!) {
    removeProduct(product_id: $product_id) {
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($input:OrderInput!) {
    addOrder(input:$input) {
      _id
    }
  }
`;

export const UPDATE_ORDER = gql`
    mutation updateOrder($input:OrderUpdate, $order_id: ID!) {
        updateOrder(input:$input, order_id:$order_id) {
        _id
        }
    }
`;

export const UPDATE_ORDER_STATUS = gql`
    mutation updateOrderStatus($input:OrderStatus,$order_id: ID!) {
        updateOrderStatus(input:$input, order_id:$order_id) {
        _id
        }
    }
`;

export const UPDATE_PROMO = gql`
    mutation updatePromo($input:PromoInput, $promo_id: ID!) {
        updatePromo(input:$input, promo_id:$promo_id) {
        _id
        }
    }
`;

export const UPDATE_ADDRESS = gql`
    mutation updateUserAddress($input:AddressInput, $user_id:ID!) {
        updateUserAddress(input:$input, user_id:$user_id) {
        _id
      }
    }
`;

export const UPDATE_CART = gql`
  mutation updateCart($input: CartInput, $product_id: String) {
    updateCart(input: $input, product_id: $product_id) {
      _id
    }
  }
`;

export const ADD_CART = gql`
  mutation addCart($input: CartInput) {
    addCart(input: $input) {
      _id
    }
  }
`;

export const ADD_PRODUCT_PICTURE = gql`
  mutation addProductPicture($product_url: String, $product_id: String!) {
    addProductPicture(product_url:$product_url, product_id:$product_id) {
      _id
    }
  }
`;

export const REMOVE_PRODUCT_PICTURE = gql`
  mutation removeProductPicture($product_id: String!, $picture_name: String) {
    removeProductPicture(product_id:$product_id, picture_name:$picture_name) {
      _id
    }
  }
`;

export const REMOVE_ORDER = gql`
  mutation removeOrder($order_id: String!) {
    removeOrder(order_id: $order_id) {
      _id
    }
  }
`;

export const UPDATE_PRODUCT_PICTURE = gql`
  mutation updateProductPicture($new_picture_name: String, $product_id: String!, $old_picture_name: String!) {
    updateProductPicture(new_picture_name: $new_picture_name, product_id: $product_id, old_picture_name:$old_picture_name) {
      _id
    }
  }
`;

export const ADD_VIEWS = gql`
  mutation addProductView ($product_id:String) {
    addProductView(product_id: $product_id) {
      _id
    }
  }
`;

export const ADD_USER_ORDER = gql`
  mutation addUserOrder($input: UserOrders) {
    addUserOrder(input: $input) {
      _id
    }
  }
`;

export const CLEAR_CART = gql`
  mutation clearCart($user_id: String) {
    clearCart(user_id: $user_id) {
      _id
    }
  }
`;

export const UPDATE_USER_ADDRESS = gql`
  mutation updateUserAddress($input: AddressInput) {
    updateUserAddress(input: $input) {
      _id
    }
  }
`;