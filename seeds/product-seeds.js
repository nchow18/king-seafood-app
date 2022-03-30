const { Product } = require('../models');

const productData = [

  {
    id: 1,
    category: 'classic_tape_in',
    details: 'All Natural',
    colors: '["Jet_Black","Natural_Black","Darkest_Brown","Chocolate_Brown","Chestnut_Brown","Medium_Brown","Ash_Blonde","Light_Ash_Blonde","Honey_Blonde","Medium_Auburn","Dark_Auburn","Platinum_Blonde","Bleach_Blonde","Plum_Red","Dark_Wine","Smokey_Grey"]',
    Jet_Black: '{"length_18":"145.50","length_20":"150.50","length_22":"160.50","length_24":"170.50","length_26":"180.50"}',
    Natural_Black: '{"length_18":"145.50","length_20":"150.50","length_22":"160.50","length_24":"170.50","length_26":"180.50"}',
    Darkest_Brown: '{"length_18":"145.50","length_20":"150.50","length_22":"160.50","length_24":"170.50","length_26":"180.50"}',
    Chocolate_Brown: '{"length_18":"145.50","length_20":"150.50","length_22":"160.50","length_24":"170.50","length_26":"180.50"}',
    Chestnut_Brown: '{"length_18":"145.50","length_20":"150.50","length_22":"160.50","length_24":"170.50","length_26":"180.50"}',
    Medium_Brown: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Ash_Blonde: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Light_Ash_Blonde: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Honey_Blonde: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Medium_Auburn: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Dark_Auburn: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Platinum_Blonde: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Bleach_Blonde: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Plum_Red: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Dark_Wine: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}',
    Smokey_Grey: '{"length_18":"152.50","length_20":"162.50","length_22":"172.50","length_24":"182.50","length_26":"192.50"}'
  },

  {
    id: 2,
    category: 'invisible_tape_in',
    details: 'All Natural',
    colors: '',
    Jet_Black: '{"length_18":"147.50","length_20":"157.50","length_22":"167.50","length_24":"177.50","length_26":"187.50"}',
    Natural_Black: '{"length_18":"147.50","length_20":"157.50","length_22":"167.50","length_24":"177.50","length_26":"187.50"}',
    Darkest_Brown: '{"length_18":"147.50","length_20":"157.50","length_22":"167.50","length_24":"177.50","length_26":"187.50"}',
    Chocolate_Brown: '{"length_18":"147.50","length_20":"157.50","length_22":"167.50","length_24":"177.50","length_26":"187.50"}',
    Chestnut_Brown: '{"length_18":"147.50","length_20":"157.50","length_22":"167.50","length_24":"177.50","length_26":"187.50"}',
    Medium_Brown: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Ash_Blonde: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Light_Ash_Blonde: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Honey_Blonde: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Medium_Auburn: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Dark_Auburn: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Platinum_Blonde: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Bleach_Blonde: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Plum_Red: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Dark_Wine: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}',
    Smokey_Grey: '{"length_18":"157.50","length_20":"167.50","length_22":"177.50","length_24":"187.50","length_26":"197.50"}'
  },

  {
    id: 3,
    category: 'seamless_tape_in',
    details: 'All Natural',
    colors: '["Jet_Black","Natural_Black","Darkest_Brown","Chocolate_Brown","Chestnut_Brown","Medium_Brown","Ash_Blonde","Light_Ash_Blonde","Honey_Blonde","Medium_Auburn","Dark_Auburn","Platinum_Blonde","Bleach_Blonde","Plum_Red","Dark_Wine","Smokey_Grey"]',
    Jet_Black: '{"length_18":"155.50","length_20":"165.50","length_22":"175.50","length_24":"185.50","length_26":"195.50"}',
    Natural_Black: '{"length_18":"155.50","length_20":"165.50","length_22":"175.50","length_24":"185.50","length_26":"195.50"}',
    Darkest_Brown: '{"length_18":"155.50","length_20":"165.50","length_22":"175.50","length_24":"185.50","length_26":"195.50"}',
    Chocolate_Brown: '{"length_18":"155.50","length_20":"165.50","length_22":"175.50","length_24":"185.50","length_26":"195.50"}',
    Chestnut_Brown: '{"length_18":"155.50","length_20":"165.50","length_22":"175.50","length_24":"185.50","length_26":"195.50"}',
    Medium_Brown: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Ash_Blonde: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Light_Ash_Blonde: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Honey_Blonde: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Medium_Auburn: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Dark_Auburn: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Platinum_Blonde: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Bleach_Blonde: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Plum_Red: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Dark_Wine: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
    Smokey_Grey: '{"length_18":"163.50","length_20":"173.50","length_22":"183.50","length_24":"193.50","length_26":"203.50"}',
  }
  
];

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts;