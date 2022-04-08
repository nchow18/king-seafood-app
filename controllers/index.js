const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const productRoutes = require('./product-routes.js')
const detailRoutes = require('./detail-routes.js')
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.use('/products', productRoutes)
router.use('/dashboard', dashboardRoutes);
router.use('/details', detailRoutes);


// router.use((req, res) => {
//     res.status(404).end();
// })

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;