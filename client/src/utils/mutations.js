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

export const ADD_CART = gql`
    mutation addCart($input: [CartInput]) {
        addCart(input: $input) {
            cart {
            product_id
            quantity
        }
        _id
        first_name
        last_name
        }
    }
`;

export const REMOVE_CART = gql`
    mutation removeCart($product_id: ID!) {
        removeCart(product_id: $product_id) {
            cart {
            product_id
            quantity
        }
        _id
        first_name
        last_name
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($input: UserAccountInput) {
        updateUser(input: $input) {
        first_name
        last_name
        email
        phone
        _id
        }
    }
`;

export const ADD_PRODUCT = gql`
    mutation addProduct($input: ProductInput!) {
        addProduct(input:$input) {
        _id
        product_name
        product_category
        product_price
        product_description
        product_weight
        product_picture
        product_nameChinese
        product_descriptionChinese
        product_status
        product_sale_price
        product_bulk_quantity
        product_bulk_price
        product_featured
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($input: ProductInput!, $product_id: ID!) {
        updateProduct(input:$input, product_id: $product_id) {
        _id
        product_name
        product_category
        product_price
        product_description
        product_weight
        product_picture
        product_nameChinese
        product_descriptionChinese
        product_status
        product_sale_price
        product_bulk_quantity
        product_bulk_price
        product_featured
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
        orderTotal
        delivery_date
        paid
        createdAt
        delivery_status
        _id
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation updateOrder($input:OrderUpdate, $order_id: ID!) {
        updateOrder(input:$input, order_id:$order_id) {
        _id
        cart {
            product_id
            quantity
        }
        paid
        delivery_date
        delivery_status
        }
    }
`;

export const UPDATE_ORDER_STATUS = gql`
    mutation updateOrderStatus($input:OrderStatus,$order_id: ID!) {
        updateOrderStatus(input:$input, order_id:$order_id) {
        _id
        delivery_date
        delivery_status
        orderTotal
        cart {
            product_id
            quantity
        }
        paid
        createdAt
        }
    }
`;

export const UPDATE_PROMO = gql`
    mutation updatePromo($input:PromoInput, $promo_id: ID!) {
        updatePromo(input:$input, promo_id:$promo_id) {
        _id
        promoMsg1
        promo1Start
        promo1End
        promoMsg2
        promo2Start
        promo2End
        promoMsg3
        promo3Start
        promo3End
        promoPicture1
        promoPicture2
        promoPicture3
        mainPromo
        discount
        featuredProduct1
        featuredProduct2
        featuredProduct3
        }
    }
`;

export const UPDATE_ADDRESS = gql`
    mutation updateUserAddress($input:AddressInput, $user_id:ID!) {
        updateUserAddress(input:$input, user_id:$user_id) {
        _id
        first_name
        last_name
        address {
            street_name
            street_number
            city
        }
        }
    }
`;

export const UPDATE_CART = gql`
  mutation updateCart($quantity: Int, $product_id: String!) {
    updateCart(quantity: $quantity, product_id: $product_id) {
      cart {
        quantity
        product_id
      }
    }
  }
`;

export const ADD_PRODUCT_PICTURE = gql`
  mutation addProductPicture($product_url: String, $product_id: String!) {
    addProductPicture(product_url:$product_url, product_id:$product_id) {
        _id
        product_name
        product_picture 
    }
  }
`;

export const REMOVE_PRODUCT_PICTURE = gql`
  mutation removeProductPicture($product_id: String!, $product_url: String) {
    removeProductPicture(product_id:$product_id, product_url:$product_url) {
      _id
      product_name
      product_picture
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
  mutation updateProductPicture($product_url: String, $product_id: String!, $product_old_url: String!) {
    updateProductPicture(product_url: $product_url, product_id: $product_id, product_old_url:$product_old_url) {
      _id
      product_name
      product_picture
    }
  }
`;