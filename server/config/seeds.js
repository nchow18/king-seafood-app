const db = require('./connection');
const { Order, Product, Promo, User } = require('../models');

db.once('open', async () => {
  console.log('opened');
  
  await User.deleteMany();
  await Product.deleteMany();

  await User.create(
    {
      first_name: 'Nathan',
      last_name: 'Chow',
      email: 'emailme@nathanchow.ca',
      admin: true,
      password: 'adminNathan123'
    }
  )

  await User.create(
    {
      first_name: 'Grace',
      last_name: 'Jong',
      email: 'grace.jong@gmail.com',
      admin: true,
      password: 'ilovekelvin'
    }
  )

  await User.create(
    {
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@gmail.com',
      admin: true,
      password: 'administrator123'
    }
  )

  await Promo.deleteMany();
  await Promo.create(
    {
      promoMsg1: '',
      promo1Start: '',
      promo1End: '',
      promoMsg2: '',
      promo2Start: '',
      promo2End: '',
      promoMsg3: '',
      promo3Start: '',
      promo3End: '',
      mainPromo: '',
      promoPicture1: '',
      promoPicture2: '',
      promoPicture3: '',
      discount: '',
      featuredProduct1: '',
      featuredProduct2: '',
      featuredProduct3: '',
    }
  )

  await Product.create(
    {
    product_name: 'Sirloin Steak',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_status: true,
    product_sale_price: 50,
    product_bulk_quantity: 3,
    product_bulk_price: 20    
    }
  )

  await Product.create(
    {
    product_name: 'Sirloin Steak',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_status: true,
    product_sale_price: 50,
    product_bulk_quantity: 3,
    product_bulk_price: 20    
    }
  )

  await Product.create(
    {
    product_name: 'Sirloin Steak',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_status: true,
    product_sale_price: 50,
    product_bulk_quantity: 0,
    product_bulk_price: 0    
    }
  )

  await Product.create(
    {
    product_name: 'Sirloin Steak',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_status: false,
    product_sale_price: 0,
    product_bulk_quantity:0,
    product_bulk_price: 0    
    }
  )

  await Product.create(
    {
    product_name: 'Sirloin Steak',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_status: true,
    product_sale_price: 2,
    product_bulk_quantity: 3,
    product_bulk_price: 20    
    }
  )

  console.log('order seeded');

  process.exit();

});