const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product } = require('../models');

router.get('/', (req, res) => {
  Product.findAll({
    attributes: [
      'id',
      'product_id',
      'category',
      'name',
      'price',
      'd1',
      'd2',
      'd3',
      'd4',
      'status',
      'sale_price',
      'bulk_qty',
      'bulk_price',
      'featured',
      'new_product',
      'picture'
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