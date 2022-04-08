const router = require('express').Router();
const sequelize = require('../config/connection');
const { Detail } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Detail.findAll({
    attributes: [
      'id',
      'promo_banner',
      'promo_discount',
      'promo_picture'
    ]
  })
  .then(dbDetailData => {
    res.json(dbDetailData)
    res.render('index')
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;