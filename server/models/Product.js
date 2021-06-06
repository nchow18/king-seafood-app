const { Schema, model } = require('mongoose');

// const pictureSchema = new Schema(
//   {
//     product_url: {
//       type: [String],
//       trim: true
//     }
//   }
// )

const productSchema = new Schema(
  {
    product_category: {
      type: String,
      required: true,
      trim: true
    },
    product_name: {
      type: String,
      required: true,
      trim: true
    },
    product_price: {
      type: Number,
      required: true,
      trim: true
    },
    product_description: {
      type: String,
      required: false,
      trim: true
    },
    product_weight: {
      type: String,
      required: false,
      trim: true
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
      required: true,
      trim: true
    },
    product_sale_price: {
      type: Number,
      required: false,
      trim: true
    },
    product_bulk_quantity: {
      type: Number,
      required: false,
      trim: true
    },
    product_bulk_price: {
      type: Number,
      required: false,
      trim: true
    },
    product_featured: {
      type: Boolean,
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

productSchema.virtual('product_count').get(function() {
  return this.cart.length;
});

const Product = model('Product', productSchema);

module.exports = Product;
