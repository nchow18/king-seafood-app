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
      mainPromo: 'FREE DELIVER WITH ORDERS OVER 150 AND FREE GIFT',
      promoPicture1: '',
      promoPicture2: '',
      promoPicture3: '',
      discount: 11,
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
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/16/0/entwine_filet-mignon-mushrooms_s3x4.jpg.rend.hgtvcom.616.462.suffix/1382540693653.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC-XYGBRFHrUd0Pbs-XYg_Cf8LsnGw9VmsA&usqp=CAU"],
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
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/16/0/entwine_filet-mignon-mushrooms_s3x4.jpg.rend.hgtvcom.616.462.suffix/1382540693653.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC-XYGBRFHrUd0Pbs-XYg_Cf8LsnGw9VmsA&usqp=CAU"],
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
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/16/0/entwine_filet-mignon-mushrooms_s3x4.jpg.rend.hgtvcom.616.462.suffix/1382540693653.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC-XYGBRFHrUd0Pbs-XYg_Cf8LsnGw9VmsA&usqp=CAU"],
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
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/16/0/entwine_filet-mignon-mushrooms_s3x4.jpg.rend.hgtvcom.616.462.suffix/1382540693653.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC-XYGBRFHrUd0Pbs-XYg_Cf8LsnGw9VmsA&usqp=CAU"],
    product_status: false,
    product_sale_price: 0,
    product_bulk_quantity:0,
    product_bulk_price: 0    
    }
  )

  await Product.create(
    {
    product_name: 'TASTY STEAK',
    product_category: 'Meat',
    product_price: 100,
    product_description: 'Imported from JAPAN',
    product_weight: '30oz',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/16/0/entwine_filet-mignon-mushrooms_s3x4.jpg.rend.hgtvcom.616.462.suffix/1382540693653.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC-XYGBRFHrUd0Pbs-XYg_Cf8LsnGw9VmsA&usqp=CAU"],
    product_status: true,
    product_sale_price: 2,
    product_bulk_quantity: 3,
    product_bulk_price: 20    
    }
  )



  await Product.create({
    product_name: "Australian Beef Slice ?????????500g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Breaded Chicken Chop 200g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chicken Burger Patty ???????????? 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chicken Nuggets Tempura ????????? 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crispy Popcorn Chicken ??????????????? 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 22,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Meatballs ????????? 400g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 11.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Miami Butcher Chicken Ham (Sliced) 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Miami Butcher Chicken Sausage Breakfast 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Miami Butcher Chicken Sausage Jumbo 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Miami Butcher Turkey Bacon (Sliced) 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat ??????(S) 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat ?????? (L) 600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Stomach ?????? 400g-600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Stomach (Cleaned) ?????? 400g-600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Tendon ????????? 500g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 11,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork ????????? 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork Belly ???????????? 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Back Bacon ?????????????????? 500g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Duck ??????????????? 200-250g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Lobak ?????? (16pcs/pkt)",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cleaned Frog ?????????????????? 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Chashu ???????????? 150g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Streaky Bacon ??????????????? 250g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Baby Octopus ????????? (6-15pcs/pkt)",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Idako (Seasoned Baby Octopus) ??????????????? 2kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Idako (Seasoned Baby Octopus) ??????????????? 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Flower Squid ?????? 1kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sotong (Cleaned) ?????? 2kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Spicy Squid ??????????????? 400g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 17,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Squid Tentacle ????????? 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cleaned Sotong (10/20) ?????? 1kg ",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can ???????????? 425g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can Bundle ???????????? 3x425g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar ????????? 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 32,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar Bundle ????????? 3x100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Hotate ??????????????? 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Wakame ?????????????????? 450g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 12.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebi Tempura ??????????????? (8pcs/pkt)",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebiko Orange ?????? 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebiko Orange ?????? 50g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fish Maw ?????? 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang ????????? 200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle ????????? 3x200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 75,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle ????????? 5x200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 110,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Imitation Shark Fin ????????? 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japan Tamagoyaki ?????????????????? 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scallop Sliders ???????????? 260g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Urchin Platter ?????? (L) 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seasoned Octopus Salad (Mala) ???????????? (?????????) 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seasoned Sea Snail Salad (Wasabi) ??????????????? (?????????) 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shark Fin (Real) ?????? 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 53,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Orange ?????? 50g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Orange ?????? 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Slice ????????? 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japan King Crab Filament Stick ?????????????????? 250g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Nikudo Fish Paste ?????? 200g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber ??????1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 78,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber ?????? 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seafood Tofu ???????????? 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shrimp Paste ?????? 150g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Shrimp Paste ???????????? 150g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cheese Tofu ???????????? 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Australian Beef Slice ?????????500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Meatballs ????????? 400g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 11.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat ??????(S) 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat ?????? (L) 600g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork ????????? 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork Belly ???????????? 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Flower Squid ?????? 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fish Maw ?????? 100g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop ???????????? (S 100/150) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop ???????????? (L 60/80) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops ??????????????? (XL 10/20) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle ??????????????? (XL 10/20) 3x500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops ??????????????? (L 20/30) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 32.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle??????????????? (L 20/30) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop ??????????????? 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 26,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) ???????????? (??????)(S) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 17.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) ???????????? (??????) (M) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (XL 10/20) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 70,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (L 20/30) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 65,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (M 30/40) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (S 60/80) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber(Big) ??????1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 83,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (81/100) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (41/50) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Breaded Cod Fish 300g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 12,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cod Fillet (Miso) ?????????(??????) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cod Fish ?????? (??250g/pc) RM128/kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 32,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet ??????????????? (??150g/pc) by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 8.25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet ??????????????? (1kg/pkt) ",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet (Miso) ???????????? (??????) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Steak ???????????? (??250g/pc) by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Patin Slice ???????????? 1kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Red Snapper Fillet (Miso) ????????? (??????) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet ?????? 500g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 17,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Fried) ????????? (???) 80g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Miso) ????????? (??????) 1pc/pkt",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Salt Baked) ????????? (??????) 1pc/pkt",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Mix & Match) ????????? 3pkts",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Fillet ???????????? ?????180g/pc) order by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Fillet (uncut) ???????????? (???) (1.2-2kg/pc)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 53,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Head ???????????? (700-800g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 12,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Steak ???????????? (??200g/pc)order by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 38,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shime Saba (Vinegered Mackerel)??????????????? (1pc/pkt)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shishamo ????????? (7-8pcs/pkt)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 12,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Siakap Fillet ????????? (400-450g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Salmon ??????????????? 100g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tilapia (Premium Quality) ?????????????????? (200-250g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tuna Fillet ?????? (??450g/pc)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi ?????? 200g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi ?????? 310g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x310g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Teriyaki Saba ???????????? 180g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Patin Slice Bundle ???????????? 3x1kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x200g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 48,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x380g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi ?????? 380g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can Bundle ???????????? 3x425g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle ??????????????? (XL 10/20) 3x500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle??????????????? (L 20/30) 500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar Bundle ????????? 3x100g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle ????????? 3x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 75,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle ????????? 5x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 110,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Mix & Match) ????????? 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x310g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame Bundle???????????? 3x500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Duck Bundle ??????????????? 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 21,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tilapia (Premium Quality) Bundle ?????????????????? 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 21,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Berries Bundle 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 36,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Patin Slice Bundle ???????????? 3x1kg",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 48,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle ?????? 3x380g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 400-600g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 50,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 600-800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 80,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 800-1000g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 1-1.2kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 1.2-1.4kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 1.4-1.6kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 1.6-1.8kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 1.8-2kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab ????????? 2kg Up",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 108,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Clam (Lala) ?????? 500g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (Mix) ????????? 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab meat (Red) ????????? (?????????) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (Red) ????????? (?????????) 800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (White) ????????? (?????????) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (White) ????????? (?????????) 800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crayfish Tailmeat with Shell ???????????? 300g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Garlic Crayfish Whole ??????????????? 700g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 37,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Lobster ?????? (700g up)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 100,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Live Mud Crab (2nos/kg, 3nos/kg, 4nos/kg, Egg Crab)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_weight: "Market Price",
    product_price: 0,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mala Seafood ???????????? 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 22,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mantis Prawn Meat Fresh ??????????????? 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat ?????? (L) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat ?????? (M) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 38,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat ?????? (S) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat ?????? (XS) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scampi U7 ????????? (200-300g/nos)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 70,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Soft Shell Crab ????????? (150-200g/nos)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 45,
    product_weight: "1kg",
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Spicy Clam with Shell ??????(??????) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Spicy Crayfish Whole ???????????????700g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 37,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Premium Black Mussels ?????? 907g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "White Prawn ?????? (L 20/30)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "White Prawn ?????? (M 31/40)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Thirteen Spices Crayfish Whole ?????????????????? 700g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 37,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Breaded Scallops 180g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops ??????????????? (XL 10/20) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle ??????????????? (XL 10/20) 3x500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops ??????????????? (L 20/30) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 32.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle??????????????? (L 20/30) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop ??????????????? 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 26,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) ???????????? (??????)(S) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 17.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) ???????????? (??????) (M) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (XL 10/20) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 70,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (L 20/30) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 65,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (M 30/40) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (S 60/80) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop ???????????? (S 100/150) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop ???????????? (L 60/80) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scallop Sliders ???????????? 260g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (81/100) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops ??????????????? (41/50) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame???????????? 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame Bundle???????????? 3x500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame (peeled) ???????????? 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "French Fries (Crinkle Cut) 1kg",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "French Fries (Shoestring) 1kg",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sweet Corn ????????? 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Wakame ?????????????????? 450g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 12.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Blueberries ???????????? 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Mixed Berries 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Mixed Fruits 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Rasberries ???????????? 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Strawberries ???????????? 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Berries Bundle 3x500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 36,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
    

  console.log('order seeded');

  process.exit();

});