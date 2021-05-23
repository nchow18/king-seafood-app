require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { User, Promo, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_KEY || process.env.STRIPE_TEST_SK);


const resolvers = {
    Query: {
        user: async (parent, { user_id }, context) => {
            console.log( user_id )
            return await User.findById(user_id)
                .select('-__v -password')
        },
        users: async (parent, args, context) => {
            return await User.find({})
                .select('-__v -password');
        },
        userMe: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findByOne({ _id: context.user._id })
                    .select('-__v -password');

                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        product: async (parent, { product_id }, context) => {
            console.log( product_id )
            return await Product.findById(product_id)
        },
        products: async (parent, args, context) => {
            return await Product.find({})
        },
        order: async(parent, { order_id }, context) => {
            return await Order.findById(order_id)
        },
        orders: async(parent, args, context) => {
            return await Order.find({})
        }

    },
    Mutation: {
        addUser: async (parent, { input }) => {
            const user = await User.create(input);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('User not found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user }
        },
        addCart: async (parent, { input }, context) => {

            if (context.user) {
                const product_id = input[0].product_id;
                const user = await User.findById(context.user._id)

                var duplicate = '';

                for (var i = 0; i < user.cart.length; i++ ) {
                    if (product_id === user.cart[i].product_id) {
                        duplicate = 'exists';
                    }
                }

                if (duplicate !== 'exists') {
                    return await User.findByIdAndUpdate(
                        { _id: context.user._id },
                        {$addToSet: { cart: input[0] }},
                        { new: true }
                    )
                }
                throw new AuthenticationError('Item exists in cart');
            }
        throw new AuthenticationError('Not Logged in');
        },
        removeCart: async(parent, { cart_id }, context) => {

            console.log(cart_id);

            if(context.user) {

                return await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { cart: { product_id: cart_id }}},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, { input }, context) => {

            console.log(input);
            console.log(context.user);

            if (context.user) {
                return await User.findByIdAndUpdate(
                    context.user._id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not logged in');
        },  
        addProduct: async(parent, { input }, context) => {

            if (context.user.admin === true) {
    
                const product = await Product.create(input);
    
                return product;
            } 
            throw new AuthenticationError('Not Admin');
        },
        updateProduct: async(parent, { input, product_id }, context) => {
            if (context.user.admin === true) {
                return await Product.findByIdAndUpdate(
                    product_id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not Admin')
        },
        removeProduct: async(parent, { input, product_id }, context) => {
            if (context.user.admin === true) {
                return await Product.findByIdAndDelete(
                    product_id,
                )
            }
        },
        addOrder: async (parent, { input }, context) => {

            const user_data = await User.findById(context.user._id);
            const user_cart = user_data.cart;
            
            // add User.Cart array into Order.cart Array
            input.cart = user_cart;

            console.log(input);

            if (context.user) {
                return await Order.create(
                    input
                )
            }
            throw new AuthenticationError('Not logged in');
        },
        //updateOrder(delivered)
        //updatePromotion

    }
};

module.exports = resolvers;
