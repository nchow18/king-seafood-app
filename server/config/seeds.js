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
    product_name: "Australian Beef Slice 牛肉片500g",
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
    product_name: "Chicken Burger Patty 汉堡肉片 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chicken Nuggets Tempura 鸡肉块 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crispy Popcorn Chicken 香酥鸡米花 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 22,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Meatballs 猪肉丸 400g",
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
    product_name: "Mince Meat 肉碎(S) 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat 肉碎 (L) 600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Stomach 猪肚 400g-600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Stomach (Cleaned) 猪肚 400g-600g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Pork Tendon 猪脚筋 500g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 11,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork 猪肉片 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork Belly 五花肉片 300g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Back Bacon 黑毛猪肉培根 500g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Duck 烟熏鸭胸肉 200-250g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Lobak 卤肉 (16pcs/pkt)",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cleaned Frog 本地野生田鸡 1kg",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Chashu 日式叉烧 150g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Streaky Bacon 烟熏五花肉 250g",
    product_picture: ["https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7.jpg"],
    product_category: "meat",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Baby Octopus 小章鱼 (6-15pcs/pkt)",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Flower Squid 花枝 1kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sotong (Cleaned) 苏东 2kg",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Spicy Squid 香辣大鱿鱼 400g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 17,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Squid Tentacle 鱿鱼须 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cleaned Sotong (10/20) 苏东 1kg ",
    product_picture: ["https://www.thespruceeats.com/thmb/ocpnKT2N7ia6_ItKY6S1PwKdsmc=/2223x1667/smart/filters:no_upscale()/calamari-2500-56a20fb93df78cf77271869d.jpg"],
    product_category: "squid",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can 罐头鲍鱼 425g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can Bundle 罐头鲍鱼 3x425g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar 鱼子酱 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 32,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar Bundle 鱼子酱 3x100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Hotate 调味扇贝唇 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Wakame 日式凉拌海带 450g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 12.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebi Tempura 香脆面包虾 (8pcs/pkt)",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebiko Orange 虾卵 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Ebiko Orange 虾卵 50g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fish Maw 鱼鳔 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang 佛跳墙 200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle 佛跳墙 3x200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 75,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle 佛跳墙 5x200g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 110,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Imitation Shark Fin 碗仔翅 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japan Tamagoyaki 日本厚烧玉子 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scallop Sliders 培根带子 260g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Urchin Platter 海胆 (L) 100g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seasoned Octopus Salad (Mala) 调味章鱼 (麻辣味) 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seasoned Sea Snail Salad (Wasabi) 调味海螺片 (芥末味) 300g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shark Fin (Real) 鲍翅 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 53,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Orange 鱼卵 50g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Orange 鱼卵 500g",
    product_picture: ["https://img-global.cpcdn.com/recipes/18a988ef834eca62/1200x630cq70/photo.jpg"],
    product_category: "special",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Slice 鲍鱼片 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japan King Crab Filament Stick 日本帝王蟹柳 250g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Nikudo Fish Paste 鱼滑 200g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber 海参1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 78,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber 海参 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Seafood Tofu 海鲜豆腐 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shrimp Paste 虾滑 150g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tobiko Shrimp Paste 鱼卵虾滑 150g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cheese Tofu 芝士豆腐 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 9,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Australian Beef Slice 牛肉片500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Meatballs 猪肉丸 400g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 11.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat 肉碎(S) 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mince Meat 肉碎 (L) 600g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork 猪肉片 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shabu Shabu Pork Belly 五花肉片 300g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Flower Squid 花枝 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fish Maw 鱼鳔 100g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 16,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop 日本扇贝 (S 100/150) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop 日本扇贝 (L 60/80) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops 加拿大带子 (XL 10/20) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops 加拿大带子 (L 20/30) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 32.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle加拿大带子 (L 20/30) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop 半壳大带子 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 26,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) 半壳带子 (粉壳)(S) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 17.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) 半壳带子 (粉壳) (M) 500g",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (XL 10/20) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 70,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (L 20/30) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 65,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (M 30/40) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (S 60/80) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Sea Cucumber(Big) 海参1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 83,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (81/100) 1kg",
    product_picture: ["https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/how-to-make-chinese-hot-pot-at-home_7075.jpg"],
    product_category: "hotpot",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (41/50) 1kg",
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
    product_name: "Cod Fillet (Miso) 鳕鱼片(味增) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Cod Fish 鳕鱼 (±250g/pc) RM128/kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 32,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet 大比目鱼片 (±150g/pc) by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 8.25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet 大比目鱼片 (1kg/pkt) ",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Fillet (Miso) 比目鱼片 (味增) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 25,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Halibut Steak 大比目鱼 (±250g/pc) by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Patin Slice 巴丁鱼片 1kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Red Snapper Fillet (Miso) 红鱼片 (味增) 454g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet 鲭鱼 500g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 17,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Fried) 鲭鱼片 (炸) 80g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Miso) 鲭鱼片 (味增) 1pc/pkt",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Salt Baked) 鲭鱼片 (盐烤) 1pc/pkt",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Mix & Match) 鲭鱼片 3pkts",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Fillet 三文鱼片 （±180g/pc) order by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Fillet (uncut) 三文鱼片 (大) (1.2-2kg/pc)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 53,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Head 三文鱼头 (700-800g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 12,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Salmon Steak 三文鱼排 (±200g/pc)order by pieces",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 38,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shime Saba (Vinegered Mackerel)腌制醋鲭鱼 (1pc/pkt)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 6,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Shishamo 多春鱼 (7-8pcs/pkt)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 12,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Siakap Fillet 石甲鱼 (400-450g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Salmon 烟熏三文鱼 100g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tilapia (Premium Quality) 顶级金凤鱼片 (200-250g)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tuna Fillet 鲔鱼 (±450g/pc)",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi 鳗鱼 200g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi 鳗鱼 310g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x310g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Teriyaki Saba 照烧鲭鱼 180g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 13,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Patin Slice Bundle 巴丁鱼片 3x1kg",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x200g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 48,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x380g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi 鳗鱼 380g",
    product_picture: ["https://gbc-cdn-public-media.azureedge.net/img32935.768x512.jpg"],
    product_category: "fish",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Abalone Can Bundle 罐头鲍鱼 3x425g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle加拿大带子 (L 20/30) 500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Caviar Bundle 鱼子酱 3x100g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle 佛跳墙 3x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 75,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Fo Tiao Qiang Bundle 佛跳墙 5x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 110,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Saba Fillet (Mix & Match) 鲭鱼片 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 15,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x310g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 88,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame Bundle日本毛豆 3x500g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Smoked Duck Bundle 烟熏鸭胸肉 3pkts",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 21,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Tilapia (Premium Quality) Bundle 顶级金凤鱼片 3pkts",
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
    product_name: "Patin Slice Bundle 巴丁鱼片 3x1kg",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x200g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 48,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Unagi Bundle 鳗鱼 3x380g",
    product_picture: ["https://more.ctv.ca/food/recipes/peking-duck/_jcr_content/root/responsivegrid_1778395324/responsivegrid_182136378/featuredmedia.coreimg.jpeg/1594684566092/peking-duck.jpeg"],
    product_category: "bundle promotion",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 3,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab 帝王蟹 400-600g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 50,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab 帝王蟹 600-800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 80,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab 帝王蟹 800-1000g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 100,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "King Crab 帝王蟹 1-1.2kg",
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
    product_name: "King Crab 帝王蟹 1.2-1.4kg",
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
    product_name: "King Crab 帝王蟹 1.4-1.6kg",
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
    product_name: "King Crab 帝王蟹 1.6-1.8kg",
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
    product_name: "King Crab 帝王蟹 1.8-2kg",
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
    product_name: "King Crab 帝王蟹 2kg Up",
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
    product_name: "Clam (Lala) 啦啦 500g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (Mix) 螃蟹肉 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 30,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab meat (Red) 螃蟹肉 (蟹钳肉) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (Red) 螃蟹肉 (蟹钳肉) 800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (White) 螃蟹肉 (白蟹肉) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crab Meat (White) 螃蟹肉 (白蟹肉) 800g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Crayfish Tailmeat with Shell 麻辣虾尾 300g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 27,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Garlic Crayfish Whole 蒜香小龙虾 700g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 37,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Lobster 龙虾 (700g up)",
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
    product_name: "Mala Seafood 莱克三鲜 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 22,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Mantis Prawn Meat Fresh 新鲜虾姑肉 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat 虾肉 (L) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat 虾肉 (M) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 38,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat 虾肉 (S) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Prawn Meat 虾肉 (XS) 1kg",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 28,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scampi U7 大头虾 (200-300g/nos)",
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
    product_name: "Soft Shell Crab 软壳蟹 (150-200g/nos)",
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
    product_name: "Spicy Clam with Shell 啦啦(辣味) 400g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 10,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Spicy Crayfish Whole 麻辣小龙虾700g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 37,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Premium Black Mussels 贻贝 907g",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "White Prawn 明虾 (L 20/30)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 45,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "White Prawn 明虾 (M 31/40)",
    product_picture: ["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Old-Bay-King-Crab-Legs_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735460995.jpeg"],
    product_category: "shellfish",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Thirteen Spices Crayfish Whole 十三香小龙虾 700g",
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
    product_name: "Canadian Scallops 加拿大带子 (XL 10/20) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 99,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops 加拿大带子 (L 20/30) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 32.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Canadian Scallops Bundle加拿大带子 (L 20/30) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 90,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop 半壳大带子 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 26,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) 半壳带子 (粉壳)(S) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 17.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Half Shell Scallop (Pink) 半壳带子 (粉壳) (M) 500g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 20,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (XL 10/20) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 70,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (L 20/30) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 65,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (M 30/40) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 60,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (S 60/80) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop 日本扇贝 (S 100/150) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 35,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Japanese Hotate Scallop 日本扇贝 (L 60/80) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Scallop Sliders 培根带子 260g",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (81/100) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 40,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Hokkaido Scallops 北海道带子 (41/50) 1kg",
    product_picture: ["https://img.apmcdn.org/48c4b50cdeced77708c3149bebf6487fd69e27c4/uncropped/313e0e-splendid-table-scallops-0.jpg"],
    product_category: "scallops",
    product_price: 55,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame日本毛豆 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame Bundle日本毛豆 3x500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 18,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Edamame (peeled) 去壳毛豆 500g",
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
    product_name: "Sweet Corn 甜玉米 500g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 8,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Chuka Wakame 日式凉拌海带 450g",
    product_picture: ["https://www.thespruceeats.com/thmb/NDgt93j7jyAH2j6KYhtERvv-C5o=/1869x1051/smart/filters:no_upscale()/1-mixa-edamame-56a9bf613df78cf772aa2ced.jpg"],
    product_category: "vegetables",
    product_price: 12.5,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Blueberries 冷冻蓝莓 500g",
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
    product_name: "Frozen Rasberries 冷冻山莓 500g",
    product_picture: ["https://www.superhealthykids.com/wp-content/uploads/2020/09/Frozen-Fruit-in-Bagssml.jpg"],
    product_category: "fruits",
    product_price: 14,
    product_status: true,
    product_sale_price: 0,
    product_bulk_quantity: 0,
    product_bulk_price: 0
    })
      await Product.create({
    product_name: "Frozen Strawberries 冷冻草莓 500g",
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