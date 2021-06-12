const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema(
  {
    inventory_id: {
      type: String,
      required: false,
      trim: true
    },
    product_category: {
      type: String,
      required: false,
      trim: true
    },
    product_name: {
      type: String,
      required: false,
      trim: true
    },
    product_price: {
      type: String,
      required: false,
      trim: true
    },
    product_description1: {
      type: String,
      required: false,
      trim: true,
      default: '0'
    },
    product_description2: {
      type: String,
      required: false,
      trim: true,
      default: '0'
    },
    product_description3: {
      type: String,
      required: false,
      default: '0'
    },
    product_description4: {
      type: String,
      requied: false,
      trim: true,
      default: '0'
    },
    product_weight: {
      type: String,
      required: false,
      trim: true,
      default: ''
    },
    product_picture: [String],
    product_nameChinese: {
      type: String,
      required: false,
      trim: true
    },
    product_descriptionChinese: {
      type: String,
      required: false,
      trim: true
    },
    product_status: {
      type: Boolean,
      required: false,
      trim: true,
      default: true
    },
    product_sale_price: {
      type: String,
      required: false,
      trim: true,
      defaut: '0'
    },
    product_bulk_quantity: {
      type: Number,
      required: false,
      trim: true,
      default: 0
    },
    product_bulk_price: {
      type: String,
      required: false,
      trim: true,
      default: '0'
    },
    product_featured: {
      type: Boolean,
      required: false,
      trim: true,
      default: false
    },
    product_views: {
      type: Number,
      required: false,
      trim: true,
      default: 0
    },
    createdAt: {
      type: Date,
      get: timestamp => dateFormat(timestamp),
      default: Date.now
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
