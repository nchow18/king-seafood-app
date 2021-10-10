const db = require('./connection');
const { Order, Product, Promo, User } = require('../models');

db.once('open', async () => {
  console.log('opened');
  
  await Product.create({
    "product_id": "1103",
    "product_name": "Ebara Teriyaki Sauce 照烧酱 235g",
    "product_picture": [
       "1103-1",
       "1103-2"
    ],
    "product_category": "sauces",
    "product_price": "12.50",
    "product_description1": "0",
    "product_description2": "0",
    "product_description3": "0",
    "product_description4": "0",
    "product_status": true,
    "product_new": true,
    "product_featured": true,
    "product_sale_price": "0",
    "product_bulk_quantity": 0,
    "product_bulk_price": "0",
     
 })

 console.log('order seeded');

 process.exit();

});