const db = require('./connection');
const { Order, Product } = require('../models');

db.once('open', async () => {
    console.log('opened');

    await Order.deleteMany();
    await Product.deleteMany();

    console.log('order seeded');

    process.exit();

});