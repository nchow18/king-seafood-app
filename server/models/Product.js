const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        weight: {
            type: String,
            required: true,
            trim: true
        },
        picture: {
            type: String,
            required: true,
            trim: true
        },
        nameChinese: {
            type: String,
            required: true,
            trim: true
        },
        descriptionChinese: {
            type: String,
            required: true,
            trim: true
        }                   
    },
    {
      toJSON: {
        getters: true
      }
    }
);

productSchema.virtual('product_count').get(function() {
    return this.cart.length;
});

const Product = model('Product', productSchema);

module.exports = Product;
