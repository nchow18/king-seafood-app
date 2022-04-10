const { Detail } = require('../models');

const detailData = [
  {
    id: 1,
    promo_banner: 'FREE DELIVERY WITH ORDERS OVER RM100***',
    promo_discount: '10.10',
    promo_picture: 'jan_promo_2022.jpeg'
  }
];

const seedDetails = () => Detail.bulkCreate(detailData);

module.exports = seedDetails;