const router = require('express').Router();
const { Product } = require('../../models');

// The '/api/products/' endpoint

//Product Find All

router.get('/', (req, res) => {
  console.log(req.session);
  Product.findAll({
    attributes: [
      'id',
      'category',
      'details',
      'colors',
      'Jet_Black',
      'Natural_Black',
      'Darkest_Brown',
      'Chocolate_Brown',
      'Chestnut_Brown',
      'Medium_Brown',
      'Ash_Blonde',
      'Light_Ash_Blonde',
      'Honey_Blonde',
      'Medium_Auburn',
      'Dark_Auburn',
      'Platinum_Blonde',
      'Bleach_Blonde',
      'Plum_Red',
      'Dark_Wine',
      'Smokey_Grey'
    ]
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Find One

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category',
      'details',
      'colors',
      'Jet_Black',
      'Natural_Black',
      'Darkest_Brown',
      'Chocolate_Brown',
      'Chestnut_Brown',
      'Medium_Brown',
      'Ash_Blonde',
      'Light_Ash_Blonde',
      'Honey_Blonde',
      'Medium_Auburn',
      'Dark_Auburn',
      'Platinum_Blonde',
      'Bleach_Blonde',
      'Plum_Red',
      'Dark_Wine',
      'Smokey_Grey'
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
    category: req.body.category,
    details: req.body.details,
    colors: req.body.colors
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// Product Update one 

router.put('/:id', (req, res) => {
  Product.update({
    category: req.body.category,
    details: req.body.details,
    colors: req.body.colors
  },
  {
    where: {
      id: req.params.id
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

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login');
})

module.exports = router;