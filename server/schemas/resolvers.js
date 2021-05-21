require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { Owner, Walker, Order } = require('../models');
const { signTokenOwner, signTokenWalker } = require('../utils/auth');
const { getTimeSlot } = require('../utils/helpers');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_KEY || process.env.STRIPE_TEST_SK);


const resolvers = {

};

module.exports = resolvers;
