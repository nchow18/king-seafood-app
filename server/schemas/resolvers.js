require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { User, Promo, Product, Order } = require('../models');
const { signTokenUser, signTokenWalker } = require('../utils/auth');
const { getTimeSlot } = require('../utils/helpers');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_KEY || process.env.STRIPE_TEST_SK);


const resolvers = {
    Query: {

    },
    Mutation: {

        addUser: async (parent, { input }) => {
            const user = await User.create(input);
            const token = signTokenUser(user);

            return { token, user };
        },

    
    }
};

module.exports = resolvers;
