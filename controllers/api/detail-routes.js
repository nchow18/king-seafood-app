const router = require('express').Router();
const { Detail } = require('../../models');

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

router.post('/', (req, res) => {
  Detail.create({
    id: req.body.id,
    promo_banner: req.body.promo_banner,
    promo_discount: req.body.promo_discount,
    promo_picture: req.body.picture
  })
  .then(dbDetailData => {
    res.json(dbDetailData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })  
})

router.put('/:id', (req, res) => {

  Detail.update({
    id: req.body.id,
    promo_banner: req.body.promo_banner,
    promo_discount: req.body.promo_discount,
    promo_picture: req.body.picture
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(dbDetailData => {
    res.json(dbDetailData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })    
})

module.exports = router;