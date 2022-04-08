const { Detail } = require('../models');

const detailData = [
  {
    id: 1,
    promo_banner: '',
    promo_discount: '',
    promo_picture: ''
  }
];

const seedDetails = () => Detail.bulkCreate(detailData);

module.exports = seedDetails;