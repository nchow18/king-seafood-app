const router = require('express').Router();
const { Product } = require('../../models');

// The '/api/products/' endpoint

//Product Find All

router.get('/', (req, res) => {
  console.log(req.session);
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
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Find One

router.get('/:product_id', (req, res) => {
  Product.findOne({
    where: {
      product_id: req.params.product_id
    },
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
    ],
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id' })
      return;
    }
    res.json(dbProductData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Add One

router.post('/', (req, res) => {

  Product.create({
    product_id: req.body.product_id,
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    d1: req.body.d1,
    d2: req.body.d2,
    d3: req.body.d3,
    d4: req.body.d4,
    status: req.body.status,
    sale_price: req.body.sale_price,
    bulk_qty: req.body.bulk_qty,
    bulk_price: req.body.bulk_price,
    featured: req.body.featured,
    picture: req.body.picture,
    new_product: req.body.new_product
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Update one 

router.put('/:product_id', (req, res) => {

  Product.update({
    product_id: req.body.product_id,
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    d1: req.body.d1,
    d2: req.body.d2,
    d3: req.body.d3,
    d4: req.body.d4,
    status: req.body.status,
    sale_price: req.body.sale_price,
    bulk_qty: req.body.bulk_qty,
    bulk_price: req.body.bulk_price,
    featured: req.body.featured,
    picture: req.body.picture,
    new_product: req.body.new_product
  },
  {
    where: {
      product_id: req.params.product_id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: "No product found with this id"})
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Delete 

router.delete('/:product_id', (req, res) => {
  Product.destroy({
    where: {
      product_id: req.params.product_id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id'})
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// user check Logged in

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//   }
//   res.render('login');
// })

module.exports = router;