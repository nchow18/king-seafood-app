const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Product.findAll({
    attributes: [
      'id',
      'category',
      'details',
      'colors'
    ]
  })
  .then(dbProductData => {
    res.json(dbProductData)
    res.render('index')
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;