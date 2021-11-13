const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const cartSchema = new Schema(
    {
      product_id: {
          type: String,
          required: true,
          trim: true
      },
      quantity: {
          type: Number,
          required: true,
          trim: true
      },
      product_name: String,
      product_price: String,
      product_sale_price: String,
      product_bulk_price: String,
      product_bulk_quantity: Number
    },
    {
      toJSON: {
        getters: true
      }
    }
)

const addressSchema = new Schema(
  {
      street_name: {
        type: String,
        required: true
    },
    street_number: {
        type: String,
        required: true,   
    },
    city: {
        type: String,
        required: true  
    },
    postal_code: {
        type: String,
        required: true  
    },
    region: {
        type: String,
        required: true 
    },
    state: {
        type: String,
        required: true 
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must be a valid email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        admin: {
            type: Boolean,
            default: false
        },
        address: String,
        phone: {
            type: String
        },
        cart: [cartSchema],
        pastOrders: [String],
        previous_orders: [String]
    },
    {
      toJSON: {
        getters: true
      }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.virtual('cart_count').get(function() {
    return this.cart.cart_list.length;
});

const User = model('User', userSchema);

module.exports = User;
