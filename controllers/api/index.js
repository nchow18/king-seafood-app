const router = require('express').Router();
// const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');

// router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;