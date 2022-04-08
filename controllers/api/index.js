const router = require('express').Router();
// const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');
const detailRoutes = require('./detail-routes.js');
const imageRoutes = require('./image-routes.js');

// router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/details', detailRoutes);
router.use('/image-upload', imageRoutes);

module.exports = router;