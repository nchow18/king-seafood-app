const { Schema } = require('mongoose');

const cartSchema = new Schema(
    {
        cart_list: [],
        deliveryDate: String,
        paid: {
            type: Boolean,
            required: false 
        }
    }
);

module.exports = cartSchema;