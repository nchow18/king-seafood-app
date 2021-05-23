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
        cart: [Cart]
        pastOrders: [String]
    }

    type Cart {
        product_id: String
        quantity: Int
    }

    input CartInput {
        product_id: String
        quantity: Int
    }

    input UserInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        admin: Boolean
        address: AddressInput
        phone: String
        cart: [String]
    }

    input UserAccountInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        admin: Boolean
        address: AddressInput
        phone: String
        cart: [String]
        stripe_customer_id: String
        stripe_setup_intent: String
    }

    type Product {
        _id: ID
        product_name: String
        product_category: String
        product_price: Int
        product_description: String
        product_weight: String
        product_picture: String
        product_nameChinese: String
        product_descriptionChinese: String
        product_status: Boolean!
    }

    input ProductInput {
        product_name: String!
        product_category: String!
        product_price: Int!
        product_description: String
        product_weight: String
        product_picture: String
        product_nameChinese: String
        product_descriptionChinese: String
        product_status: Boolean
    }

    type Order {
        _id: ID
        orderTotal: Int
        cart: [String]
        paid: Boolean
        delivery_date: String
        delivery_status: Boolean
    }

    input OrderInput {
        orderTotal: Int
        cart: [String]
        paid: Boolean!
        delivery_date: String!
        delivery_status: Boolean!
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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(user_id: ID!): User
        users: [User]
        userMe: User

        product(product_id: ID!): Product
        products: [Product]

        order(order_id: ID!): Order
        orders: [Order]
    }

    type Mutation {
        addUser(input: UserInput): Auth
        login(email: String!, password: String!): Auth
        addCart(input: [CartInput]): User
        removeCart(product_id: ID!): User
        updateUser(input: UserAccountInput): User
        addProduct(input: ProductInput!): Product
        updateProduct(input: ProductInput!, product_id: ID!): Product
        removeProduct(product_id: ID!): Product
        addOrder(input: OrderInput!): Order
        updateOrder(input: OrderInput): Order


    }

`;

module.exports = typeDefs;
