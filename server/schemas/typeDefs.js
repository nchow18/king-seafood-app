const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        admin: Boolean
        address: Address
        phone: String
        stripe_customer_id: String
        stripe_setup_intent: String
        cart: Cart
        pastOrders: Order
    }

    input UserInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        admin: Boolean
        address: AddressInput
        phone: String
    }

    type Cart {
        _id: ID
        deliveryDate: String
        paid: Boolean
    }

    type AuthUser {
        token: ID
        user: User
    }

    type Product {
        _id: ID
        product_name: String!
        product_category: String!
        product_price: Int!
        product_description: String
        product_weight: String
        product_picture: String
        product_nameChinese: String
        product_descriptionChinese: String
    }

    input ProductInput {
        _id: ID
        product_name: String!
        product_category: String!
        product_price: Int!
        product_description: String
        product_weight: String
        product_picture: String
        product_nameChinese: String
        product_descriptionChinese: String
    }

    type Order {
        _id: ID
        orderTotal: Int
        cart: Cart
    }

    type Address {
        street_name: String!
        city: String!
        street_number: String!
        postal_code: String!
        region: String!
        state: String!
    }

    input AddressInput {
        street_name: String!
        city: String!
        street_number: String!
        postal_code: String!
        region: String!
        state: String!
    }

    type Customer {
        id: String
        object: String
        address: stripeAddress
        balance: Float
        currency: String
        description: String
        email: String
        name: String
        phone: String
    }

    type stripeAddress {
        city: String
        country: String
        line1: String
        line2: String
        postal_code: String
        state: String
    }

    type Charge {
        id: String
        object: String
        amount: Int
        receipt_url: String
        status: String
    }

    type Payment{
        id: String
        amount: Int
        created: Int
        currency: String
        description: String
        status: String
    }

    type Payments {
        data: [Payment]
    }

    type Query {
        user(user_id: ID!): User
        users: [User]
        userMe: User

        order(order_id: ID): Order
        orders: [Order]

        products: [Product]
        product(product_id: ID): Product
        
    }

    type Mutation {
        addUser(input: UserInput): AuthUser
    }

`;

module.exports = typeDefs;
