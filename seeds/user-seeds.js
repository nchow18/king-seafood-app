const { User } = require('../models');

const userData = [
    {
      username: 'chowjai',
      email: 'emailme@nathanchow.ca',
      password: 'password123',
      admin: true,
      hairtech: true,
      customer: false
    }
];

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;