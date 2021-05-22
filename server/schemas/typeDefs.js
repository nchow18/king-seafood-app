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

    type AuthUser {
        token: ID
        user: User
    }

    type Product {
        _id: ID
        name: String!
        category: String!
        price: Int!
        description: String
        weight: String
        picture: String
        nameChinese: String
        descriptionChinese: String
    }

    input Product {
        _id: ID
        name: String!
        category: String!
        price: Int!
        description: String
        weight: String
        picture: String
        nameChinese: String
        descriptionChinese: String
    }

    type Order {
        _id: ID
        orderTotal: Int
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

        products: [Product]
        product(product_id: ID): Product
        
    }

    type Mutation {
        addUser(input: UserInput): AuthUser
    }

`;

module.exports = typeDefs;
