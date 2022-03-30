const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');

//Products All

router.get('/', withAuth, (req, res) => {
  Product.findAll({
    attributes: [
      'id',
      'category',
      'details'
    ]
  })
  .then(dbProductData => {
    const products = dbProductData.map(product => product.get({ plain: true }))
    res.send({ products, loggedIn: true})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;