const { Product } = require('../models');

const productData = [

  {
    id: 1,
    product_id: '100',
    name: 'Smoked Salmon 烟熏三文鱼 100g',
    category: 'fish',
    price: '14',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    status: true,
    sale_price: '',
    bulk_qty: '',
    bulk_price: '',
    featured: false,
    new_product: false,
    picture: 'tn_100-1.jpg,tn_100-2.jpg'
  },

  {
    id: 2,
    product_id: '101',
    name: 'Salmon Steak 三文鱼排 ±250g/pc*',
    category: 'fish',
    price: '14',
    d1: 'order by pieces',
    d2: 'RM38/kg',
    d3: '*Estimated price only *Final price will be based on actual weight',
    d4: '',
    status: true,
    sale_price: '',
    bulk_qty: '',
    bulk_price: '',
    featured: false,
    new_product: false,
    picture: 'tn_101-1.jpg,tn_101-2.jpg'
  },

  {
    id: 3,
    product_id: '102',
    name: 'Salmon Steak 三文鱼排 1kg*',
    category: 'fish',
    price: '14',
    d1: 'order by pieces',
    d2: 'RM38/kg',
    d3: '*Estimated price only *Final price will be based on actual weight',
    d4: '',
    status: true,
    sale_price: '10',
    bulk_qty: '',
    bulk_price: '',
    featured: false,
    new_product: false,
    picture: 'tn_102-1.jpg,tn_102-2.jpg'
  },

  {
    id: 4,
    product_id: '104',
    name: 'Salmon Steak 三文鱼排 1.5kg*',
    category: 'fish, meat',
    price: '14',
    d1: 'order by pieces',
    d2: 'RM38/kg',
    d3: '*Estimated price only *Final price will be based on actual weight',
    d4: '',
    status: true,
    sale_price: '',
    bulk_qty: '3',
    bulk_price: '12',
    featured: false,
    new_product: false,
    picture: 'tn_103-1.jpg,tn_103-2.jpg'
  },
  
];

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts;