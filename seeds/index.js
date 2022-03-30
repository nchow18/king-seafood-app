const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true })

    console.log('=========PRODUCTS SEEDED==========');
    await seedProducts();

    console.log('=========USERS SEEDED==========');
    await seedUsers();

    process.exit(0);
}

seedAll();