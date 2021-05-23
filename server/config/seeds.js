const db = require('./connection');
const { Order, Product, Promo } = require('../models');

db.once('open', async () => {
    console.log('opened');

    await Order.deleteMany();
    await Promo.deleteMany();

    console.log('order seeded');

    process.exit();

});