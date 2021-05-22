const { Schema, model } = require('mongoose');
const cartSchema = require("./Cart");

const orderSchema = new Schema(
    {
        products: {
            type: String,
            required: true
        },
        orderTotal: Number,
        cart: cartSchema,
        delivered: Boolean
    },
    {
        toJSON: {
            getters: true
        }
    }
);

orderSchema.virtual('order_count').get(function () {
    return this.order.length;
});


const Order = model('Order', orderSchema);

module.exports = Order;