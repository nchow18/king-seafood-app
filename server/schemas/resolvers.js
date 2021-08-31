require('dotenv').config();

const { AuthenticationError, UserInputError, ApolloError } = require('apollo-server-express');

const { User, Promo, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');
const { formDate } = require('../utils/helpers');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_KEY || process.env.STRIPE_TEST_SK);


const resolvers = {
    Query: {
        user: async (parent, { user_id }, context) => {
            return await User.findById( user_id )
                .select('-__v -password')
        },
        users: async (parent, args, context) => {
            return await User.find({})
                .select('-__v -password');
        },
        userMe: async (parent, args, context) => {
            if (context.user) {
              console.log(context.user._id);
                const user = await User.findById({ _id: context.user._id })
                    .select('-__v -password');
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        product: async (parent, { product_id }, context) => {
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
        },
        promo: async (parent, args, context) => {
            return await Promo.find({})
        }

    },
    Mutation: {
        addUser: async (parent, { input }) => {
            const user = await User.create(input);
            const token = signToken(user);

            return { token, user };
        },
        addUserOrder: async(parent, {input}, context) => {
          if(context.user) {
            return await User.findByIdAndUpdate(
              context.user._id,
              {$push: { pastOrders: (input.pastOrders)}}
            )
          }
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
        clearCart: async(parent, context) => {
          if(context.user) {
            return await User.findByIdAndUpdate(
              context.user._id,
              {$set: { cart: [] }}
            )
          }
        },
        removeCartItem: async(parent, { product_id }, context) => {

            if(context.user) {

                return await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { cart: { $in: { product_id: [product_id] }}}},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not logged in');
        },
        updateUserAccount: async (parent, { input }, context) => {

            if (context.user) {
                return await User.findByIdAndUpdate(
                    context.user._id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not logged in');
        },
        updateUserAddress: async (parent, { input }, context) => {

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
                const product = await Product.create(input)
    
                return product;
            } 
            throw new AuthenticationError('Not Admin');
        },
        addProductView: async(parent, { product_id }, context) => {
          const productView = await Product.findByIdAndUpdate(product_id)

          return await Product.findByIdAndUpdate(
            product_id,
            {product_views: productView.product_views + 1 },
            { new: true }
          )
        },
        addProductPicture: async(parent, { product_url, product_id }, context) => {
          if (context.user.admin === true) {
            return await Product.findByIdAndUpdate(
              product_id,
              {$push: { product_picture: product_url }},
              { new: true }
            )
          }
          throw new AuthenticationError('Not Logged In');
        },
        removeProductPicture: async(parent, { product_id, product_name }, context) => {
          if (context.user.admin === true) {
            return await Product.findByIdAndUpdate(
              product_id,
              {$pull: { product_picture: { $in: [ product_name ] }}}
            )
          }
          throw new AuthenticationError('Not Logged In');
        },
        updateProductPicture: async(parent, { new_picture_name, product_id, old_picture_name}, context) => {
          if (context.user.admin === true) {
            await Product.findByIdAndUpdate(
              product_id,
              {$pull: { product_picture: { $in: [ old_picture_name ] }}}
            )
            return await Product.findByIdAndUpdate(
              product_id,
              {$push: { product_picture: new_picture_name }}
            )
          }
          throw new AuthenticationError('Not Logged In');
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
          console.log(input);
            return await Order.create(
                {...input}
            )
        },
        updateOrder: async(parent, { input, order_id }, context) => {
            if (context.user.admin === true) {
                return await Order.findByIdAndUpdate(
                    order_id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not Logged In');
        },
        removeOrder: async(parent, {order_id}, context) => {
          if (context.user.admin === true) {
            return await Order.findByIdAndDelete(order_id)
          }
          throw new AuthenticationError('Not Logged In');
        },
        updateOrderStatus: async(parent, { input, order_id }, context) => {
            if (context.user.admin === true ) {
                return await Order.findByIdAndUpdate(
                    order_id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not Admin')
        },
        createPromo: async(parent, { input }, context) => {
            if (context.user.admin === true) {
                const promoQty = await Promo.find({})
                if (promoQty.length >= 1) {

                throw new AuthenticationError('request cancelled')
                }
                return await Promo.create(
                    input
                )
            }
            throw new AuthenticationError('Not Admin');
        },
        updatePromo: async(parent, { input, promo_id }, context) => {
            if (context.user.admin === true) {
                return await Promo.findByIdAndUpdate(
                    promo_id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not Admin');
        },
        updateUserAddress: async(parent, { input }, context) => {
            if(context.user) {

                await User.findByIdAndUpdate(
                    context.user._id,
                    {$set: { address: [] }},
                    { new: true }
                )
                return await User.findByIdAndUpdate(
                    context.user._id,
                    {$push: { address: input }}
                )
            }
            throw new AuthenticationError('Not Logged In');
        },
        updateUserAccount: async(parent, { input }, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(
                    context.user._id,
                    {...input},
                    { new: true }
                )
            }
            throw new AuthenticationError('Not Logged In');
        },
        addCart: async(parent, {input}, context) => {
          if (context.user) {
            return await User.findByIdAndUpdate(
              context.user._id,
              { $push: { cart: input }},
              { new: true }
            )
          }
          throw new AuthenticationError('Not Logged In')
        },
        updateCart: async(parent, { input, product_id }, context) => {
          if (context.user) {
            await User.findByIdAndUpdate(
              context.user._id,
              { $pull: { cart: { $in: { product_id: product_id }}}},
              { new: true }
            )

            return await User.findByIdAndUpdate(
              context.user._id,
              { $push: { cart: input }},
              { new: true }
            )
          }
          throw new AuthenticationError('Not Logged In');
        }
    }
};

module.exports = resolvers;
