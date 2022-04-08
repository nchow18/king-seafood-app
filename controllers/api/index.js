const router = require('express').Router();
// const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');
const detailRoutes = require('./detail-routes.js');

// router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/details', detailRoutes);

module.exports = router;