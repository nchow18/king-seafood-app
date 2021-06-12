const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const orderSchema = new Schema(
    {
        orderTotal: {
          type: String,
          required: false,
          trim: true
        },
        cart: [String],
        delivery_status: {
            type: Boolean,
            required: false,
            default: false
        },
        delivery_date: {
            type: String,
            required: false,
            default: '',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        paid: {
            type: Boolean,
            required: false,
            default: false
        },
        name: {
          type: String,
          required: false,
          trim: true
        },
        phone: {
          type: String,
          required: false,
          trim: true
        },
        address: {
          type: String,
          required: false,
          trim: true
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