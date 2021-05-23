const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        orderTotal: Number,
        cart: [String],
        delivery_status: {
            type: Boolean,
            required: true
        },
        delivery_date: {
            type: String,
            required: true,
        },
        paid: {
            type: Boolean,
            required: true
        }
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