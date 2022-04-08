const seedProducts = require('./product-seeds');
const seedDetails = require('./detail-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true })

    console.log('=========PRODUCTS SEEDED==========');
    await seedProducts();

    console.log('=========DETAILS SEEDED==========');
    await seedDetails();    

    process.exit(0);
}

seedAll();