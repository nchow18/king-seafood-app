const db = require('./connection');
const { Order, Product, Promo, User } = require('../models');

db.once('open', async () => {
  console.log('opened');
  
  await User.deleteMany();
  await Order.deleteMany();
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
      promoMsg1: 'EAT HEALTHY',
      promo1Start: '',
      promo1End: '',
      promoMsg2: 'FRESHLY FROZEN',
      promo2Start: '',
      promo2End: '',
      promoMsg3: 'HIGH QUALITY SEAFOOD',
      promo3Start: '',
      promo3End: '',
      mainPromo: 'FREE DELIVERY WITH ORDERS OVER RM100***',
      promoPicture1: 'https://scontent.fykz1-2.fna.fbcdn.net/v/t1.6435-9/197445732_348894963297467_8143547024888840424_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=973b4a&_nc_ohc=bGttqPiKq1oAX-1IsCn&_nc_ht=scontent.fykz1-2.fna&oh=59f80555ad1d65c1262cc947651eb7fb&oe=60E74121',
      promoPicture2: '',
      promoPicture3: '',
      discount: '6.66',
      featuredProduct1: '',
      featuredProduct2: '',
      featuredProduct3: '',
      contact_us_1: 'Joey 011-11264018',
      contact_us_2: 'Kelvin 016-4849744',
      address: '205, Jalan Perak, 11600 Jelutong, Penang, Malaysia',
      home_message: 'FRESHLY FROZEN SEAFOOD',
      main_banner: 'https://wallpaperaccess.com/full/1491748.jpg'
    }
  )

  await Product.create({
    "inventory_id": 100,
    "product_name": "Breaded Cod Fish 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191239262_351071069746523_2360270957051020535_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFSFobgCE1milKB2GXqjUgLBsLUrPjNdWAGwtSs-M11YGu3LOvsDhnGHiPf0dssXNb-9APV5aJWirSN7xEEcjq7&_nc_ohc=yT8OmQvqtUkAX8wwAea&_nc_ht=scontent.fpen1-1.fna&oh=5fffb325761ef5a74acd6893a1bd3a17&oe=60E80C25",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/136055824_254077209445910_2350272215745903236_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFt0vMuU-L3XC4cTw2rLeSvhOpFV9x6B8aE6kVX3HoHxhGDNN3gkTKuzU-QO1Tef_8nSIFL4GsPKyQRNjZSh_Sd&_nc_ohc=O8VdMDbOAtMAX8dmuk3&_nc_ht=scontent.fpen1-1.fna&oh=8b0938d52f17dc09a336c8d2646f470d&oe=60E70A59"
    ],
    "product_category": "fish",
    "product_price": "12.00",
    "product_description1": "5pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 101,
    "product_name": "Cod Fillet (Miso) 鳕鱼片(味增) 454g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191092664_351071116413185_6137915817143085349_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHzj6NoR98SO1fcV_t6l2oRDj03uXm6yRYOPTe5ebrJFgBgs3WGkPwn04tHX47MIU89f7gOjn03uNcsPfpFtOcc&_nc_ohc=64l67kDPJGYAX_0h7kb&_nc_ht=scontent.fpen1-1.fna&oh=7320c965828cf9c0600f3ba1bfe6a8f7&oe=60E64A23",
       "https://drive.google.com/uc?id=195BDpI6NiyVXyClAN4_WpsG3pwx5Hrs0"
    ],
    "product_category": "fish",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 102,
    "product_name": "Halibut Fillet (Miso) 比目鱼片 (味增) 454g",
    "product_picture": [
       "https://drive.google.com/uc?id=1xQgaxGS49q46fqOVvl8MwBjUAFpEAyUE",
       "https://drive.google.com/uc?id=1NSDTiBoAsAjvLy1D1q8_CALbTLO3L_Fm"
    ],
    "product_category": "fish",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 103,
    "product_name": "Red Snapper Fillet (Miso) 红鱼片 (味增) 454g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191951467_351071453079818_6032703078978057481_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeF5qVM_AoPdqf0bORTF2tlPtDOsyN6XF7e0M6zI3pcXt9iT52nTl2IA3Fv7u8iSllO7Bh-sy7dqiHSHSvzfyFRO&_nc_ohc=JAkRy6xkoIgAX_AxpW7&_nc_ht=scontent.fpen1-1.fna&oh=f18f10c7dfb422727f3e4b768d3d15fa&oe=60E58DF5",
       "https://drive.google.com/uc?id=1MVBV--lIfNIdVeUoiIGq7KO_DxijUYlY"
    ],
    "product_category": "fish",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 104,
    "product_name": "Smoked Salmon 烟熏三文鱼 100g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194085530_351072066413090_1043911565070594150_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEuqidv9V2KUewK5FX0Loa5YhZeWdLpWgViFl5Z0ulaBS6EQrlp70565BJbd6bch4iFEcrCiEJrq9LythHL1WEX&_nc_ohc=WOuNpe8XeN4AX9VwhLj&_nc_ht=scontent.fpen1-1.fna&oh=108d6b4decf568876d85d16276ffe662&oe=60E7FB61",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119461531_198974051622893_2318113262188195424_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeE3ANJApSWrfodB9bXUpzYisQcyYA1znl6xBzJgDXOeXvO-hVYi6-XtctiV8xoj7cyFAXtBqFQfbg7bqOYK8Ddf&_nc_ohc=j5Iv67YP_QkAX93Zt3E&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=1e12c5b187824c9e74a5638430b53163&oe=60C78808"
    ],
    "product_category": "fish",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 105,
    "product_name": "Salmon Steak 三文鱼排 ±250g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196149354_351071813079782_9010462509506879711_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeF4BXvf9HJke_QhM9FAtj9WrVQ6F3dXnsWtVDoXd1eexd4DiKCM8kpUREblezyWPQUQeAWoluIXLzbtmNDsfKhC&_nc_ohc=VM9SI42Ne6QAX84G3yM&_nc_ht=scontent.fpen1-1.fna&oh=a7a0e618de2e59697f8717a4a41f0321&oe=60E70F53",
       ""
    ],
    "product_category": "fish",
    "product_price": "9.50",
    "product_description1": "order by pieces",
    "product_description2": "RM38/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 106,
    "product_name": "Salmon Steak 三文鱼排 1kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196149354_351071813079782_9010462509506879711_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeF4BXvf9HJke_QhM9FAtj9WrVQ6F3dXnsWtVDoXd1eexd4DiKCM8kpUREblezyWPQUQeAWoluIXLzbtmNDsfKhC&_nc_ohc=VM9SI42Ne6QAX84G3yM&_nc_ht=scontent.fpen1-1.fna&oh=a7a0e618de2e59697f8717a4a41f0321&oe=60E70F53",
       ""
    ],
    "product_category": "fish",
    "product_price": "38.00",
    "product_description1": "order by kg (4-5pcs)",
    "product_description2": "RM38/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 107,
    "product_name": "Salmon Fillet 三文鱼片 ±180g/pc *",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186535822_351071586413138_6315946759269770153_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGw-bv4jSK3-COeYOy8MQUSCbJA0n10ZHEJskDSfXRkcVDlvnaKMRbTlKWfjouW2O9K5loePSP8D-pJxrlED_t-&_nc_ohc=F2RCJjAA7GwAX8gxoA2&_nc_ht=scontent.fpen1-1.fna&oh=d2fc336c0f1ff87765d28a18f2661c48&oe=60E8DA54",
       ""
    ],
    "product_category": "fish",
    "product_price": "9.90",
    "product_description1": "order by pieces",
    "product_description2": "RM55/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 108,
    "product_name": "Salmon Fillet 三文鱼片 1kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186535822_351071586413138_6315946759269770153_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGw-bv4jSK3-COeYOy8MQUSCbJA0n10ZHEJskDSfXRkcVDlvnaKMRbTlKWfjouW2O9K5loePSP8D-pJxrlED_t-&_nc_ohc=F2RCJjAA7GwAX8gxoA2&_nc_ht=scontent.fpen1-1.fna&oh=d2fc336c0f1ff87765d28a18f2661c48&oe=60E8DA54",
       ""
    ],
    "product_category": "fish",
    "product_price": "55.00",
    "product_description1": "order by kg (5-7pcs)",
    "product_description2": "RM55/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 55,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 109,
    "product_name": "Salmon Fillet (uncut) 三文鱼片 (大) ±2kg/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195559216_351071666413130_4857907233372508911_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHzmFKf019aDmEjhQLLwizYkCmgMcjcRMuQKaAxyNxEy8oeYBmdBe0ZXvHZtDmOMiBzyvx8tNE_wcFKDi1uBUc3&_nc_ohc=VlMRe9rTeEIAX95xViI&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=40a9df4d94fd87d0b496fa4189f37ef8&oe=60E67F7A",
       ""
    ],
    "product_category": "fish",
    "product_price": "106.00",
    "product_description1": "order by pieces",
    "product_description2": "RM53/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 110,
    "product_name": "Salmon Head (half) 三文鱼头 (半粒) ±400g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194375921_351071723079791_467540250078399334_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFLbcnTf2_mnAw43e-2qeN4xD55ihoX7zzEPnmKGhfvPCCvhNRC9pzR1fjtmu4UbdKjUSAq8Dqbu2vPAZtml9Jc&_nc_ohc=NloXY_QbPxsAX-156tD&_nc_oc=AQlonotbsyr0vODgmRqCfKfCfLm_5K-7waj7cay0XRYoOqYWc919_GXu6AKsdEValYg&_nc_ht=scontent.fpen1-1.fna&oh=249c170153c0cb847a93caf4662fc633&oe=60E9228B",
       "https://drive.google.com/uc?id=1R5OvGLFEHGwzUk8CDokTbmm3lXulCc8p"
    ],
    "product_category": "fish",
    "product_price": "4.80",
    "product_description1": "order by pieces",
    "product_description2": "RM12/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 111,
    "product_name": "Halibut Fillet 大比目鱼片 ±150g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195428531_351071249746505_7525456860742762962_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGBX0V8W7sWM805lxSZprYZT1msz1aK2hZPWazPVoraFmV--GyHlViOlNz1gLEBAzEIywwCFNrYKfxKZDjA7KQ-&_nc_ohc=doMb9vK_H_gAX_y2YJ5&_nc_ht=scontent.fpen1-1.fna&oh=8d6226b575a08fd3ebb62417db9cf4f4&oe=60E65508",
       ""
    ],
    "product_category": "fish",
    "product_price": "8.25",
    "product_description1": "order by pieces",
    "product_description2": "RM55/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 112,
    "product_name": "Halibut Fillet 大比目鱼片 1kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195428531_351071249746505_7525456860742762962_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGBX0V8W7sWM805lxSZprYZT1msz1aK2hZPWazPVoraFmV--GyHlViOlNz1gLEBAzEIywwCFNrYKfxKZDjA7KQ-&_nc_ohc=doMb9vK_H_gAX_y2YJ5&_nc_ht=scontent.fpen1-1.fna&oh=8d6226b575a08fd3ebb62417db9cf4f4&oe=60E65508",
       ""
    ],
    "product_category": "fish",
    "product_price": "55.00",
    "product_description1": "order by kg (6-8pcs)",
    "product_description2": "RM55/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 113,
    "product_name": "Halibut Steak 大比目鱼排 ±200g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194676438_351071306413166_1401439354566473118_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH-E7d_oeYyoFqaGjtIUo3Jd9nl0is4Rpt32eXSKzhGm35wmo8hh0LH9ZGXzA64nwru5Upbu11MOBgvv3K8u5wk&_nc_ohc=i15Nyrm41xMAX8_PNjZ&_nc_ht=scontent.fpen1-1.fna&oh=8f67de2af1d2b21576204dc93dea912f&oe=60E75EBB",
       ""
    ],
    "product_category": "fish",
    "product_price": "11.00",
    "product_description1": "order by pieces",
    "product_description2": "RM55/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 114,
    "product_name": "Halibut Steak 大比目鱼排 454g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194676438_351071306413166_1401439354566473118_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH-E7d_oeYyoFqaGjtIUo3Jd9nl0is4Rpt32eXSKzhGm35wmo8hh0LH9ZGXzA64nwru5Upbu11MOBgvv3K8u5wk&_nc_ohc=i15Nyrm41xMAX8_PNjZ&_nc_ht=scontent.fpen1-1.fna&oh=8f67de2af1d2b21576204dc93dea912f&oe=60E75EBB",
       ""
    ],
    "product_category": "fish",
    "product_price": "20.00",
    "product_description1": "3pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 115,
    "product_name": "Tuna Fillet 鲔鱼 ±500g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196716236_351072209746409_1494951169419413604_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEwURWuNsqkbUHK18vTKbnJ15aEijGvC0rXloSKMa8LSvoqz4uKjiZEi28ybe3Hs0v7sV_Xr9QLrkCokSlUOpYP&_nc_ohc=T8FqEEy2CSIAX_Tn37Y&_nc_ht=scontent.fpen1-1.fna&oh=9ccd5b489fb4747260995b2490864106&oe=60E7ED66",
       ""
    ],
    "product_category": "fish",
    "product_price": "30.00",
    "product_description1": "order by pieces",
    "product_description2": "RM60/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 116,
    "product_name": "Cod Fish 鳕鱼 ±200g/pc*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197838565_351071149746515_2830150501129178607_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGz0Fx8tlaEQ3ieD0XyZPr8hpiz3BYv9zCGmLPcFi_3MDk_y_Ch227WjA2qENwa9Eef-6BvIM6u7h7-hE-esM5g&_nc_ohc=XCNhK9n6UlAAX_PBGah&_nc_ht=scontent.fpen1-1.fna&oh=4fab61d3dad646c3f50509eef9ea659c&oe=60E8BE0C",
       ""
    ],
    "product_category": "fish",
    "product_price": "25.60",
    "product_description1": "order by pieces",
    "product_description2": "RM128/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 117,
    "product_name": "Cod Fish 鳕鱼 1kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197838565_351071149746515_2830150501129178607_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGz0Fx8tlaEQ3ieD0XyZPr8hpiz3BYv9zCGmLPcFi_3MDk_y_Ch227WjA2qENwa9Eef-6BvIM6u7h7-hE-esM5g&_nc_ohc=XCNhK9n6UlAAX_PBGah&_nc_ht=scontent.fpen1-1.fna&oh=4fab61d3dad646c3f50509eef9ea659c&oe=60E8BE0C",
       ""
    ],
    "product_category": "fish",
    "product_price": "148.00",
    "product_description1": "order by kg (4-6pcs)",
    "product_description2": "RM128/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 128,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 118,
    "product_name": "Patin Slice 巴丁鱼片 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193234127_351071356413161_205101714968686139_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG0Jngo6GEKdlgc-kCT_PrY23ObRdMtfKPbc5tF0y18o6qukc7lsFeVKHwmAnMlP2OyGxAeiGQnFGauZbFu6ngB&_nc_ohc=72aYMpQLJvUAX-Fw91-&_nc_ht=scontent.fpen1-1.fna&oh=be57c245302751757be8b9076024d23e&oe=60E765EE",
       ""
    ],
    "product_category": "fish",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 9,
    
 })
  await Product.create({
    "inventory_id": 119,
    "product_name": "Saba Fillet 鲭鱼 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194297772_351071516413145_3063372136075442652_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHEIN9cjaEdY5I_ek1c9oC-PbTfdUbh2CM9tN91RuHYIx9kxQJmxH1Z66P7XppbD-NtProy3bKM0WUgBH0QcFY4&_nc_ohc=yGUcm07dQ_wAX80L1-K&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=8646c7a0fdb69fba8ef6824fdb2e3466&oe=60E58C6D",
       ""
    ],
    "product_category": "fish",
    "product_price": "20.00",
    "product_description1": "3-5pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 17,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 120,
    "product_name": "Shime Saba (Vinegered Mackerel)  腌制醋鲭鱼 ",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/189633983_351071869746443_7484423645471420098_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH2aeAxaD05h6ARSIhf-i10Qd3Fua_p2yNB3cW5r-nbIw2Ahbb1_rCdh2JHfUamWCq-qJyJmRq-MideQOj5MD7H&_nc_ohc=7z1O28Rze8YAX8HaoGl&_nc_ht=scontent.fpen1-1.fna&oh=1b50d74a4ad036f401b8390488b76358&oe=60E80AAD",
       ""
    ],
    "product_category": "fish",
    "product_price": "6.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 121,
    "product_name": "Teriyaki Saba 照烧鲭鱼 180g ",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193582963_351072106413086_625451659956148774_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH_VhLroj_uLBonqacyF-7HTI-Xo7qGc9BMj5ejuoZz0D52U7oiRM5kytkBoFQt1HPqmcraRy9havD_MwLV_q8r&_nc_ohc=MqMZlMJCHj4AX_Hatul&_nc_ht=scontent.fpen1-1.fna&oh=369afc1f9d4341999eae3e7df508ec56&oe=60E77273",
       ""
    ],
    "product_category": "fish",
    "product_price": "13.00",
    "product_description1": "2pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 122,
    "product_name": "Shishamo 多春鱼",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191318649_351071916413105_969898558283327007_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHNMYLwQMfFN4A5TvDR0To6S22xwv5iGtdLbbHC_mIa1x71qlkVOSMvUfomWJ5FqaYD0hkAOnc1_NJuDd1GwmNt&_nc_ohc=CF_-jmSHLqUAX890ak1&_nc_oc=AQm98n4CRFaZs7a3VG490Pn0FZqT6CvV3WzT59izGJe59hFB9EYwkAYEik7mSE5rPKE&_nc_ht=scontent.fpen1-1.fna&oh=c9263c87cc78cd405ef05c3e7d3b4243&oe=60E59B8E",
       ""
    ],
    "product_category": "fish",
    "product_price": "12.00",
    "product_description1": "7-8pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 123,
    "product_name": "Siakap Fillet 石甲鱼 400-500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191773129_351071993079764_5920321344301208595_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFqcELUc2oljTuU-cRDOsFRtZ-vly3BjaS1n6-XLcGNpLU7KXqm9dCQCfysyoswQlDcXPOocQNS1okiMMOpzOJ5&_nc_ohc=e36SDrzxF64AX_QFNFe&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=5615fd413b997a8a76d7cba11a052b66&oe=60E70596",
       ""
    ],
    "product_category": "fish",
    "product_price": "15.00",
    "product_description1": "cut into 4-5pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 124,
    "product_name": "Tilapia (Premium Quality) 顶级金凤鱼片 200-250g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195203150_351072149746415_5560002413493645791_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHGMyLwb2oWNNak6KGHr5Jan2--yumQnWGfb77K6ZCdYf0ghcsxxGsPxgQ6kjJ9G82op5GbH4hmU6vfJ6mknmZ_&_nc_ohc=Y0QOzG-Rl1UAX-pLNB9&_nc_ht=scontent.fpen1-1.fna&oh=e839d0894c4a8609c03b748c413fe35c&oe=60E73E99",
       ""
    ],
    "product_category": "fish",
    "product_price": "8.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 7,
    
 })
  await Product.create({
    "inventory_id": 125,
    "product_name": "Unagi 鳗鱼 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193589841_351786513008312_7943200438729324050_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFgU9BXk5AXnPpBxP1NbYdErXbcKvMpVn6tdtwq8ylWfseBUlaHq6lxkjF0jG_qA16bsjX2yk_gCIIGyvkGvTP9&_nc_ohc=o7NaTCGSXR8AX9p9i59&_nc_ht=scontent.fpen1-1.fna&oh=d85a440304e2c02d1735afa515e2c04d&oe=60C7D73D",
       ""
    ],
    "product_category": "fish",
    "product_price": "20.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 18,
    "product_bulk_quantity": 3,
    "product_bulk_price": 16,
    
 })
  await Product.create({
    "inventory_id": 126,
    "product_name": "Unagi 鳗鱼 310g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190456652_351072373079726_4646794498255856324_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEGagI6z2qANGtf-RtAEdGhTi3ZEwhsfG9OLdkTCGx8b4D3Q6spURneCQt9YXDZRGat15poECsu_TOk0lHLhHNg&_nc_ohc=XhcdrfdfJbMAX-fk2l0&_nc_ht=scontent.fpen1-1.fna&oh=52ee61b394f3f1a009702028b9d9ebc7&oe=60E749E1",
       ""
    ],
    "product_category": "fish",
    "product_price": "30.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 28,
    
 })
  await Product.create({
    "inventory_id": 127,
    "product_name": "Unagi 鳗鱼 380g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190913266_351072489746381_2576253266111199976_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeF707dr8QH8UydE0s9J0zQ1tPPWoKwwsO6089agrDCw7qVfbrNirYaWLJEpMYP5h6uvfpN5g3TUBVTnuIifuIpu&_nc_ohc=gkGBGhmCFIgAX9bJC8c&_nc_ht=scontent.fpen1-1.fna&oh=0ab7df4c8815c09e06f27051a0d2d14f&oe=60E5DA43",
       ""
    ],
    "product_category": "fish",
    "product_price": "35.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 33.33,
    
 })
  await Product.create({
    "inventory_id": 200,
    "product_name": "Breaded Scallops 180g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198194935_350464083140555_6601519836267550888_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFWATKzZXdphqbGqOdPJsQWemWIY6nXsXN6ZYhjqdexcytCuPikyVGFcrGb-CP2f9uDLhoYx-GeUC8ShVBSqPUP&_nc_ohc=AAfmLGxi_qAAX_1oIc_&_nc_ht=scontent.fpen1-1.fna&oh=cbe97ddfcfa7b031d98f69a65c2bebda&oe=60C8499C",
       ""
    ],
    "product_category": "scallops",
    "product_price": "8.00",
    "product_description1": "12pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 201,
    "product_name": "Scallop Sliders 培根带子 260g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192554414_350464483140515_5039305984047353777_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEx83NMocq389TdoWwwxeOQcG7c_ewip25wbtz97CKnbtFz7E2ok-VgJeiCyf4zSEeM3GQudGKBc_gQ9K4BV6D5&_nc_ohc=DUtUMd72kvAAX_ISlHT&_nc_ht=scontent.fpen1-1.fna&oh=5cc7b7bc70aeac8b132d1a0be6b817c0&oe=60E56517",
       ""
    ],
    "product_category": "scallops",
    "product_price": "30.00",
    "product_description1": "8pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 27,
    
 })
  await Product.create({
    "inventory_id": 202,
    "product_name": "Canadian Scallops XL 10/20 加拿大带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120660906_204903877696577_3256118392630256897_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGIPrHyLF5cN1_x6uOYaTx0Oy4CGXm3Roo7LgIZebdGinmXT7HySSOhUxU-WcQDm9M3J4lVG0VHrFcJEPmr1eeV&_nc_ohc=bQSofW1gEcIAX8Hl9Wu&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=0e23862dd3ab2e5f04b3a62063c93004&oe=60E8805D",
       ""
    ],
    "product_category": "scallops",
    "product_price": "35.00",
    "product_description1": "9-10pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 33,
    
 })
  await Product.create({
    "inventory_id": 203,
    "product_name": "Canadian Scallops L 20/30 加拿大带子  500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195371603_350453339808296_4960360066392309673_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFeBDWcWBeYcA1hxcZhP9qdYeSSpiuPPnFh5JKmK48-cSQ6hwtM1GceANnDUVrGSsEz-Qv58-bcFAk_VRZCOKVf&_nc_ohc=GY0MhRGQU68AX9Aq4HE&_nc_ht=scontent.fpen1-1.fna&oh=5482506ebc51f5c3e9752bd04d1556e9&oe=60E4356D",
       ""
    ],
    "product_category": "scallops",
    "product_price": "32.50",
    "product_description1": "13-16pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 30,
    
 })
  await Product.create({
    "inventory_id": 204,
    "product_name": "Hokkaido Scallops XL 10/20 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197445733_350458653141098_6098772650827994650_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEkxuSQCBU3j_R5Q19w8opGehM9MxUjsgV6Ez0zFSOyBalr8g9FxQFwKjNBuNReYr-G5rZek8elPZJiaUTDfrXU&_nc_ohc=sQSFvHc1Fi8AX-rt3kU&_nc_ht=scontent.fpen1-1.fna&oh=91fc771226bec56515bc4862829642a6&oe=60E596C2",
       ""
    ],
    "product_category": "scallops",
    "product_price": "70.00",
    "product_description1": "18-20pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 205,
    "product_name": "Hokkaido Scallops L 20/30 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195764995_350456129808017_4925622981200279088_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEft2-c2PnDkxiKVg6TqUsxy5pJqZtVOVrLmkmpm1U5Wn8k6bfYeA0OPTPP3KOqYPQII5Eo8id5i9TPSiIS6JjI&_nc_ohc=HWuA6lufWloAX9f3hQj&_nc_ht=scontent.fpen1-1.fna&oh=7a3959365d7f60437bc016548338b321&oe=60E5DBCA",
       ""
    ],
    "product_category": "scallops",
    "product_price": "65.00",
    "product_description1": "20-30pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 206,
    "product_name": "Hokkaido Scallops M 30/40 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195265546_350456673141296_238482158305807610_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGlsNU9C8THtNCLqluzQ6FZLQuUZu2M4lYtC5Rm7YziVkDbrtCteJ0P1xaAAv-MqNxtYibTtPgX9-L10xqvcYan&_nc_ohc=xIYjqbxq0eMAX-59vrY&_nc_ht=scontent.fpen1-1.fna&oh=0e1c1df6312d940193b1015bbd00d798&oe=60E56D2B",
       ""
    ],
    "product_category": "scallops",
    "product_price": "60.00",
    "product_description1": "30-40pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 207,
    "product_name": "Hokkaido Scallops 40/50 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/188809475_350458239807806_4632231994231110621_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGbcYAOvrkgsPOYKPzeusJOhyZi97GN8pKHJmL3sY3ykhX0hpWD5U38LjCo5ezNKFIwzJ1gcScu0816LX49qetu&_nc_ohc=qsN3CB2relAAX8jkVLk&_nc_oc=AQmEWs5-rEMZ3De91HZarYPXFHUoBwn3XYmYiqb6xOC8VhLBWD2R7R0FQ1SvOraFnDA&_nc_ht=scontent.fpen1-1.fna&oh=6764460b79aa0e46d2c85ccd1a11617a&oe=60E743C2",
       ""
    ],
    "product_category": "scallops",
    "product_price": "55.00",
    "product_description1": "40-50pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 208,
    "product_name": "Hokkaido Scallops 60/80 北海道带子 1kg",
    "product_picture": [
       "https://drive.google.com/uc?id=1yskHg_9_OQ92N_OupwuKdeAqHm7FQb8p",
       ""
    ],
    "product_category": "scallops",
    "product_price": "45.00",
    "product_description1": "60-80pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 209,
    "product_name": "Hokkaido Scallops 80/100 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/188427978_350458446474452_4718371310959613678_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEqRnjSd_-4zzJIEbWPEl6zLzHYCXF-zlIvMdgJcX7OUvk42hVeSCcTsjEKnyohv8sSTmu8Cr6cfgtU3aUnFUt3&_nc_ohc=mjnjsYc-5hMAX-v3X6h&_nc_ht=scontent.fpen1-1.fna&oh=0fcb56a5b4196e2f4a831e3393fe524a&oe=60E7EFC1",
       ""
    ],
    "product_category": "scallops",
    "product_price": "40.00",
    "product_description1": "80-100pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 210,
    "product_name": "Half Shell Scallop 半壳大带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193767445_350455173141446_7424575698173561968_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGe6LxoZ3TRXUTIhpKVsXb_YAHlGpC-0C9gAeUakL7QL8qGtoW2xddxCkBoSbn7mpCT5mGmJprl0ZtdUiLSFfNe&_nc_ohc=-RaDkIj5dF0AX_9tqDz&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=fadc5822c5c54b4d210754ff87e3a799&oe=60E40FE1",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/81894913_113837676803198_1304887789820575744_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGeBAim4G7Q47oXufJrOmBEslTmGsYCReqyVOYaxgJF6gb514wRjjdV1RTCNQ2-O5UlB8bkP_ITOFAX8fJRH-8r&_nc_ohc=6wG0hbVcgVgAX9n78-u&_nc_ht=scontent.fpen1-1.fna&oh=192ff82d2e322b4a18bdf2ee50bea7e3&oe=60C6E6AE"
    ],
    "product_category": "scallops",
    "product_price": "26.00",
    "product_description1": "8-10pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 211,
    "product_name": "Half Shell Scallop (Pink) M 半壳带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197706543_350455489808081_2040378463962824191_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEvn94AsWPs7hjVoEQzk-lfJmBx9l2HeTImYHH2XYd5MigNa3Ab0yKIGI7Kv8VeAOf_O0gnqxVoqt19G261hElt&_nc_ohc=W3AvFt7hfS0AX8v61hn&_nc_ht=scontent.fpen1-1.fna&oh=fde0e85a8ea5fabdb084aea9ec030d7e&oe=60E688D4",
       ""
    ],
    "product_category": "scallops",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 212,
    "product_name": "Half Shell Scallop (Pink) S 半壳带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197706543_350455489808081_2040378463962824191_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEvn94AsWPs7hjVoEQzk-lfJmBx9l2HeTImYHH2XYd5MigNa3Ab0yKIGI7Kv8VeAOf_O0gnqxVoqt19G261hElt&_nc_ohc=W3AvFt7hfS0AX8v61hn&_nc_ht=scontent.fpen1-1.fna&oh=fde0e85a8ea5fabdb084aea9ec030d7e&oe=60E688D4",
       ""
    ],
    "product_category": "scallops",
    "product_price": "17.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 213,
    "product_name": "Japanese Hotate Scallop L 60/80 日本扇贝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192790990_350457766474520_3686901305558168356_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGNe77kpappAfGlLHtTbO-IcyhhwEovQYlzKGHASi9BidbZegGdua7SLnrlGQNu8TT2LcmvCc8g6dESc1WdSRVv&_nc_ohc=OeMiCy6JuyMAX9qZ_nU&_nc_ht=scontent.fpen1-1.fna&oh=1f296e592be889216f39cd8a544df073&oe=60E75296",
       ""
    ],
    "product_category": "scallops",
    "product_price": "40.00",
    "product_description1": "60-80pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 214,
    "product_name": "Japanese Hotate Scallop S 100/150 日本扇贝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190418832_350458006474496_6300654089960382982_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGs6bUjvUzQIhRxcAM6fRfUpSNE1vhE6ZKlI0TW-ETpkg_YQEvtzSJarZxrVKkUvBzB9NzvTp-usFyzhzdWxY2B&_nc_ohc=YPGjSgESgvkAX9TfzQJ&_nc_ht=scontent.fpen1-1.fna&oh=2687e47a0613f378c0d73fb8a2d66e9f&oe=60E7CC28",
       ""
    ],
    "product_category": "scallops",
    "product_price": "35.00",
    "product_description1": "100-150pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 300,
    "product_name": "White Prawn 明虾 L 20/30",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/189702061_351050736415223_4748689353427547860_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEXqdJkxz0ch34dKSv7c3hGQISrCHUmL-BAhKsIdSYv4JWy342nnITDbOAoXKBAnieKfzhQN-fNFlMXOn5RU__d&_nc_ohc=TrWSxAiPN9YAX9StlnG&_nc_ht=scontent.fpen1-1.fna&oh=eef72ee4bd4843d4af26bdec6e39837a&oe=60C7BB1D",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "45.00",
    "product_description1": "18-20pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 301,
    "product_name": "White Prawn 明虾 M 30/40",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/188933543_351050829748547_4260365347816082316_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE_iNSB9b0p4kzxNb-BUF_b9cQkfmJY_Br1xCR-Ylj8GsqudVLcDcjNHtwKNYSBBxMw3wY8KM241LBxZTbKzGBu&_nc_ohc=wPkbt1LTM0wAX_tgOVk&_nc_oc=AQlED7uJbwo1gWwY44TiNRm-bcnN5c9Np2HxXVn9sgse8UhewJk0UqQ4Ttlys-2cgaU&_nc_ht=scontent.fpen1-1.fna&oh=2dd402595279af5fa0c8375a17dac093&oe=60C77D0E",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "40.00",
    "product_description1": "23-25pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 302,
    "product_name": "Prawn Meat 虾肉 L",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197389773_351050136415283_616308098684425959_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHH0O5qYjLUcfY3m8xguqN3rzEeIK4IAG2vMR4grggAbX_P_g4WVT2zqeryKqRYUCTdsgYNqT4TReZXNSQLoqOL&_nc_ohc=sWQpwEIJwA8AX-TEKNJ&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=e1af9b84a9f0d1ab0b941d09cac36d54&oe=60C7F8F0",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "40.00",
    "product_description1": "±45pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 303,
    "product_name": "Prawn Meat 虾肉 M",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193299559_351050189748611_6235443951314655788_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHVkudzem1BkYf_DdWQJW_hEnNU49dSC9wSc1Tj11IL3IaZuImRT6IcU3AXEhF36I5j7cNIi4i09_FqfvfxtRmT&_nc_ohc=g2wl-c16o2MAX-TY35Z&_nc_ht=scontent.fpen1-1.fna&oh=b4b6e98d6af5ffaa8cb971f1592b602a&oe=60C761B7",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "38.00",
    "product_description1": "±50pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 304,
    "product_name": "Prawn Meat 虾肉 S",
    "product_picture": [
       "https://drive.google.com/uc?id=105tBNyJra_SCaj0ZwKcoTyLnzl7k2_hs",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "35.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 305,
    "product_name": "Prawn Meat 虾肉 XS",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198243036_351050316415265_924187865597179377_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG-AbHj1qqYUbwj2mLXd5CWUHl9NSW1NzZQeX01JbU3Noy8L3fCXX1oQ1fF89cQ-vYJWK2MzgXtus5lRe0OfCmK&_nc_ohc=cMJeH0x8cCgAX-T-x8K&_nc_ht=scontent.fpen1-1.fna&oh=517937719b0d8fae4eefe48e9b8d1da4&oe=60C7B761",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 306,
    "product_name": "Ebi Tempura 香脆面包虾 (8pcs/pkt)",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194343232_351062769747353_9181383216930929334_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG_FYpaT7n8lgLw-54l1z5ZC9auB-59Z7IL1q4H7n1nslal_c_pbcOn3ZMchr1viFMk8V2m3MfYNDLC7r_2kmEZ&_nc_ohc=WWIgKvU5A2cAX8AbqEX&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=fe6a0b0b645e9918cd6d1389c75460bc&oe=60E88E39",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 307,
    "product_name": "Ebi Tempura 香脆面包虾 (10pcs/pkt)",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193785783_351794729674157_3353298709610261731_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFiCPPT_CE8grN8F9J2vZ-hjv0qp56JW3OO_Sqnnolbc1V776rjb-naJUwlkUiTDDL314v3ozovqFw8yqS35M-n&_nc_ohc=HNXukw1_N-EAX8nB3Jj&_nc_ht=scontent.fpen1-1.fna&oh=6225d1bc7b2e072b8e6a0e6547dd26ec&oe=60C7DE3D",
       "https://drive.google.com/uc?id=16yX2Q6dAaxRvR2AA6EcA1hPd1ipiWCkY"
    ],
    "product_category": "shellfish",
    "product_price": "12.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 308,
    "product_name": "Mantis Prawn Meat Fresh 新鲜虾姑肉 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195998197_351049903081973_1207215168204712531_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGuCti0G_SzDbT8d1qZdTq7bdVHsOlxDeFt1Uew6XEN4UkM94OR8ttieqIv_xawSab918WMDeZFuI5n5-ckXTFG&_nc_ohc=QrWViVJuDAMAX9ZEkGH&_nc_ht=scontent.fpen1-1.fna&oh=702343837ee25ea2d80394c9352dc438&oe=60C8824F",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/170264570_313927346794229_3765568599538940700_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFS7C72PihO33IHgIiv4Y_O5ru4NQPG11Hmu7g1A8bXUcfQD-PS3KL_kdoxB1_SQCztjErcvNFbUbJnW0UvnDp-&_nc_ohc=99va46CPthMAX9Sly-b&_nc_ht=scontent.fpen1-1.fna&oh=3f289e2587dda5d78addb8657fe5ea74&oe=60C8750D"
    ],
    "product_category": "shellfish",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 309,
    "product_name": "Scampi U7 大头虾 ±250g/nos*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120433131_203832137803751_6658063535697639128_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFx-ls9dOb3nukuNonXhToy0T2LPrnvKIXRPYs-ue8ohSplGJQNqROiY743FCeuY-M3Uf-Aw9BQVSaKs7_6c4Nn&_nc_ohc=Act787pjN84AX8jfOn7&_nc_ht=scontent.fpen1-1.fna&oh=6f8af1f85b248b2f3e638047af53e72f&oe=60C82E88",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "17.50",
    "product_description1": "order by nos",
    "product_description2": "RM70/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 310,
    "product_name": "Lobster 龙虾 700g up/nos*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/81191720_113888930131406_3733216020706361344_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFADds29vYWA6QwWSnNjv6aNCNfwh6L6uM0I1_CHovq4-kwzgCvq68494eENdLCzmXKYBgWxKxS0EvzF9pa6dAr&_nc_ohc=7I_ZRbrq80oAX8En4_o&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=326113c35ccc3240a7b1e8048b591c25&oe=60C766AE",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/161277211_299239551596342_4621665881409446269_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF4BWZ8MBRj7tlESBKuPouH6bf5gB8qRVTpt_mAHypFVMN5G4yY9chbR-dPfdis9M_s79-3DRHvlnJvG7mQYZQm&_nc_ohc=xYyVpnZXqAAAX8iWv0n&_nc_ht=scontent.fpen1-1.fna&oh=765d7a6302d96ebe72d5078db9605fac&oe=60C7120E"
    ],
    "product_category": "shellfish",
    "product_price": "70.00",
    "product_description1": "order by nos",
    "product_description2": "RM100/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 311,
    "product_name": "Lobster 龙虾 400-500g/nos*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196338716_351049653081998_1760047051579177569_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHO-sY5SkCHQlVP7uKi50oTZU9NFWz6IF5lT00VbPogXhaphFUK_XnJe0pByFJ6DGCNnaa8YPTDG06A8ycbzLey&_nc_ohc=kOTIoN7wM40AX8Wjujz&_nc_ht=scontent.fpen1-1.fna&oh=5d95658b665ab83c321ffb000342269e&oe=60C72397",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/161277211_299239551596342_4621665881409446269_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF4BWZ8MBRj7tlESBKuPouH6bf5gB8qRVTpt_mAHypFVMN5G4yY9chbR-dPfdis9M_s79-3DRHvlnJvG7mQYZQm&_nc_ohc=xYyVpnZXqAAAX8iWv0n&_nc_ht=scontent.fpen1-1.fna&oh=765d7a6302d96ebe72d5078db9605fac&oe=60C7120E"
    ],
    "product_category": "shellfish",
    "product_price": "45.00",
    "product_description1": "order by nos",
    "product_description2": "RM90/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 312,
    "product_name": "Mala Crayfish Tailmeat  麻辣虾尾 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193035722_351048133082150_7155778806710905810_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGJ5Tn_VirIPoPNbIne_-9nmhL8lWAghyGaEvyVYCCHIVcL3toN4rPlCTTbYLeOWFZyFJvvEiYkwHglnCYtqIAU&_nc_ohc=h9uzK0Wb1BsAX9uBT0F&_nc_ht=scontent.fpen1-1.fna&oh=ca880d2c848e710071f5bdb0be8a8082&oe=60C897A8",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 27,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 313,
    "product_name": "Garlic Crayfish Whole 蒜香小龙虾 700g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194482015_351048239748806_1345830826984735258_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGWIhEAAnxwTBU5IOMzVpUWcx7bVjLiLppzHttWMuIumqF9J8TDIvnynm0MTZQO9aR0oWLoCQtfZOsx-bHjk_od&_nc_ohc=ZyYKMjiyZWEAX-WkLWR&_nc_ht=scontent.fpen1-1.fna&oh=2828a0075e8d1ed89f7993ade4bd844b&oe=60C7C541",
       "https://drive.google.com/uc?id=1IvIyawveJgsY3hU_kNP0U3eDAdUwlSYf"
    ],
    "product_category": "shellfish",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 37,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 314,
    "product_name": "Spicy Crayfish Whole 麻辣小龙虾700g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196045624_351048329748797_8372264683518911262_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHtqrZU9IEONCiIaAWuobLwtVqqQ6sRyLO1WqpDqxHIs9ABLF3smTI4i4IGkrS7AxtJ41xuBRv223PpGaOBHkfO&_nc_ohc=tmW2J3ad9LIAX8eGzep&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=be20fbfaf4df63caa1a3bd6c756ba766&oe=60C84252",
       "https://drive.google.com/uc?id=16V7aamSX7HBzAWNxY8B5eyggWyobLhn5"
    ],
    "product_category": "shellfish",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 37,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 315,
    "product_name": "Thirteen Spices Crayfish Whole 十三香小龙虾 700g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190833475_351048419748788_4443965830330633257_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEyMwiuxlUnsjg-kVTHEP4RpuQRpxyLpfum5BGnHIul-w2u5UcpOEZjG2vlY9ExJeIdRd_zkh3gQqaJtHxGXzel&_nc_ohc=MRqWCb7JRtwAX9uAmz1&_nc_ht=scontent.fpen1-1.fna&oh=80f1b422e99fecbf7015e1851caaff5d&oe=60C80BA1",
       "https://drive.google.com/uc?id=1ZA88XAcHIdRNQtAkbHBkwQutJIK6lS75"
    ],
    "product_category": "shellfish",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 37,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 316,
    "product_name": "Clam (Lala) 啦啦 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194198701_351047309748899_5478759911609152347_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEfZZ-mw4GUD9grfucAozzRFv9UthQuiBoW_1S2FC6IGkpLpMfNv62i4CVKZlU94SLP1fB9l9yLK8pJwCgjEFBi&_nc_ohc=r8MH4rEpODkAX_LeKP9&_nc_ht=scontent.fpen1-1.fna&oh=99169cc7852dd40eee1c759af50a786b&oe=60C8BC0D",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 317,
    "product_name": "Spicy Clam with Shell 啦啦(辣味) 400g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195405058_351050636415233_5009099980278309945_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHbdPIGN8K2lSiyFcKcQYmA16j5LD_cy8HXqPksP9zLwWPy0qtrbDxw0doS6HusCkOSkw5eEVlSDffXEOPCw7JL&_nc_ohc=zrTAZMWo1-IAX_RXqES&_nc_ht=scontent.fpen1-1.fna&oh=4940a251ce382db37e6fe9ddba2e90fa&oe=60C7B715",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 318,
    "product_name": "Premium Black Mussels 贻贝 907g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196688005_351050386415258_682812508731454713_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHpAUSLRtVH_DJvbDakP1whKY3lZOq_O-UpjeVk6r875dZW6sQNuJz1WQpCvo7HVj7JZHqhmPDp_9xzkjWtQyLf&_nc_ohc=2YZ9f0XpJo0AX9YwiJg&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=4a95bc6a94c26d31d8fdf3edc2e632d1&oe=60C725F0",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 319,
    "product_name": "Crab Meat (Mix) 螃蟹肉 400g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/96406161_158604998993132_4260309323692900352_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHLcKxbifS0LzswxaGadaoCGeaKAiRkn-4Z5ooCJGSf7mddHLFCE4DTCvVNrW7LOrT6W1eWk-DyyHAyEwvsgZSQ&_nc_ohc=_Ywy5qs8sTQAX-EeImU&_nc_ht=scontent.fpen1-1.fna&oh=f83f0497677b7ae1c129d01acfbcf932&oe=60C7C980",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186503120_341355590718071_6047213742119221935_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHrtSrFlwwUiYdilJDxtd6iIaJ43VUEyJAhonjdVQTIkGOZgzDCX1PG800QETM5HPlTmS_VKc_kbDZ4lrkZZ-N7&_nc_ohc=8AYXHV0LHTEAX-osFk0&_nc_ht=scontent.fpen1-1.fna&oh=0f4b45fd706e27aa3e6223297e62718c&oe=60C87DB3"
    ],
    "product_category": "shellfish",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 320,
    "product_name": "Crab meat (Red) 螃蟹肉 (蟹钳肉) 400g",
    "product_picture": [
       "https://drive.google.com/uc?id=1rgdu4RT5sNRI0GwuKXsMAaPAHMU-XmqF",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186503120_341355590718071_6047213742119221935_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHrtSrFlwwUiYdilJDxtd6iIaJ43VUEyJAhonjdVQTIkGOZgzDCX1PG800QETM5HPlTmS_VKc_kbDZ4lrkZZ-N7&_nc_ohc=8AYXHV0LHTEAX-osFk0&_nc_ht=scontent.fpen1-1.fna&oh=0f4b45fd706e27aa3e6223297e62718c&oe=60C87DB3"
    ],
    "product_category": "shellfish",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 321,
    "product_name": "Crab Meat (White) 螃蟹肉 (白蟹肉) 400g",
    "product_picture": [
       "https://drive.google.com/uc?id=10jhr5VplJkXlHV6xYxDrtSRwO-AJRVFx",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186503120_341355590718071_6047213742119221935_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHrtSrFlwwUiYdilJDxtd6iIaJ43VUEyJAhonjdVQTIkGOZgzDCX1PG800QETM5HPlTmS_VKc_kbDZ4lrkZZ-N7&_nc_ohc=8AYXHV0LHTEAX-osFk0&_nc_ht=scontent.fpen1-1.fna&oh=0f4b45fd706e27aa3e6223297e62718c&oe=60C87DB3"
    ],
    "product_category": "shellfish",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 322,
    "product_name": "Crab Meat (Red) 螃蟹肉 (蟹钳肉) 800g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195748858_351047463082217_1848096168830950785_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGRZZ8v5K5X5Z7ncELMnus69Dlns8ql4fL0OWezyqXh8htwJpImR33_kP1boBvaquWfnXspHtxLCZxwbwBVTSKn&_nc_ohc=MBc3hSpUCEIAX-tZxW6&_nc_ht=scontent.fpen1-1.fna&oh=a98b5b1faf15c860bb2703b342c57a34&oe=60C7419E",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186503120_341355590718071_6047213742119221935_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHrtSrFlwwUiYdilJDxtd6iIaJ43VUEyJAhonjdVQTIkGOZgzDCX1PG800QETM5HPlTmS_VKc_kbDZ4lrkZZ-N7&_nc_ohc=8AYXHV0LHTEAX-osFk0&_nc_ht=scontent.fpen1-1.fna&oh=0f4b45fd706e27aa3e6223297e62718c&oe=60C87DB3"
    ],
    "product_category": "shellfish",
    "product_price": "55.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 323,
    "product_name": "Crab Meat (White) 螃蟹肉 (白蟹肉) 800g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194902060_351048043082159_6984520128707925386_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEPcdBTBcVIlNLfzpBGqKG3YrjzWHkFa-ZiuPNYeQVr5n1SxV_CQCuIrRqGUFFxNGnLNWANiOrNltkIi04Kf9tq&_nc_ohc=1uvG11qVzBAAX_LDenm&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=86414f117d8842d132b1826cd22aeb94&oe=60C80A3C",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186503120_341355590718071_6047213742119221935_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHrtSrFlwwUiYdilJDxtd6iIaJ43VUEyJAhonjdVQTIkGOZgzDCX1PG800QETM5HPlTmS_VKc_kbDZ4lrkZZ-N7&_nc_ohc=8AYXHV0LHTEAX-osFk0&_nc_ht=scontent.fpen1-1.fna&oh=0f4b45fd706e27aa3e6223297e62718c&oe=60C87DB3"
    ],
    "product_category": "shellfish",
    "product_price": "55.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 324,
    "product_name": "Soft Shell Crab 软壳蟹 ±160g/nos*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/189540271_351050593081904_4814261877050970508_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEHGtRcazF6eC_LJiVxr0VON9wnR7Lslvc33CdHsuyW94oHL9nXI-8JNroDDIRH7Bx16TVeLNZNbQsmeBtvcL7P&_nc_ohc=VMnRJOWQfdYAX-Cn4F5&_nc_oc=AQlUPI9FM9cRpb7Va6UnF-wPyr6H02Ff-ZgFgIWfOJFWgGY3qEu_DuGvL-sP94fmLZE&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=2e306affaeed0308fa73eb01c1889e67&oe=60C8C873",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119062062_198070081713290_5582315573854301418_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEqkyndt6UsS6QkhzPxXiHWxvBsQ4yUbiLG8GxDjJRuImIs0MdqLz8Hd6FQIANdRYae6UtF7OrBTW1sXjhFjg-Z&_nc_ohc=x2f7NtGWousAX-FPAon&_nc_ht=scontent.fpen1-1.fna&oh=6375ba59a8d20e22cf1783a2e5a5b3d3&oe=60C6FF75"
    ],
    "product_category": "shellfish",
    "product_price": "7.20",
    "product_description1": "order by nos",
    "product_description2": "RM45/kg",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 325,
    "product_name": "Live Mud Crab Male 2nos/kg 肉螃蟹 (500g up)*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/156522904_288657069321257_2853381292597643627_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeE1PUUG-rOj1zl8btuTNXQ0VLwZxKYibElUvBnEpiJsSerA9U-jw5ggSnK7Ate66btQgbLfQG3KxcDBwUWh98xO&_nc_ohc=GsnwF4rBufsAX8Nx0jf&_nc_ht=scontent.fpen1-1.fna&oh=48af21b41e681367b1d60ca1b9e18049&oe=60C75F98",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/155049856_288657062654591_5118551452573280979_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeH0zUXIvcUvh3goiOBroLb2eEFYcRGTfKp4QVhxEZN8qsf7TLQwlzdwd_q_ZSbr2DxVb7g333oJ3EUs-2ITHKpD&_nc_ohc=7vJ4zcfKjMoAX93uEJ2&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=eb89af4dffadd3d13932b67f35a3a1cd&oe=60C89603"
    ],
    "product_category": "shellfish",
    "product_price": "Market Price",
    "product_description1": "order by nos",
    "product_description2": "",
    "product_description3": "*Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 326,
    "product_name": "Live Mud Crab Male 3nos/kg 肉螃蟹 (300-400g)*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/136052760_253495566170741_4012027911920299433_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGLnaIdmRo5EybGq6tT5ggUyVVM4ndNSbHJVUzid01JsVQ_ZVnIA7O655XWtZdJC7ZFSzwuhiH3SHcfX6bD2LrD&_nc_ohc=I0CJu5lPSWgAX-zaTQv&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=07c0b2ef4ad01cbfe42a1ec8cbd42140&oe=60C8B091",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/155049856_288657062654591_5118551452573280979_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeH0zUXIvcUvh3goiOBroLb2eEFYcRGTfKp4QVhxEZN8qsf7TLQwlzdwd_q_ZSbr2DxVb7g333oJ3EUs-2ITHKpD&_nc_ohc=7vJ4zcfKjMoAX93uEJ2&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=eb89af4dffadd3d13932b67f35a3a1cd&oe=60C89603"
    ],
    "product_category": "shellfish",
    "product_price": "Market Price",
    "product_description1": "order by nos",
    "product_description2": "",
    "product_description3": "*Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 327,
    "product_name": "Live Mud Crab Male 4nos/kg 肉螃蟹 (250-300g)*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/135811002_253495569504074_2484422228872476993_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGvhaQJe_8UGyFa_BLAgcJWmPlRh8L8namY-VGHwvydqQ22_0gcy4h2dkKMiTQDU5Mby3qRdlrVYo00MQ9Ml8ar&_nc_ohc=hSzApoblzwsAX8p9GiL&_nc_ht=scontent.fpen1-1.fna&oh=108ef8558b90b1847ded003c53cbb275&oe=60C89A9F",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/155049856_288657062654591_5118551452573280979_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeH0zUXIvcUvh3goiOBroLb2eEFYcRGTfKp4QVhxEZN8qsf7TLQwlzdwd_q_ZSbr2DxVb7g333oJ3EUs-2ITHKpD&_nc_ohc=7vJ4zcfKjMoAX93uEJ2&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=eb89af4dffadd3d13932b67f35a3a1cd&oe=60C89603"
    ],
    "product_category": "shellfish",
    "product_price": "Market Price",
    "product_description1": "order by nos",
    "product_description2": "",
    "product_description3": "*Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 328,
    "product_name": "Live Mud Crab Female (Egg) Crab 蛋螃蟹 (300g up)*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/123938639_214650613388570_1932945596076917334_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG2o2pcSKGIUEVY7aGrPg60WCtoQynvEMRYK2hDKe8QxNnNYCwruQzJ27alO8RxHhK5urUixd9TRUSXvx59b0xV&_nc_ohc=Us-FPMbDnccAX9Orkhp&_nc_ht=scontent.fpen1-1.fna&oh=f85b0f9f266203ae93591168ddfce6cb&oe=60C8A00C",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/124254070_214650616721903_1854633378771645505_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGr8kzoUV-TLKJa5h8WtVywwfyukv61km7B_K6S_rWSbrmNwWVLIjiFaLJKr_fUXoLFEPAZoO7zp1buCLLspbVX&_nc_ohc=G0GinpghnW4AX8o3mwI&_nc_ht=scontent.fpen1-1.fna&oh=929cfb06580c050244ad57d6029c1e08&oe=60C7D231"
    ],
    "product_category": "shellfish",
    "product_price": "Market Price",
    "product_description1": "order by nos",
    "product_description2": "",
    "product_description3": "*Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 329,
    "product_name": "King Crab 帝王蟹 400-600g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/92461507_149645393222426_5765892676033445888_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGnDlkxMOwShO3QSmNags8rLzvsrR4EsfovO-ytHgSx-rqd4UWZ5waVuIS-0maHUw5y85J4CWZ93kPRi7CUfCNg&_nc_ohc=g_T97KWWyzEAX8ujGGF&_nc_ht=scontent.fpen1-1.fna&oh=74aab0e874664a2d8a48ab87bab553d3&oe=60C7669B",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "50.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 330,
    "product_name": "King Crab 帝王蟹 600-800g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/92461507_149645393222426_5765892676033445888_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGnDlkxMOwShO3QSmNags8rLzvsrR4EsfovO-ytHgSx-rqd4UWZ5waVuIS-0maHUw5y85J4CWZ93kPRi7CUfCNg&_nc_ohc=g_T97KWWyzEAX8ujGGF&_nc_ht=scontent.fpen1-1.fna&oh=74aab0e874664a2d8a48ab87bab553d3&oe=60C7669B",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "80.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 331,
    "product_name": "King Crab 帝王蟹 800-1000g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191330318_351048733082090_825173601682198201_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHshzXiu1PQGIWfgvydys1ZcK8Vyfg1hmhwrxXJ-DWGaOebkOScMmYnXGztA_L_XdDuoDSK1-R7SmL2q273Zn5l&_nc_ohc=CbRgx4_mpu4AX8Ed8Im&_nc_ht=scontent.fpen1-1.fna&oh=28045905bb060aaf40e335c1959e7806&oe=60E87394",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "100.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 332,
    "product_name": "King Crab 帝王蟹 1-1.2kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191330318_351048733082090_825173601682198201_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHshzXiu1PQGIWfgvydys1ZcK8Vyfg1hmhwrxXJ-DWGaOebkOScMmYnXGztA_L_XdDuoDSK1-R7SmL2q273Zn5l&_nc_ohc=CbRgx4_mpu4AX8Ed8Im&_nc_ht=scontent.fpen1-1.fna&oh=28045905bb060aaf40e335c1959e7806&oe=60E87394",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "129.60",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 333,
    "product_name": "King Crab 帝王蟹 1.2-1.4kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194338106_351048826415414_2065483713606912214_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEYwyT6HhopmIdegmy-JCPjJc_S6YysomElz9LpjKyiYThVBofYwZ02pObh1FM1YaWbJlZKFphq9LmMA2tahZg4&_nc_ohc=2Y1SbcUa5pgAX-d1mPf&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=d587c2f13e9d01a960b430b095f21db7&oe=60E6E640",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "151.20",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 334,
    "product_name": "King Crab 帝王蟹 1.4-1.6kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194338106_351048826415414_2065483713606912214_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEYwyT6HhopmIdegmy-JCPjJc_S6YysomElz9LpjKyiYThVBofYwZ02pObh1FM1YaWbJlZKFphq9LmMA2tahZg4&_nc_ohc=2Y1SbcUa5pgAX-d1mPf&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=d587c2f13e9d01a960b430b095f21db7&oe=60E6E640",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "172.80",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 335,
    "product_name": "King Crab 帝王蟹 1.6-1.8kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/92471381_149645479889084_3369617189077254144_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGx1p8VzdjChMZt7dD2EPBr1Os4-nmt6s3U6zj6ea3qzTxJPxpgj_HfLj-pebXhNtAUG3rAMcHBwNLnsHLdW3Wu&_nc_ohc=_ZnMFiJiJ4EAX-f2RJ-&_nc_ht=scontent.fpen1-1.fna&oh=e3b1d111ce01c84bb1c834d06e914b19&oe=60C74515",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "194.40",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 336,
    "product_name": "King Crab 帝王蟹 1.8-2kg*",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/92471381_149645479889084_3369617189077254144_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGx1p8VzdjChMZt7dD2EPBr1Os4-nmt6s3U6zj6ea3qzTxJPxpgj_HfLj-pebXhNtAUG3rAMcHBwNLnsHLdW3Wu&_nc_ohc=_ZnMFiJiJ4EAX-f2RJ-&_nc_ht=scontent.fpen1-1.fna&oh=e3b1d111ce01c84bb1c834d06e914b19&oe=60C74515",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "216.00",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 337,
    "product_name": "King Crab 帝王蟹 2kg up*",
    "product_picture": [
       "https://drive.google.com/uc?id=1SlhUSa3d8TIObrx_6Hcu4qZyFMBgde85",
       ""
    ],
    "product_category": "shellfish",
    "product_price": "237.60",
    "product_description1": "RM108/kg",
    "product_description2": "",
    "product_description3": "*Estimated price only *Final price will be based on actual weight",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 400,
    "product_name": "Baby Octopus 小章鱼",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191071032_351044713082492_2214447414035592443_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGoorf2JJ6_REsWGc42MNBPXQBPwV12bK1dAE_BXXZsrSaSv_xxL9pByWEsAEKvIokJFATsjjaXO3La7iEVbUn7&_nc_ohc=4laUv3Je6T4AX8_rzDs&_nc_ht=scontent.fpen1-1.fna&oh=99dfcf778e7d573f65668dc05d3a61da&oe=60E8FE67",
       ""
    ],
    "product_category": "squid",
    "product_price": "10.00",
    "product_description1": "6-15pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 401,
    "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193288210_351044973082466_2742977793444595132_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeELALhXCwfanj7XbVv9kj9E0lc_lEvYrz7SVz-US9ivPh62Ecbyv0HEr4FshYV0uY893dUF66teimpM7iFhAYma&_nc_ohc=DUFtA6UTdMQAX_2yl1X&_nc_ht=scontent.fpen1-1.fna&oh=e04fe7c7cacfe45b56cb71b1341a6ba6&oe=60E649A6",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119006302_197088691811429_5647674406685685000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFzelnxuu32JrnEiX8eHQ3sSkLJSUaN_SNKQslJRo39I8TjTqsdsvbDlE0WO2wbz0JpiOKXpYn0fncuILqy3K6I&_nc_ohc=fxNJq7F2aycAX9RYkZC&_nc_ht=scontent.fpen1-1.fna&oh=b903de7d1a11920342ef5d8154e8407d&oe=60C89195"
    ],
    "product_category": "squid",
    "product_price": "88.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 402,
    "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190913266_351045046415792_1843845532929291005_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE-nFydRgFy3CEGG67Rh5vFqcBIhZZvHsOpwEiFlm8ew-bSAhJi95bwXs2hLRKMLT346kaFUsOxb3teaN9VYZZf&_nc_ohc=Oe0tt8crD2AAX-Pa8FQ&_nc_oc=AQkft4i7Zr97QWhU79cXO_BA4ztrnflH8FJ9CvuT_Kj_bMzcfKqJ9LtsTiya_y0k5dw&_nc_ht=scontent.fpen1-1.fna&oh=0ae9a5ac098b7c510944a579a954c5fa&oe=60E572CF",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119006302_197088691811429_5647674406685685000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFzelnxuu32JrnEiX8eHQ3sSkLJSUaN_SNKQslJRo39I8TjTqsdsvbDlE0WO2wbz0JpiOKXpYn0fncuILqy3K6I&_nc_ohc=fxNJq7F2aycAX9RYkZC&_nc_ht=scontent.fpen1-1.fna&oh=b903de7d1a11920342ef5d8154e8407d&oe=60C89195"
    ],
    "product_category": "squid",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 403,
    "product_name": "Cleaned Sotong 10/20 苏东 2kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191675468_351045126415784_6365697524244798745_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGCC4YCD6u8C_WuVmtPubKES7POjmWhooBLs86OZaGigDGC2UI24gyrEQxv8KrArYn0MrK21bhEjPDrVqsDQKkA&_nc_ohc=GmW-a2QmCRUAX_Wo_oo&_nc_ht=scontent.fpen1-1.fna&oh=29bfd2e532b5ff2f6336a6c0f31b592c&oe=60E68A54",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190600027_346181963568767_5156358076636901807_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHcUuaQD7CIMHyBiMJr9M4CbF8xmW-ZcglsXzGZb5lyCbX8NxYlT_wUW7B-WRa-2rIUam-7pGaqFZuurs2Ij5G9&_nc_ohc=HOVjvtNHuRQAX8InwWk&_nc_ht=scontent.fpen1-1.fna&oh=f45bbcb80c42c39de2d481ff6edec131&oe=60C75029"
    ],
    "product_category": "squid",
    "product_price": "35.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 404,
    "product_name": "Cleaned Sotong 10/20 苏东 1kg ",
    "product_picture": [
       "https://drive.google.com/uc?id=1__zxvtPqz_QQFty2W5qMjmnqHjs3ATXH",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190600027_346181963568767_5156358076636901807_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHcUuaQD7CIMHyBiMJr9M4CbF8xmW-ZcglsXzGZb5lyCbX8NxYlT_wUW7B-WRa-2rIUam-7pGaqFZuurs2Ij5G9&_nc_ohc=HOVjvtNHuRQAX8InwWk&_nc_ht=scontent.fpen1-1.fna&oh=f45bbcb80c42c39de2d481ff6edec131&oe=60C75029"
    ],
    "product_category": "squid",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 405,
    "product_name": "Flower Squid 花枝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198531214_351045183082445_2159582179355360589_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE6TKVOig5-twB6hwVDP8o1M9u55NncDc8z27nk2dwNzzs62dBT90LEr9P_d3RgdL3fma_kD7Rytnd36PYX9Xuv&_nc_ohc=wVOJNgzDqdcAX8WVBhV&_nc_ht=scontent.fpen1-1.fna&oh=dc525c97253593af8e1ebd773f0f9a6d&oe=60E5B667",
       ""
    ],
    "product_category": "squid",
    "product_price": "18.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 406,
    "product_name": "Spicy Squid 香辣大鱿鱼 400g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191271299_351045253082438_4500946301445449903_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHXuMYDDDlxjimJp_mJsr5Rs0aXfjRLH3mzRpd-NEsfec1eUfBTriXvT8nLtXQRUQfxXFEgMygDCLr0fu8T3Vxj&_nc_ohc=pfGlp6fNtesAX8iEtDf&_nc_ht=scontent.fpen1-1.fna&oh=c3fba78a3524a64341c86f5216d4ca6e&oe=60E5ED58",
       ""
    ],
    "product_category": "squid",
    "product_price": "17.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 407,
    "product_name": "Squid Tentacle 鱿鱼须 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193737752_351045319749098_8223598860306276246_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFHD3XjpXNjXUPW7ZjFzgaDSfUGOCd7IHJJ9QY4J3sgcqeOiLLz_cTH0_2HQoKmMtSMJYesndwiol4RL-T_3Brz&_nc_ohc=yJ6m8EvUbxkAX9oxuaA&_nc_ht=scontent.fpen1-1.fna&oh=00657ae4b95bcda377bda3a949c53db9&oe=60E7FDCF",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/127892234_226599608860337_6595986626743818393_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHMV0svH3lr1E9VwkGkR4aCJqpbMHuvypwmqlswe6_KnPXdsIJkZ3Q7RiW5WHZSpE9wISiRRc8yDAPsoJoywm7a&_nc_ohc=kajc__gl8H8AX_TVZRb&_nc_ht=scontent.fpen1-1.fna&oh=bebbb74f720a9c6aed9cea20d804d2de&oe=60C835A3"
    ],
    "product_category": "squid",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 500,
    "product_name": "Australian Beef Slice 牛肉片 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190658937_350111449842485_8926236924913473181_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHjxtp14E2YLSsxfsZK2GEI--EgkzxYpg374SCTPFimDRnKtzw9vb7zVICi82ICtvZprvZW4CL_cqV0E6KFr7Pr&_nc_ohc=pUiIX2KjfAQAX9igJCV&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=7b8714d60ba6df7231aea5ce1f9a7d4a&oe=60E61E24",
       ""
    ],
    "product_category": "meat",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 501,
    "product_name": "Breaded Chicken Chop 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191544889_350113103175653_3898560478220140497_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEpqUlc9qkJTTYeESZrK0G1P5RPKZBtuuY_lE8pkG265hg_w-aTOQYDFtqIukiW_rHRyDJ_sEzGQTSxnPPzTrip&_nc_ohc=dqUyc4O85zYAX98K1_F&_nc_ht=scontent.fpen1-1.fna&oh=7d7a903ce42f779ae436a38d88e811f4&oe=60E616B2",
       ""
    ],
    "product_category": "meat",
    "product_price": "8.00",
    "product_description1": "1pc/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 502,
    "product_name": "Chicken Burger Patty 汉堡肉片 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197880978_350113573175606_1669728070526845612_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGBwi3S8uJD_90Hq8pLH4KNkkWLIALEz1eSRYsgAsTPV6RgKm3rgWdUjAZz809VoV2kiPmNA5Kp31oEcqgxuqS9&_nc_ohc=4hczFF-Nm54AX_11vHl&_nc_ht=scontent.fpen1-1.fna&oh=62cde1caeeed68ef1e3d283ebb29cce9&oe=60E86EB7",
       ""
    ],
    "product_category": "meat",
    "product_price": "16.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 503,
    "product_name": "Chicken Nuggets Tempura 鸡肉块 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191500331_350113823175581_5142590766354440506_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE4BG3Giv2fSfqLOaaCnIT2bIQjBckTlKdshCMFyROUp1AQy4qMUTO8GWoNc-oNMK1D1OLJ1pM6VGtIK4UaRmh9&_nc_ohc=coUY6e2gFjgAX-pUtzU&_nc_ht=scontent.fpen1-1.fna&oh=ba0f62b7f28cea7a303e599d402d7079&oe=60E742FF",
       ""
    ],
    "product_category": "meat",
    "product_price": "16.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 504,
    "product_name": "Crispy Popcorn Chicken 香酥鸡米花 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194723784_350114426508854_3247163929326884149_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH6_gIVlZYq5T0BF_Lx51_kiB2GYb_TKTKIHYZhv9MpMtCykMBbfjrgQ5UBtVGw1iJHH8KP167UorTdzIpOQS0f&_nc_ohc=MsyW4FZXcPgAX9z4MZ6&_nc_ht=scontent.fpen1-1.fna&oh=622161d8c7dfeea425202856791b3dd1&oe=60E6A2CA",
       ""
    ],
    "product_category": "meat",
    "product_price": "22.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 505,
    "product_name": "Miami Butcher Chicken Ham (Sliced) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191148821_350115806508716_8641107834118857534_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFdKp2d0mTpb3t7GSxzAKeqkEO5LeD5WDKQQ7kt4PlYMk2K4YrKpMrD3KBZVoW89NZnj_y1_5WzvbhOldU7oLw9&_nc_ohc=_VYtxEDKjI8AX_ZU98k&_nc_ht=scontent.fpen1-1.fna&oh=d524428bdfdf0d8f8f9128bcad433e96&oe=60E4FDC5",
       ""
    ],
    "product_category": "meat",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 22,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 506,
    "product_name": "Miami Butcher Chicken Sausage Breakfast 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191489874_350116223175341_5969198030378600426_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEG9jjHMQdj1zQi5Cr1_h4BD2Go7e6wpBoPYajt7rCkGqy9IMibIXBkzx8zTQqRwO9vasN5iEgIktiMhxWPasRQ&_nc_ohc=Zzz9qPAEeeYAX_dYMSa&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=5449ca0c55249d7f6a2bde5b67fde637&oe=60E7D9EF",
       ""
    ],
    "product_category": "meat",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 507,
    "product_name": "Miami Butcher Chicken Sausage Jumbo 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193876395_350116559841974_9028624105598445066_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEJy76JV9KfzCsVeY6z6w2U1dqYOPv3lrjV2pg4-_eWuDW-8yaquErUSuTmDzvfqXWQNLBQMICmQqVhEF_lATL7&_nc_ohc=I8JEt0qt4kIAX8bpcpc&_nc_ht=scontent.fpen1-1.fna&oh=20b56fa404a2bcdb1d69c10bc1d3e463&oe=60E53BF4",
       ""
    ],
    "product_category": "meat",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 508,
    "product_name": "Miami Butcher Turkey Bacon (Sliced) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192265122_350116919841938_5266068064058363636_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEXoDwRtKcVlcRIeqPRq-lYdiUEA38jMqV2JQQDfyMypcr3pqhENFpDEpsHrnbAZBCTZJIMtnRNlu7BwTbRjfL8&_nc_ohc=7jRv7UiRdekAX-vaWfk&_nc_ht=scontent.fpen1-1.fna&oh=bd93cf25736ee9ad364448f208db0cfb&oe=60E5BCF3",
       ""
    ],
    "product_category": "meat",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 509,
    "product_name": "Smoked Duck Breast 烟熏鸭胸肉 200-300g",
    "product_picture": [
       "https://scontent.fkul2-4.fna.fbcdn.net/v/t1.6435-9/193195033_352426462944317_2468080961198807599_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF8zWpahm-Xg09mA3SdoN2ve3o7lgXx9md7ejuWBfH2Z_SQh5bI7EPtH-VXLcoX9T4&_nc_ohc=X3LW4gL1O9UAX_rmquG&_nc_ht=scontent.fkul2-4.fna&oh=fcdff83edde67f36c097b9c336adb372&oe=60C86814",
       ""
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 509,
    "product_name": "Black Pepper Duck Breast Meat 黑胡椒鸭胸肉 200-300g",
    "product_picture": [
       "https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/197970461_352426456277651_5507484214199588537_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHwpENvBX6Sts2_-hjsF0Kv_KOV4pkBFl_8o5XimQEWX5rMJB_KWA2RK5a9SFUxEAA&_nc_ohc=OHC6BhYSqT8AX_sEIFp&_nc_ht=scontent.fkul2-2.fna&oh=9dd94d9f284ae7d90912de48c643a567&oe=60C9C1C1",
       ""
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 510,
    "product_name": "Smoked Back Bacon 黑毛猪肉培根 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192688581_350119356508361_8994041880986106617_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEs8RD63CDPiCcIcnEDxzmm4Eh2Ve0YTT7gSHZV7RhNPhBvkXMuj5UpswQC1XOoQj6TW4w2IGvVrUTK0MTx8BK-&_nc_ohc=NR00PTS0x2MAX_tG-jp&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=4d4d6adbe6568ed5acf8c6fd4f880618&oe=60E45D08",
       ""
    ],
    "product_category": "meat",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 27,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 511,
    "product_name": "Smoked Streaky Bacon 烟熏五花肉 250g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193778636_350119649841665_4595051628959253451_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeH2jrSFVT0RUN_tkonc16IvrQ3Uv5kZbp-tDdS_mRlun7xpdGMO6k7KXRaK6SONl2K8ktJ_cbKoM7RW8H6N0on2&_nc_ohc=IoYLsgpYCHUAX9SFg_x&_nc_oc=AQmM4A5ipePmy9bbQn3PGcK-KhBJEpQ4uOB5w9X02OFcVtJ5sZHSQuuDhTo996FLTdo&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=a03b00c52b0736092a8f813150f107ee&oe=60E6BCC6",
       ""
    ],
    "product_category": "meat",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 512,
    "product_name": "Scallop Sliders 培根带子 260g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192554414_350464483140515_5039305984047353777_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEx83NMocq389TdoWwwxeOQcG7c_ewip25wbtz97CKnbtFz7E2ok-VgJeiCyf4zSEeM3GQudGKBc_gQ9K4BV6D5&_nc_ohc=DUtUMd72kvAAX_ISlHT&_nc_ht=scontent.fpen1-1.fna&oh=5cc7b7bc70aeac8b132d1a0be6b817c0&oe=60E56517",
       ""
    ],
    "product_category": "meat",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 27,
    
 })
  await Product.create({
    "inventory_id": 513,
    "product_name": "Meatballs 猪肉丸 400g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194279041_350115353175428_6482498869646075171_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGUCeqH8JbumqoXGZocnKaMkuvRESrnrq-S69ERKueur37yFD2CdmW7RPHbM_2qQTlFB8xWZinCXTwSa3yiKGSj&_nc_ohc=cfkKLN4bhiMAX9GMUjM&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=a0d88f4620257c5d314e6bea6717f96d&oe=60E4D122",
       ""
    ],
    "product_category": "meat",
    "product_price": "11.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 514,
    "product_name": "Mince Meat 猪肉碎 (S) 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196326359_350586326461664_2383021349842560433_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGoDvUrPht1XuObcDRy2TvxfOKOTifwA2R84o5OJ_ADZBbo8PqGq_rgwr22wdaMx9m9cqa0qZbcjvRdXRp5eYbw&_nc_ohc=jKYnvYUMMrcAX82b9QP&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=152cc686a4474d5058b83c29d89a77a8&oe=60E8D7A0",
       ""
    ],
    "product_category": "meat",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 515,
    "product_name": "Mince Meat 猪肉碎 (L) 600g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196562907_350586543128309_6373567735512673697_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFVgppumuGl_YFwRKKPaC1Z0SVo8EfmoK_RJWjwR-agr5cIFLT2bPNWSSRICAo01hYCCyjXYDa8adFReWMIzTDg&_nc_ohc=xr_sTfm0DgYAX_kTL7G&_nc_ht=scontent.fpen1-1.fna&oh=9531b19138189f9aeda6de84c552019d&oe=60E6374E",
       ""
    ],
    "product_category": "meat",
    "product_price": "15.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 516,
    "product_name": "Shabu Shabu Pork 猪肉片 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190854247_350118983175065_552017914745868720_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFkmTNgHZCeC3BEIRjdIgARmsS-lsc5tamaxL6Wxzm1qcmgnEUMzdj6Bst2GTUXhxqwYKL1FpwufSPXTfQxrwjj&_nc_ohc=xTa3qtg_UqEAX8DlHTC&_nc_ht=scontent.fpen1-1.fna&oh=be922702506a01f89af1979f8bf9cbc3&oe=60E7C190",
       ""
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 517,
    "product_name": "Shabu Shabu Pork Belly 五花肉片 300g",
    "product_picture": [
       "https://drive.google.com/uc?id=1WPQPr16OavHoDPzMX00ejqmTkAOvLT-S",
       ""
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 518,
    "product_name": "Japanese Chashu 日式叉烧 150g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198319700_350114699842160_6211398878225260074_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGPE3txjuM4jwBycA8CVMkiDOxplk7TgvcM7GmWTtOC993AdiD7rDNi38AX2t_VpNVqXvBWrKmE6Jw8zUb5KwUo&_nc_ohc=JnZUGaWmM5AAX9xV9q2&_nc_oc=AQmjKPWRLjmx-wpADeYLehzdGdUgFM8BGwjBbwgTktc7RFaEgxp9DlMIb1uqrqyMWOA&_nc_ht=scontent.fpen1-1.fna&oh=b6a6c2b7364548436d1003d62e73b30f&oe=60E75ABE",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/187436662_338084271045203_5555185022396831754_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEhCtCr2AYH179E-U63E_b0QF1qHhI0mjRAXWoeEjSaNN0tuli2E8b3r2EAetpVgqP2CnUytUoYewMNSs6pd9fd&_nc_ohc=_J3y_XwvydAAX8wPbCe&_nc_ht=scontent.fpen1-1.fna&oh=b04a0a9db1e9de2dc59fbfe9edd44183&oe=60C7A4B6"
    ],
    "product_category": "meat",
    "product_price": "15.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 519,
    "product_name": "Cheddar Cheese Sausages 芝士香肠 400g",
    "product_picture": [
       "https://images.unsplash.com/photo-1585325701165-351af916e581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2F1c2FnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
       ""
    ],
    "product_category": "meat",
    "product_price": "22.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 520,
    "product_name": "Mild Italian Sausages 意大利香肠 400g",
    "product_picture": [
       "https://images.unsplash.com/photo-1585325701165-351af916e581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2F1c2FnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
       ""
    ],
    "product_category": "meat",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 521,
    "product_name": "Pork & Herbs Sausages 400g",
    "product_picture": [
       "https://images.unsplash.com/photo-1585325701165-351af916e581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2F1c2FnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
       ""
    ],
    "product_category": "meat",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 522,
    "product_name": "Habanero Chilli Sausages 辣香肠 400g",
    "product_picture": [
       "https://images.unsplash.com/photo-1585325701165-351af916e581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2F1c2FnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
       ""
    ],
    "product_category": "meat",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 523,
    "product_name": "Pork Stomach 猪肚 400-600g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192575986_350117969841833_3452680692056754150_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGI1JvuUlSfa0atFGAr7Tj6eLefVcq4Sad4t59VyrhJp9Qxv3G81xILU7NNZy_BpamN7bNijQNRsWaDnztMXBI9&_nc_ohc=ZfkG9S0FqQ0AX9nK1X8&_nc_ht=scontent.fpen1-1.fna&oh=6bc6ce419d4323df465c6d5e3d09594a&oe=60E766FF",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/162799778_301135334740097_4875844713686727511_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEZqEFTHnaYwKrPNoklssE-fHZwKDAVRRh8dnAoMBVFGAmwb34F9JvWxKME10sXUg10hvxb7ACR7udt7ns6Kus7&_nc_ohc=Glmnty5DFw8AX-pgSuG&_nc_ht=scontent.fpen1-1.fna&oh=8f6acbc2e014e972e661d5b910f8de1f&oe=60C8C315"
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 524,
    "product_name": "Pork Stomach (Cleaned) 猪肚 400-600g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192767564_350118369841793_217892535370594590_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFAQdYDqp02geFzL7UXRooMwd6R_G1qcJLB3pH8bWpwkoXCTrG3WFKPbrthEUntr7oGXR7im7rbeMHJffLxduO8&_nc_ohc=PhQAWZkJlEcAX8JVUrS&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=0258bc9380813e4f3bf021f0634039e1&oe=60E42867",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/162799778_301135334740097_4875844713686727511_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEZqEFTHnaYwKrPNoklssE-fHZwKDAVRRh8dnAoMBVFGAmwb34F9JvWxKME10sXUg10hvxb7ACR7udt7ns6Kus7&_nc_ohc=Glmnty5DFw8AX-pgSuG&_nc_ht=scontent.fpen1-1.fna&oh=8f6acbc2e014e972e661d5b910f8de1f&oe=60C8C315"
    ],
    "product_category": "meat",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 525,
    "product_name": "Pork Tendon 猪脚筋 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190564054_350118769841753_6482061885988169107_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHexqS-_nUqbF5H2GAekIgku6n0J30Ycl-7qfQnfRhyX3Umv-kFxSZZzArnuZ9dQErDVoD9oAJHX_JIt4gmT-24&_nc_ohc=hsiD0l3iiaAAX-GHAVy&_nc_oc=AQlyDvwWsiHIAQF3fJ8p8en32dJQKqXq0ilQMV5hNfiC6c2WscF4L5aMie9906C2hjU&_nc_ht=scontent.fpen1-1.fna&oh=79e763402681b3989fc8190a708272e4&oe=60E69DC5",
       ""
    ],
    "product_category": "meat",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 526,
    "product_name": "Lobak 卤肉",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194192945_350115003175463_2086421557144560937_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE1ZPWLrO_Cy560uq3zGlpZLKaTdfGtpE0sppN18a2kTerruG6VFaYutrzG2O4xnBTD9V-vDkRfx57SZZGXmNkK&_nc_ohc=MYyCnhkLslgAX-TlZX5&_nc_ht=scontent.fpen1-1.fna&oh=8f7a5f6051f2a1c55f764d92cf425abf&oe=60E54F0C",
       ""
    ],
    "product_category": "meat",
    "product_price": "16.00",
    "product_description1": "16pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 527,
    "product_name": "Cleaned Frog 本地野生田鸡 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191525506_350113989842231_761846132637466632_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG8owHXG4Js2xRxKdpl00tn2JeGmakvyr7Yl4aZqS_KvrL2C0nWutimak3KkOco6tkm_zVDiENdCIxBvIyIhPXv&_nc_ohc=J0xYPryJSz4AX_pFTHa&_nc_ht=scontent.fpen1-1.fna&oh=33847a3ee2629aeccdb22c8282591974&oe=60E55859",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/186491759_336620994524864_8730692290206339769_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG6mwK59vthE3M20B4ZmzWIqOUSS8xJSHao5RJLzElIdtUt47TDbrZxs3zr3y3z8y5kp-x5KXVefzyyIJcFxCxH&_nc_ohc=5WCyD_n7XhIAX8zxWV6&_nc_ht=scontent.fpen1-1.fna&oh=32b7d3ba09376614e938dcad8b69d74f&oe=60C7A666"
    ],
    "product_category": "meat",
    "product_price": "45.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 601,
    "product_name": "Caviar 鱼子酱 100g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191271284_351062466414050_3362630400894338195_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGNVTGklRMTA6g4c1cTJ00dEoJxQcFpmy0SgnFBwWmbLa11650PuFLwO1J4_RszzviYtG8wOnbuD80raBzVUqMc&_nc_ohc=48YUa_bKjKMAX9PpJFa&_nc_ht=scontent.fpen1-1.fna&oh=b4744c8d2b16bdb0cea0c6d760f41a5b&oe=60E7D9F7",
       ""
    ],
    "product_category": "special",
    "product_price": "32.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 30,
    
 })
  await Product.create({
    "inventory_id": 602,
    "product_name": "Ebiko Orange 虾卵 500g",
    "product_picture": [
       "https://drive.google.com/uc?id=1HI1w7Pc5rqULK04WpE7yGInAzjyp0k4s",
       ""
    ],
    "product_category": "special",
    "product_price": "45.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 605,
    "product_name": "Tobiko Orange 鱼卵 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196089025_351063703080593_3845758042203440549_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGFSpPd_kfQwqieztNWfeRPxtumUMH9y0LG26ZQwf3LQg71FPEiaoKM4J0QQsoRSKXHZyEpK6Z4y2W3BfLfYjL9&_nc_ohc=a3YT52ObIHIAX9KoRcX&_nc_oc=AQmYuS6i_r-LEIGkexTfJzgwy8QKwDz8gb_7ELr-nT4tZc33qIlVp4tD30aJa2ku-fg&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=ed7d1e1d0d79f6ce321a72e5835a4ef4&oe=60E85AB3",
       ""
    ],
    "product_category": "special",
    "product_price": "45.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 603,
    "product_name": "Ebiko Orange 虾卵 50g",
    "product_picture": [
       "https://drive.google.com/uc?id=1i33YYWDdUJXPpahhSTS97zjAxNli8Xkl",
       ""
    ],
    "product_category": "special",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 604,
    "product_name": "Tobiko Orange 鱼卵 50g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195703591_351063633080600_49113457804765209_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEyl2fgEM4kXRn-BqjvUxkFxS9PF0mccLzFL08XSZxwvNO1j7lFitZ0YGjY4iA1u5HvMrmIiYzstwHAqpRw1oJZ&_nc_ohc=gzU34m3dCukAX9xge1p&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=888eecfc0492bf9916f43ccd014749ac&oe=60E5E915",
       ""
    ],
    "product_category": "special",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 606,
    "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193288210_351044973082466_2742977793444595132_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeELALhXCwfanj7XbVv9kj9E0lc_lEvYrz7SVz-US9ivPh62Ecbyv0HEr4FshYV0uY893dUF66teimpM7iFhAYma&_nc_ohc=DUFtA6UTdMQAX_2yl1X&_nc_ht=scontent.fpen1-1.fna&oh=e04fe7c7cacfe45b56cb71b1341a6ba6&oe=60E649A6",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119006302_197088691811429_5647674406685685000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFzelnxuu32JrnEiX8eHQ3sSkLJSUaN_SNKQslJRo39I8TjTqsdsvbDlE0WO2wbz0JpiOKXpYn0fncuILqy3K6I&_nc_ohc=fxNJq7F2aycAX9RYkZC&_nc_ht=scontent.fpen1-1.fna&oh=b903de7d1a11920342ef5d8154e8407d&oe=60C89195"
    ],
    "product_category": "special",
    "product_price": "88.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 607,
    "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190913266_351045046415792_1843845532929291005_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE-nFydRgFy3CEGG67Rh5vFqcBIhZZvHsOpwEiFlm8ew-bSAhJi95bwXs2hLRKMLT346kaFUsOxb3teaN9VYZZf&_nc_ohc=Oe0tt8crD2AAX-Pa8FQ&_nc_oc=AQkft4i7Zr97QWhU79cXO_BA4ztrnflH8FJ9CvuT_Kj_bMzcfKqJ9LtsTiya_y0k5dw&_nc_ht=scontent.fpen1-1.fna&oh=0ae9a5ac098b7c510944a579a954c5fa&oe=60E572CF",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/119006302_197088691811429_5647674406685685000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeFzelnxuu32JrnEiX8eHQ3sSkLJSUaN_SNKQslJRo39I8TjTqsdsvbDlE0WO2wbz0JpiOKXpYn0fncuILqy3K6I&_nc_ohc=fxNJq7F2aycAX9RYkZC&_nc_ht=scontent.fpen1-1.fna&oh=b903de7d1a11920342ef5d8154e8407d&oe=60C89195"
    ],
    "product_category": "special",
    "product_price": "25.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 608,
    "product_name": "Chuka Wakame 日式凉拌海带 450g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193209469_351062679747362_5323419278381169681_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGgcd8HOPqCNnSbJMf6xoGIg2lmZr1tE9iDaWZmvW0T2CtErX5MyBcJ4MWdDZQqwHDWxOUsgCkVQVYcSWZoL7TU&_nc_ohc=R2k3dNuu5C8AX_4VIBt&_nc_oc=AQm5rcJShjEkbopn8gtVCGftZolN0FQhXC0cT6vNDsfvsgcNqz7AxCm9m85Bbu8glZI&_nc_ht=scontent.fpen1-1.fna&oh=4491813d4c38f53edcc9c70b8cf8f0f1&oe=60E73274",
       ""
    ],
    "product_category": "special",
    "product_price": "12.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 609,
    "product_name": "Ebi Tempura 香脆面包虾 (8pcs/pkt)",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194343232_351062769747353_9181383216930929334_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG_FYpaT7n8lgLw-54l1z5ZC9auB-59Z7IL1q4H7n1nslal_c_pbcOn3ZMchr1viFMk8V2m3MfYNDLC7r_2kmEZ&_nc_ohc=WWIgKvU5A2cAX8AbqEX&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=fe6a0b0b645e9918cd6d1389c75460bc&oe=60E88E39",
       ""
    ],
    "product_category": "special",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 610,
    "product_name": "Ebi Tempura 香脆面包虾 (10pcs/pkt)",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193785783_351794729674157_3353298709610261731_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFiCPPT_CE8grN8F9J2vZ-hjv0qp56JW3OO_Sqnnolbc1V776rjb-naJUwlkUiTDDL314v3ozovqFw8yqS35M-n&_nc_ohc=HNXukw1_N-EAX8nB3Jj&_nc_ht=scontent.fpen1-1.fna&oh=6225d1bc7b2e072b8e6a0e6547dd26ec&oe=60C7DE3D",
       "https://drive.google.com/uc?id=16yX2Q6dAaxRvR2AA6EcA1hPd1ipiWCkY"
    ],
    "product_category": "special",
    "product_price": "12.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 611,
    "product_name": "Breaded Scallops 180g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198194935_350464083140555_6601519836267550888_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFWATKzZXdphqbGqOdPJsQWemWIY6nXsXN6ZYhjqdexcytCuPikyVGFcrGb-CP2f9uDLhoYx-GeUC8ShVBSqPUP&_nc_ohc=AAfmLGxi_qAAX_1oIc_&_nc_ht=scontent.fpen1-1.fna&oh=cbe97ddfcfa7b031d98f69a65c2bebda&oe=60C8499C",
       ""
    ],
    "product_category": "scallops",
    "product_price": "8.00",
    "product_description1": "12pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 612,
    "product_name": "Japan Tamagoyaki 日本厚烧玉子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120221971_202957081224590_5256672326838253276_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHhNRhBdg1SlLg9MIUI-9smQE8Y0S0rsNxATxjRLSuw3AAma-wVLO63QkQzm4Txj1ezCj4JpArTCBsp6M5XhNpJ&_nc_ohc=d34bfNimoyIAX8Vc8pX&_nc_ht=scontent.fpen1-1.fna&oh=f50fed455bd1a3a8aa208f3ca6f51294&oe=60E6D060",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120258741_202957084557923_3804575475476836136_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGC_57TqMU2ZBSBbZWgU0MOKp2TZx1LXpcqnZNnHUtel1BT2RUA-wAybfPJtztP2kxl_mzTLM5EeQSV1-8Mkl-W&_nc_ohc=guh7pA_LtcYAX-c5f3_&_nc_ht=scontent.fpen1-1.fna&oh=af7d4ac6bf526d7ca758d61305b5c75a&oe=60E8A78A"
    ],
    "product_category": "special",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 613,
    "product_name": "Tamagoyaki 厚烧玉子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197237901_351063289747301_5531156120525913184_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEU6tT6Xj64qNEVPUu6hVmJBRsuCv0VGcoFGy4K_RUZypW4IxJ0NDsLjEwEw3wt67td5QEN3tXcLilHzAKM7UaC&_nc_ohc=2ebAa4ViuJsAX_1Lh89&_nc_ht=scontent.fpen1-1.fna&oh=caae01378568e9dbaf1262f310707885&oe=60E8E1D7",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120258741_202957084557923_3804575475476836136_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGC_57TqMU2ZBSBbZWgU0MOKp2TZx1LXpcqnZNnHUtel1BT2RUA-wAybfPJtztP2kxl_mzTLM5EeQSV1-8Mkl-W&_nc_ohc=guh7pA_LtcYAX-c5f3_&_nc_ht=scontent.fpen1-1.fna&oh=af7d4ac6bf526d7ca758d61305b5c75a&oe=60E8A78A"
    ],
    "product_category": "special",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 614,
    "product_name": "Sea Urchin Platter (L) 海胆 100g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/122666423_210669837119981_5391144367839987721_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeHzkG5xd8FwLoVpG46Od5FE23u9w9GiX7_be73D0aJfv7vygMNEwz2hbRf9Hcx7QX79kse4tY0zQVj_tFBYi8hB&_nc_ohc=J4FAqfwK1HEAX-SAoF1&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=cbc46cba834b2d36752a707434fd5722&oe=60E579AD",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/122460636_210669840453314_2803625950671674484_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG3rm4m9-HyXm0WNeZBl7GZrk2Ni-bpRGSuTY2L5ulEZJiEx6BfASHQe4gkpTWRHybyw2bk_QbcQ4oMCnjvNIYo&_nc_ohc=c2dYaoj6s-4AX8UQmQl&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=9946e24193ba19d753a3897c6a45e3a5&oe=60E77E3E"
    ],
    "product_category": "special",
    "product_price": "60.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 615,
    "product_name": "Abalone Can 罐头鲍鱼 425g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193203609_351062296414067_1809917074877514919_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGMStYU6-MNjLQZv5wVU80Vvwz4BVIEcYC_DPgFUgRxgIktIeGf7ucg_R3y1rZUByN-9pH26lNQFtzIDCNpydgV&_nc_ohc=kCorf6E9BckAX8uDFaA&_nc_oc=AQn3Lb0gaKrXSK1j6f339c0e2k5S4ndXmRLkN4zC3LCRr6lRxNAM7Vcf26bTdTacd3w&_nc_ht=scontent.fpen1-1.fna&oh=182f6a7dbf4cdaf6183b7ab736622cf7&oe=60E5BDEA",
       ""
    ],
    "product_category": "special",
    "product_price": "35.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 33.33,
    
 })
  await Product.create({
    "inventory_id": 616,
    "product_name": "Fish Maw 鱼鳔 100g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193188955_351062849747345_2527635594344393212_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGb-0cgLl90s18GAZ10iQozWeWQZlKu6B1Z5ZBmUq7oHcJ2_eIfJYGD1wfun71zqXIfUAmAt-rXdhqSdkyntB1u&_nc_ohc=cQeySyFPwiIAX-bbLZk&_nc_ht=scontent.fpen1-1.fna&oh=7f03bcc48a51c0d3cc0bda324fd7a3b9&oe=60E7D2F7",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/142339476_266945248159106_8371587919769623228_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEl48pkWTx__p7emmq8VISwefV4vvRVCr959Xi-9FUKv9V6FkLHXuOooJmYKoRYtKNz4bi3aXiUtQnSuARkSVfq&_nc_ohc=vyHOpPN3ztEAX-tA6ex&_nc_ht=scontent.fpen1-1.fna&oh=ace4c944ebcea26a31965a910e7bace9&oe=60C87124"
    ],
    "product_category": "special",
    "product_price": "16.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 617,
    "product_name": "Fo Tiao Qiang 佛跳墙 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120480439_203532251167073_2453982789102000431_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEQYHBHblkIgir2_70udsmucKId9gGpWcBwoh32AalZwM8Og8ZA5LES0xz-7jm8a6NfTpBKOb2oqC9ywZtt-3LQ&_nc_ohc=aQ-bxATQrN8AX8sfRPU&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=754ea9a5e5b81fc0fc5b65c053622493&oe=60E71C05",
       ""
    ],
    "product_category": "special",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 25,
    
 })
  await Product.create({
    "inventory_id": 618,
    "product_name": "Fo Tiao Qiang 佛跳墙 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193499533_351063116413985_1960973298120322394_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGVxPqfFW1JTf2vAIWOqTCrDDb2E5MCVQoMNvYTkwJVCvpIheletoDtcTVpxjzGjrBU0_FIRJjGjDdH6bq4bBRD&_nc_ohc=XH5N6mEwwTUAX_g4TGM&_nc_ht=scontent.fpen1-1.fna&oh=790e8068f2f143760e1e7c673979f22a&oe=60E6420C",
       ""
    ],
    "product_category": "special",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 5,
    "product_bulk_price": 22,
    
 })
  await Product.create({
    "inventory_id": 619,
    "product_name": "Fo Tiao Qiang 佛跳墙 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120260479_203532241167074_2237398443656954445_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEUMkHEIiUipIjW5wZK5ZblyQ4OxuNa8HTJDg7G41rwdAAFQumJXohGceZGqW6v1VU_S5PrDMw20GfTBWFLiHKN&_nc_ohc=UxKbTdSa6zcAX80uXkS&_nc_ht=scontent.fpen1-1.fna&oh=01cf5ce7cc4c2e3e19e70c0439f55048&oe=60E63D10",
       ""
    ],
    "product_category": "special",
    "product_price": "28.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 10,
    "product_bulk_price": 20,
    
 })
  await Product.create({
    "inventory_id": 620,
    "product_name": "Imitation Shark Fin 碗仔翅 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197406737_351063219747308_3277515025129579644_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGH_GZzpRTUX--TAPyCyj6wUzWEhuE1aAJTNYSG4TVoAlX7hh8vtx-mE1TcNX2KoNTDxbXxRxo56LGWq_V87bwQ&_nc_ohc=8xc_0twQbxgAX8etFOW&_nc_ht=scontent.fpen1-1.fna&oh=c3a455684a54a7699122dca91907c219&oe=60E556B6",
       ""
    ],
    "product_category": "special",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 621,
    "product_name": "Shark Fin (Real) 鲍翅 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197295289_351063579747272_5483856083342027693_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGG5jhRpzTCq8-VYHWLHdVXcrvS6X4mx95yu9LpfibH3rsmYWPMWZmA-gy4VKmwx0R_lbzwFfHPokm9itEGrI4E&_nc_ohc=FfH4Eq7CmPAAX-kuY7-&_nc_ht=scontent.fpen1-1.fna&oh=d6a2194badf9bc516d29e40cca6de16f&oe=60E6F126",
       ""
    ],
    "product_category": "special",
    "product_price": "53.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 622,
    "product_name": "Sea Cucumber (L) 海参 (大) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196659674_350459833140980_2669486137997633922_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEwhj_fYW12Ms846LTv3Uh9N5YCkIa2XVc3lgKQhrZdV8gVZWRFCRl6KKDFUXwa6tH2UAKUYrnesZPJdmALNwpO&_nc_ohc=q5l1Jd42F48AX-LTig-&_nc_ht=scontent.fpen1-1.fna&oh=46afd861702c9f965aa9a9991f1eddc7&oe=60E65281",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "special",
    "product_price": "83.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 623,
    "product_name": "Sea Cucumber (S) 海参 (小) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/139694961_262281918625439_6191693448694527228_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG0mZM0MnRhTFTJqEECh3SBNHBaQAxBnVw0cFpADEGdXHSDgcIg-f81c6ad8IaDijjM9BqAN6x6i-3d6X2FTUzh&_nc_ohc=UzDaCWFE3cQAX_ev7Te&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=d71c8bd04ee0256344c72ae2c6b59c03&oe=60E818FB",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "special",
    "product_price": "78.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 624,
    "product_name": "Sea Cucumber (S) 海参 (小) 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195861581_350460163140947_734675560483243240_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeErvXhc6sjCocvwmVhcrgEr07WrRXy8CiDTtatFfLwKILunVt8K7oNWpw-y6nwOXarxeAYhhyOkohSCbhknvpBi&_nc_ohc=AK-iqqr-WigAX9pZd1t&_nc_ht=scontent.fpen1-1.fna&oh=dcf1f5d2878deb7c22063f1cf2db5faa&oe=60E592AC",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "special",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 700,
    "product_name": "Abalone Slice 鲍鱼片 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191580840_350449813141982_1378521124509031483_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGOobuv6COyaPmufdfN61tR-sPgDY8PXyX6w-ANjw9fJatp-wrZ4EiCm71-FIbGdnSELb-4A6FwGQ_TzbQmr8vT&_nc_ohc=5eEPHmWnZ68AX89dDgz&_nc_ht=scontent.fpen1-1.fna&oh=22d41450fb2e930ee11f6458cc2b9889&oe=60E6D4F5",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "8.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 701,
    "product_name": "Japan King Crab Filament Stick 日本帝王蟹柳 250g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197313455_350456899807940_8275208282428195421_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHOy0HmTsSfYNgYwHTeFG8tXXrkH4Rnt7pdeuQfhGe3ugTw03llB6ehRqdH9BNPo1_GelbR4k0GYJP8wF5tDjBj&_nc_ohc=ClAoOWqdt80AX8h1rMS&_nc_ht=scontent.fpen1-1.fna&oh=f3edef39dc3d483c9ac572f6c62785b2&oe=60E64B75",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 707,
    "product_name": "Shrimp Paste 虾滑 150g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194298859_350460856474211_3918718841273534721_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGRzAp_jm4n6pKraT21loDfXNfMZC3hIx1c18xkLeEjHX3Mt6ik_1ujb5g4em5cy3fzfCT-sSGJU2q-eHLIW8EU&_nc_ohc=LgGJXpYnh4IAX_L0jp4&_nc_ht=scontent.fpen1-1.fna&oh=91d32f8ab30508ebb7ef34cf7e6ec90a&oe=60E73803",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/106368230_175667960620169_6027752870776543910_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG93fX8gUvG-rAcI0hJbqvHYymy1OeWJeZjKbLU55Yl5uj6KYwb0yqlhJ4w7yV2cpQoVbEnvZwN_pydQ4OtmuBN&_nc_ohc=N-9jC7o9g_gAX9an3So&_nc_ht=scontent.fpen1-1.fna&oh=185e3e8ed21dcbe709dcce310af3d059&oe=60C7EDCC"
    ],
    "product_category": "hotpot",
    "product_price": "9.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 708,
    "product_name": "Tobiko Shrimp Paste 鱼卵虾滑 150g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193576352_350461646474132_7090645918202592471_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeG02uFZbaYNA7tkI4c_aCJxklwRY135yFeSXBFjXfnIVwhSTUnvCogYyppr_07mctYNiqyAQZxKyXDgHcQJKVrP&_nc_ohc=rmMsnL-rvhsAX-KsWg1&_nc_ht=scontent.fpen1-1.fna&oh=714bca212b82ddbdb71144b800e5db4d&oe=60E75EE4",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/142352379_264759335044364_8970254856792637024_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGiEIZkcs-nF5H0UYZylzp7DGgay0zRsn4MaBrLTNGyfsJYCr9YR8HAfckqQ-LTKyCOIoPIAHkmPeyqKkZ-Mb-l&_nc_ohc=S_v8hM8xXNEAX87piMm&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=9e956d36a99c70b4d98767fb11e17cfb&oe=60C6E93D"
    ],
    "product_category": "hotpot",
    "product_price": "9.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 709,
    "product_name": "Nikudo Fish Paste 鱼滑 200g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196638722_350459359807694_1598140105026899226_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHdfR_WSOMRpAIk--q5h8CEOXg60Bsuarc5eDrQGy5qt5Yi4z8FPUiwQ6crRHMU3TK16-CNRnW4qXXw9gZ1Qz2q&_nc_ohc=lh-dDXGB-VIAX_r-tY6&_nc_ht=scontent.fpen1-1.fna&oh=ecdde8a1df92df1fdd883e000704a3fa&oe=60E63FB1",
       "https://drive.google.com/uc?id=1XJZzzJrQ46uLUcIRT9iHLRv4-XD3hTbb"
    ],
    "product_category": "hotpot",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 705,
    "product_name": "Cheese Tofu 芝士豆腐 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191399032_350454016474895_5547014324292634154_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGwn_I7ju_avWQxZeaDg_WwtCgYfyw6T9O0KBh_LDpP03LDNMicGiWZL-l3xIFx1iaRTSzLdVfkYKvUUH2OPr08&_nc_ohc=_fgfwC4DHZcAX8sAaqT&_nc_ht=scontent.fpen1-1.fna&oh=53239a5cab3bf02f55636ba54c7755f7&oe=60E6AE90",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "9.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 706,
    "product_name": "Seafood Tofu 海鲜豆腐 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193643376_350460536474243_3156854881684070819_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGBZRb3HoE4arHtvectNalwnT__8ZichrWdP__xmJyGte1vBWb2AmqUVgv04hBG8c0N8A6gbk0XH5DQmFICCor0&_nc_ohc=sSlHtyx-SXMAX_KIOLB&_nc_ht=scontent.fpen1-1.fna&oh=f5a34384a6a79647d42fcce87c859501&oe=60E815DE",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 710,
    "product_name": "Australian Beef Slice 牛肉片 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190658937_350111449842485_8926236924913473181_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHjxtp14E2YLSsxfsZK2GEI--EgkzxYpg374SCTPFimDRnKtzw9vb7zVICi82ICtvZprvZW4CL_cqV0E6KFr7Pr&_nc_ohc=pUiIX2KjfAQAX9igJCV&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=7b8714d60ba6df7231aea5ce1f9a7d4a&oe=60E61E24",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "30.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 713,
    "product_name": "Meatballs 猪肉丸 400g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/194279041_350115353175428_6482498869646075171_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGUCeqH8JbumqoXGZocnKaMkuvRESrnrq-S69ERKueur37yFD2CdmW7RPHbM_2qQTlFB8xWZinCXTwSa3yiKGSj&_nc_ohc=sBiFnA2mxRoAX88VoKQ&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=82593e02cbc7e0724e07c4c9cc76155f&oe=60E8C5A2",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "11.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 714,
    "product_name": "Mince Meat 猪肉碎 (S) 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196326359_350586326461664_2383021349842560433_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGoDvUrPht1XuObcDRy2TvxfOKOTifwA2R84o5OJ_ADZBbo8PqGq_rgwr22wdaMx9m9cqa0qZbcjvRdXRp5eYbw&_nc_ohc=jKYnvYUMMrcAX82b9QP&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=152cc686a4474d5058b83c29d89a77a8&oe=60E8D7A0",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 715,
    "product_name": "Mince Meat 猪肉碎 (L) 600g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196562907_350586543128309_6373567735512673697_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFVgppumuGl_YFwRKKPaC1Z0SVo8EfmoK_RJWjwR-agr5cIFLT2bPNWSSRICAo01hYCCyjXYDa8adFReWMIzTDg&_nc_ohc=xr_sTfm0DgYAX_kTL7G&_nc_ht=scontent.fpen1-1.fna&oh=9531b19138189f9aeda6de84c552019d&oe=60E6374E",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "15.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 711,
    "product_name": "Shabu Shabu Pork 猪肉片 300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190854247_350118983175065_552017914745868720_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFkmTNgHZCeC3BEIRjdIgARmsS-lsc5tamaxL6Wxzm1qcmgnEUMzdj6Bst2GTUXhxqwYKL1FpwufSPXTfQxrwjj&_nc_ohc=xTa3qtg_UqEAX8DlHTC&_nc_ht=scontent.fpen1-1.fna&oh=be922702506a01f89af1979f8bf9cbc3&oe=60E7C190",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 712,
    "product_name": "Shabu Shabu Pork Belly 五花肉片 300g",
    "product_picture": [
       "https://drive.google.com/uc?id=1f63GPUplBjSAYa5kWTZGrF0cNw6PC1d8",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 522,
    "product_name": "Japanese Chashu 日式叉烧 150g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198319700_350114699842160_6211398878225260074_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGPE3txjuM4jwBycA8CVMkiDOxplk7TgvcM7GmWTtOC993AdiD7rDNi38AX2t_VpNVqXvBWrKmE6Jw8zUb5KwUo&_nc_ohc=JnZUGaWmM5AAX9xV9q2&_nc_oc=AQmjKPWRLjmx-wpADeYLehzdGdUgFM8BGwjBbwgTktc7RFaEgxp9DlMIb1uqrqyMWOA&_nc_ht=scontent.fpen1-1.fna&oh=b6a6c2b7364548436d1003d62e73b30f&oe=60E75ABE",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/187436662_338084271045203_5555185022396831754_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEhCtCr2AYH179E-U63E_b0QF1qHhI0mjRAXWoeEjSaNN0tuli2E8b3r2EAetpVgqP2CnUytUoYewMNSs6pd9fd&_nc_ohc=_J3y_XwvydAAX8wPbCe&_nc_ht=scontent.fpen1-1.fna&oh=b04a0a9db1e9de2dc59fbfe9edd44183&oe=60C7A4B6"
    ],
    "product_category": "hotpot",
    "product_price": "15.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 519,
    "product_name": "Smoked Duck Breast 烟熏鸭胸肉 200-300g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/95503790_155681235952175_5062971825789599744_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEU581NygXr4PDlf4PXnrA9wGTcH-ISEKDAZNwf4hIQoDUQnm80ez_eRAzGp-3w1YW0v0QDt6TFnxWOIlrr5Yqs&_nc_ohc=Jo6kw0vfA3sAX_oCQKY&_nc_ht=scontent.fpen1-1.fna&oh=d256e4143b58a9ffb0435f46c305564d&oe=60E8DE01",
       ""
    ],
    "product_category": "meat",
    "product_price": "13.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 716,
    "product_name": "Flower Squid 花枝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198531214_351045183082445_2159582179355360589_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeE6TKVOig5-twB6hwVDP8o1M9u55NncDc8z27nk2dwNzzs62dBT90LEr9P_d3RgdL3fma_kD7Rytnd36PYX9Xuv&_nc_ohc=wVOJNgzDqdcAX8WVBhV&_nc_ht=scontent.fpen1-1.fna&oh=dc525c97253593af8e1ebd773f0f9a6d&oe=60E5B667",
       ""
    ],
    "product_category": "hotpot",
    "product_price": "18.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 702,
    "product_name": "Sea Cucumber (L) 海参 (大) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196659674_350459833140980_2669486137997633922_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEwhj_fYW12Ms846LTv3Uh9N5YCkIa2XVc3lgKQhrZdV8gVZWRFCRl6KKDFUXwa6tH2UAKUYrnesZPJdmALNwpO&_nc_ohc=q5l1Jd42F48AX-LTig-&_nc_ht=scontent.fpen1-1.fna&oh=46afd861702c9f965aa9a9991f1eddc7&oe=60E65281",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "hotpot",
    "product_price": "83.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 703,
    "product_name": "Sea Cucumber (S) 海参 (小) 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/139694961_262281918625439_6191693448694527228_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeG0mZM0MnRhTFTJqEECh3SBNHBaQAxBnVw0cFpADEGdXHSDgcIg-f81c6ad8IaDijjM9BqAN6x6i-3d6X2FTUzh&_nc_ohc=UzDaCWFE3cQAX_ev7Te&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=d71c8bd04ee0256344c72ae2c6b59c03&oe=60E818FB",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "hotpot",
    "product_price": "78.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 704,
    "product_name": "Sea Cucumber (S) 海参 (小) 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195861581_350460163140947_734675560483243240_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeErvXhc6sjCocvwmVhcrgEr07WrRXy8CiDTtatFfLwKILunVt8K7oNWpw-y6nwOXarxeAYhhyOkohSCbhknvpBi&_nc_ohc=AK-iqqr-WigAX9pZd1t&_nc_ht=scontent.fpen1-1.fna&oh=dcf1f5d2878deb7c22063f1cf2db5faa&oe=60E592AC",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/140578681_262281921958772_5421871296512781988_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeF_HrtwJ-2T3OrTsfDS6_mxMyWXhJWGnrszJZeElYaeu9k8XTfrhwrL-d_Qq_PRooQKA41iA1f1cl0_pUQpOHto&_nc_ohc=Srf9CB-RFTsAX8Mb3Od&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=38ed2938b409985b8ac56a3f782d0e4e&oe=60E67EB8"
    ],
    "product_category": "hotpot",
    "product_price": "40.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 717,
    "product_name": "Fish Maw 鱼鳔 100g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/198206730_350454643141499_3756134877029833453_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHiRCegWyMXjRXflXTb9kTOWx_AS5OdqrJbH8BLk52qstxC23yhjrQlbSarNF2rGt1Fw6uxrfJO3eyY7W4yQ5Iq&_nc_ohc=5FT1eueKmJcAX9Tl1zB&_nc_ht=scontent.fpen1-1.fna&oh=3122fb2585714af07428b6a6c2e5f6bc&oe=60E5B121",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/142339476_266945248159106_8371587919769623228_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeEl48pkWTx__p7emmq8VISwefV4vvRVCr959Xi-9FUKv9V6FkLHXuOooJmYKoRYtKNz4bi3aXiUtQnSuARkSVfq&_nc_ohc=vyHOpPN3ztEAX-tA6ex&_nc_ht=scontent.fpen1-1.fna&oh=ace4c944ebcea26a31965a910e7bace9&oe=60C87124"
    ],
    "product_category": "hotpot",
    "product_price": "16.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 202,
    "product_name": "Canadian Scallops XL 10/20 加拿大带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/120660906_204903877696577_3256118392630256897_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGIPrHyLF5cN1_x6uOYaTx0Oy4CGXm3Roo7LgIZebdGinmXT7HySSOhUxU-WcQDm9M3J4lVG0VHrFcJEPmr1eeV&_nc_ohc=bQSofW1gEcIAX8Hl9Wu&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=0e23862dd3ab2e5f04b3a62063c93004&oe=60E8805D",
       ""
    ],
    "product_category": "scallops",
    "product_price": "35.00",
    "product_description1": "9-10pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 33,
    
 })
  await Product.create({
    "inventory_id": 203,
    "product_name": "Canadian Scallops L 20/30 加拿大带子  500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195371603_350453339808296_4960360066392309673_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFeBDWcWBeYcA1hxcZhP9qdYeSSpiuPPnFh5JKmK48-cSQ6hwtM1GceANnDUVrGSsEz-Qv58-bcFAk_VRZCOKVf&_nc_ohc=GY0MhRGQU68AX9Aq4HE&_nc_ht=scontent.fpen1-1.fna&oh=5482506ebc51f5c3e9752bd04d1556e9&oe=60E4356D",
       ""
    ],
    "product_category": "scallops",
    "product_price": "32.50",
    "product_description1": "13-16pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 30,
    
 })
  await Product.create({
    "inventory_id": 204,
    "product_name": "Hokkaido Scallops XL 10/20 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197445733_350458653141098_6098772650827994650_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEkxuSQCBU3j_R5Q19w8opGehM9MxUjsgV6Ez0zFSOyBalr8g9FxQFwKjNBuNReYr-G5rZek8elPZJiaUTDfrXU&_nc_ohc=sQSFvHc1Fi8AX-rt3kU&_nc_ht=scontent.fpen1-1.fna&oh=91fc771226bec56515bc4862829642a6&oe=60E596C2",
       ""
    ],
    "product_category": "scallops",
    "product_price": "70.00",
    "product_description1": "18-20pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 205,
    "product_name": "Hokkaido Scallops L 20/30 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195764995_350456129808017_4925622981200279088_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEft2-c2PnDkxiKVg6TqUsxy5pJqZtVOVrLmkmpm1U5Wn8k6bfYeA0OPTPP3KOqYPQII5Eo8id5i9TPSiIS6JjI&_nc_ohc=HWuA6lufWloAX9f3hQj&_nc_ht=scontent.fpen1-1.fna&oh=7a3959365d7f60437bc016548338b321&oe=60E5DBCA",
       ""
    ],
    "product_category": "scallops",
    "product_price": "65.00",
    "product_description1": "20-30pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 206,
    "product_name": "Hokkaido Scallops M 30/40 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195265546_350456673141296_238482158305807610_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGlsNU9C8THtNCLqluzQ6FZLQuUZu2M4lYtC5Rm7YziVkDbrtCteJ0P1xaAAv-MqNxtYibTtPgX9-L10xqvcYan&_nc_ohc=xIYjqbxq0eMAX-59vrY&_nc_ht=scontent.fpen1-1.fna&oh=0e1c1df6312d940193b1015bbd00d798&oe=60E56D2B",
       ""
    ],
    "product_category": "scallops",
    "product_price": "60.00",
    "product_description1": "30-40pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 207,
    "product_name": "Hokkaido Scallops 40/50 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/188809475_350458239807806_4632231994231110621_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGbcYAOvrkgsPOYKPzeusJOhyZi97GN8pKHJmL3sY3ykhX0hpWD5U38LjCo5ezNKFIwzJ1gcScu0816LX49qetu&_nc_ohc=qsN3CB2relAAX8jkVLk&_nc_oc=AQmEWs5-rEMZ3De91HZarYPXFHUoBwn3XYmYiqb6xOC8VhLBWD2R7R0FQ1SvOraFnDA&_nc_ht=scontent.fpen1-1.fna&oh=6764460b79aa0e46d2c85ccd1a11617a&oe=60E743C2",
       ""
    ],
    "product_category": "scallops",
    "product_price": "55.00",
    "product_description1": "40-50pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 208,
    "product_name": "Hokkaido Scallops 60/80 北海道带子 1kg",
    "product_picture": [
       "https://drive.google.com/uc?id=1yskHg_9_OQ92N_OupwuKdeAqHm7FQb8p",
       ""
    ],
    "product_category": "scallops",
    "product_price": "45.00",
    "product_description1": "60-80pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 209,
    "product_name": "Hokkaido Scallops 80/100 北海道带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/188427978_350458446474452_4718371310959613678_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEqRnjSd_-4zzJIEbWPEl6zLzHYCXF-zlIvMdgJcX7OUvk42hVeSCcTsjEKnyohv8sSTmu8Cr6cfgtU3aUnFUt3&_nc_ohc=mjnjsYc-5hMAX-v3X6h&_nc_ht=scontent.fpen1-1.fna&oh=0fcb56a5b4196e2f4a831e3393fe524a&oe=60E7EFC1",
       ""
    ],
    "product_category": "scallops",
    "product_price": "40.00",
    "product_description1": "80-100pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 210,
    "product_name": "Half Shell Scallop 半壳大带子 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193767445_350455173141446_7424575698173561968_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGe6LxoZ3TRXUTIhpKVsXb_YAHlGpC-0C9gAeUakL7QL8qGtoW2xddxCkBoSbn7mpCT5mGmJprl0ZtdUiLSFfNe&_nc_ohc=-RaDkIj5dF0AX_9tqDz&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=fadc5822c5c54b4d210754ff87e3a799&oe=60E40FE1",
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/81894913_113837676803198_1304887789820575744_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_eui2=AeGeBAim4G7Q47oXufJrOmBEslTmGsYCReqyVOYaxgJF6gb514wRjjdV1RTCNQ2-O5UlB8bkP_ITOFAX8fJRH-8r&_nc_ohc=6wG0hbVcgVgAX9n78-u&_nc_ht=scontent.fpen1-1.fna&oh=192ff82d2e322b4a18bdf2ee50bea7e3&oe=60C6E6AE"
    ],
    "product_category": "scallops",
    "product_price": "26.00",
    "product_description1": "8-10pcs/pkt",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 212,
    "product_name": "Half Shell Scallop (Pink) M 半壳带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197706543_350455489808081_2040378463962824191_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEvn94AsWPs7hjVoEQzk-lfJmBx9l2HeTImYHH2XYd5MigNa3Ab0yKIGI7Kv8VeAOf_O0gnqxVoqt19G261hElt&_nc_ohc=W3AvFt7hfS0AX8v61hn&_nc_ht=scontent.fpen1-1.fna&oh=fde0e85a8ea5fabdb084aea9ec030d7e&oe=60E688D4",
       ""
    ],
    "product_category": "scallops",
    "product_price": "20.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": false,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 211,
    "product_name": "Half Shell Scallop (Pink) S 半壳带子 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197706543_350455489808081_2040378463962824191_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEvn94AsWPs7hjVoEQzk-lfJmBx9l2HeTImYHH2XYd5MigNa3Ab0yKIGI7Kv8VeAOf_O0gnqxVoqt19G261hElt&_nc_ohc=W3AvFt7hfS0AX8v61hn&_nc_ht=scontent.fpen1-1.fna&oh=fde0e85a8ea5fabdb084aea9ec030d7e&oe=60E688D4",
       ""
    ],
    "product_category": "scallops",
    "product_price": "17.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 214,
    "product_name": "Japanese Hotate Scallop L 60/80 日本扇贝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192790990_350457766474520_3686901305558168356_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGNe77kpappAfGlLHtTbO-IcyhhwEovQYlzKGHASi9BidbZegGdua7SLnrlGQNu8TT2LcmvCc8g6dESc1WdSRVv&_nc_ohc=OeMiCy6JuyMAX9qZ_nU&_nc_ht=scontent.fpen1-1.fna&oh=1f296e592be889216f39cd8a544df073&oe=60E75296",
       ""
    ],
    "product_category": "scallops",
    "product_price": "40.00",
    "product_description1": "60-80pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 213,
    "product_name": "Japanese Hotate Scallop S 100/150 日本扇贝 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/190418832_350458006474496_6300654089960382982_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGs6bUjvUzQIhRxcAM6fRfUpSNE1vhE6ZKlI0TW-ETpkg_YQEvtzSJarZxrVKkUvBzB9NzvTp-usFyzhzdWxY2B&_nc_ohc=YPGjSgESgvkAX9TfzQJ&_nc_ht=scontent.fpen1-1.fna&oh=2687e47a0613f378c0d73fb8a2d66e9f&oe=60E7CC28",
       ""
    ],
    "product_category": "scallops",
    "product_price": "35.00",
    "product_description1": "100-150pcs/box",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 800,
    "product_name": "Frozen Blueberries 冷冻蓝莓 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196345199_351080083078955_3843237524445869528_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHxzfKFxD62Xz2FCw9cv7Ysj0LDW4In3rmPQsNbgifeuQh3y-MkLwOV69upfHeQ-HX-ZcR6T9IWHkZt1CYdA2N3&_nc_ohc=DPV3q5X9t1YAX8H1wt0&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=ca30dd769decd41c40cb446de9d2df55&oe=60C76558",
       ""
    ],
    "product_category": "fruits",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 801,
    "product_name": "Frozen Mixed Berries 冷冻混莓 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195198811_351080133078950_78848613000191074_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHsbd6xHESVuoF9FcLmdhTUTs6x6FbBGetOzrHoVsEZ66E3Bbk9zdGjleoD5B39jg99hf8vkTwUPLRBuGsKiwtb&_nc_ohc=qFpXoG3C9Q4AX-T_VpJ&_nc_ht=scontent.fpen1-1.fna&oh=18582f685906e96c9deadaed0e67b426&oe=60C8BE62",
       ""
    ],
    "product_category": "fruits",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 802,
    "product_name": "Frozen Mixed Fruits 冷冻水果 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193523500_351080173078946_2128156975883892770_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFLDvMX4nzm_B5O5VZgMip5QGZHvzE_WnFAZke_MT9acVXQEfXtoUSo7x2nQ02QguTtcnloPfTRHsQwdqfI8EgG&_nc_ohc=RZcVBGz14ywAX9XeQhy&_nc_ht=scontent.fpen1-1.fna&oh=35dd736761f6870c698ed63996017d1d&oe=60C70F87",
       ""
    ],
    "product_category": "fruits",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 803,
    "product_name": "Frozen Rasberries 冷冻山莓 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195067814_351080213078942_765224242900973717_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHK7_khfSkMXCuui148w02n3aVpwRO2K4zdpWnBE7YrjN9nqvtB8xYUm3HqxLHiB0kj6mWSfY0wmLTHyiKMSyRr&_nc_ohc=F06GqZ72TIMAX9GxeQ-&_nc_ht=scontent.fpen1-1.fna&oh=e9abcb7b7e801ddeac4a6e63e576eb59&oe=60C751AF",
       ""
    ],
    "product_category": "fruits",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 804,
    "product_name": "Frozen Strawberries 冷冻草莓 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/197854277_351080263078937_999076185500882528_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHUNECKrOrYewoa7oykE-zgLBi1GXmi_NksGLUZeaL82RG7L3k9V_uUG-XlALIJQU1_C-Mspg4WFm7gHATBUE3g&_nc_ohc=Qcgzs08mMWYAX-3hBS8&_nc_ht=scontent.fpen1-1.fna&oh=1578893c857a08465de97e8a73cfd910&oe=60C883FC",
       ""
    ],
    "product_category": "fruits",
    "product_price": "14.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 12,
    
 })
  await Product.create({
    "inventory_id": 900,
    "product_name": "Edamame 日本毛豆 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/195405185_351078896412407_6811213531544285339_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHKMHONYs1A6kMFMXinjExS7w-EOTG_hE7vD4Q5Mb-EToDCm3CC_SdhWYidA2QJ1iTH58_revAdzVPNysYnZiCi&_nc_ohc=9mGINZHDxUcAX8vuT_V&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=546069ce72698f29864745fb31269412&oe=60C865BA",
       ""
    ],
    "product_category": "vegetables",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 3,
    "product_bulk_price": 6,
    
 })
  await Product.create({
    "inventory_id": 901,
    "product_name": "Edamame (peeled) 去壳毛豆 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/192744371_351078963079067_5872988065889879839_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeF7EeYFq9zJDvXpXB7OTtGMUn53EPJkZEJSfncQ8mRkQiTcNhgC6eq8PFejJGIgRyUBGsriTxQDpXvLksThPiIF&_nc_ohc=aSjrc4AEZoYAX9mZu0l&_nc_ht=scontent.fpen1-1.fna&oh=6363add62548251d0ade2094d3d8e516&oe=60C75EC7",
       ""
    ],
    "product_category": "vegetables",
    "product_price": "9.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 904,
    "product_name": "Sweet Corn 甜玉米 500g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191816872_351079123079051_3584187809796342573_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeEPlucT3XgzAtlkYvwmfLv5nE22Wwn7lDmcTbZbCfuUOTPeFWK0aEIbTO40dEH07UeV2NUuCEjLekRvU3bUFMWO&_nc_ohc=49F0kF84AV0AX_rYscW&_nc_ht=scontent.fpen1-1.fna&oh=5edeb36a61f0b0d7982655238e1e898e&oe=60C7A020",
       ""
    ],
    "product_category": "vegetables",
    "product_price": "8.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 902,
    "product_name": "French Fries (Crinkle Cut) 薯条 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/191153951_351079043079059_7913147476038309189_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGYIa5pGeO-dCDkDGqu0vYx_mzi7317MLv-bOLvfXswuxRy75eqy8LX1nMQmdrLiso7hLObCGi3PVmS2Dftexee&_nc_ohc=ZqWmDhFRxGIAX-u3V-V&tn=zcE_vrI3f0IbyDLc&_nc_ht=scontent.fpen1-1.fna&oh=dacb45c7b214e5b6210f635ca724e03b&oe=60C81389",
       ""
    ],
    "product_category": "vegetables",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 903,
    "product_name": "French Fries (Shoestring) 薯条 1kg",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/196562911_351079099745720_2804824788142887674_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHnn3jkwibvaoBYWQqXoTIdtFirRE-aEAa0WKtET5oQBrAwGmqg1JP2WvVsU39eKqcwmG1oCO3N3O2JhxAqo60Z&_nc_ohc=QkLMqTnwRwYAX-sYaJq&_nc_ht=scontent.fpen1-1.fna&oh=563482e66d9899fdec8b8b3ebe284017&oe=60C81BE9",
       ""
    ],
    "product_category": "vegetables",
    "product_price": "10.00",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })
  await Product.create({
    "inventory_id": 905,
    "product_name": "Chuka Wakame 日式凉拌海带 450g",
    "product_picture": [
       "https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/193209469_351062679747362_5323419278381169681_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGgcd8HOPqCNnSbJMf6xoGIg2lmZr1tE9iDaWZmvW0T2CtErX5MyBcJ4MWdDZQqwHDWxOUsgCkVQVYcSWZoL7TU&_nc_ohc=nn4w0GXF1gUAX8CpK2k&_nc_oc=AQmD37mxjqGXnUq1RQD9_D-BI4pwmcLHcqCfGDMde82v9bN011y_cXcA5d3jKtifqDE&_nc_ht=scontent.fpen1-1.fna&oh=6313efa9b56bd9707c9f5d6076ac3641&oe=60C78E74",
       "https://www.facebook.com/kingsseafood18/photos/330985245088439"
    ],
    "product_category": "vegetables",
    "product_price": "12.50",
    "product_description1": "",
    "product_description2": "",
    "product_description3": "",
    "product_description4": "",
    "product_status": true,
    "product_sale_price": 0,
    "product_bulk_quantity": 0,
    "product_bulk_price": 0,
    
 })

 
 
    

  console.log('order seeded');

  process.exit();

});