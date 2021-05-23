const db = require('./connection');
const { Order } = require('../models');

db.once('open', async () => {
    console.log('opened');

    await Order.deleteMany();

    console.log('order seeded');

    process.exit();

});