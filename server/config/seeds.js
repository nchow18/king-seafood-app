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

  await Product.create({
    product_name: 'Australian Beef Slice 牛肉片500g',
    product_picture: ['https://drive.google.com/uc?id=10eXrzaRuMlyTdCImk8pp2Vf7_tBVm8Yx'],
    product_category: 'meat',
    product_price: '30',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Breaded Chicken Chop 200g',
    product_picture: ['https://drive.google.com/uc?id=1IQ6yK05haIdVjYmUMWxCvMcQQwz0xIFG'],
    product_category: 'meat',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chicken Burger Patty 汉堡肉片 1kg',
    product_picture: ['https://drive.google.com/uc?id=1VtkryNcU28gt35_wjyjRs7p8ROQahoSK'],
    product_category: 'meat',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chicken Nuggets Tempura 鸡肉块 1kg',
    product_picture: ['https://drive.google.com/uc?id=10zD0ciOVV_QJsPt8CFmpll07YtKGopGG'],
    product_category: 'meat',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crispy Popcorn Chicken 香酥鸡米花 1kg',
    product_picture: ['https://drive.google.com/uc?id=1hLWW5SL6zeP43SAAteoyc_6_nszqeayd'],
    product_category: 'meat',
    product_price: '22',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Meatballs 猪肉丸 400g',
    product_picture: ['https://drive.google.com/uc?id=1uOBwSGwjIzzITptZOTnwAL7xbe1_MxDZ'],
    product_category: 'meat',
    product_price: '11.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Miami Butcher Chicken Ham (Sliced) 1kg',
    product_picture: ['https://drive.google.com/uc?id=13CYRU9xKNnxbBzU1u-Dybj1DyePkVkBb'],
    product_category: 'meat',
    product_price: '25',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Miami Butcher Chicken Sausage Breakfast 1kg',
    product_picture: ['https://drive.google.com/uc?id=1YuJmXjy8lq2PjIf4GSbnCdpYhe8b2F9r'],
    product_category: 'meat',
    product_price: '25',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Miami Butcher Chicken Sausage Jumbo 1kg',
    product_picture: ['https://drive.google.com/uc?id=1-gsShXgRaYfNOYA0nUDks5iGoiZlYBAD'],
    product_category: 'meat',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Miami Butcher Turkey Bacon (Sliced) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1tIldHc3R-6t06UUVHDzcrAPH5Dt4ulQQ'],
    product_category: 'meat',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mince Meat 肉碎  (S) 300g',
    product_picture: ['https://drive.google.com/uc?id=1gfaHy2QlXXZriXgQIKsTWGBRyK57gie1'],
    product_category: 'meat',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mince Meat 肉碎 (L) 600g',
    product_picture: ['https://drive.google.com/uc?id=1hFlzXJteHk132puOTMe-Fp02jX7bXV9e'],
    product_category: 'meat',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Pork Stomach 猪肚 400g-600g',
    product_picture: ['https://drive.google.com/uc?id=1pjUNkUVhCFQOkuYvfV1MQTBVBXWRcFOs'],
    product_category: 'meat',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Pork Stomach (Cleaned) 猪肚 400g-600g',
    product_picture: ['https://drive.google.com/uc?id=1XXwT0NqFhDhyNlTj3Us6kbLXtkf-bJNR'],
    product_category: 'meat',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Pork Tendon 猪脚筋 500g',
    product_picture: ['https://drive.google.com/uc?id=16deiBgcCeH-aKaCh_398iKdlcGh8YlFx'],
    product_category: 'meat',
    product_price: '11',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shabu Shabu Pork 猪肉片 300g',
    product_picture: ['https://drive.google.com/uc?id=1YUjRfvd4zzKBmrpQHKXMb3ZgMua-7J4L'],
    product_category: 'meat',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shabu Shabu Pork Belly 五花肉片 300g',
    product_picture: ['https://drive.google.com/uc?id=1WPQPr16OavHoDPzMX00ejqmTkAOvLT-S'],
    product_category: 'meat',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Smoked Back Bacon 黑毛猪肉培根 500g',
    product_picture: ['https://drive.google.com/uc?id=1yBd8seQsGhAcZL8VWLs--d4KJq0W0h3r'],
    product_category: 'meat',
    product_price: '27',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Smoked Streaky Bacon 烟熏五花肉 250g',
    product_picture: ['https://drive.google.com/uc?id=1NsxIvXfksgtWaaZHnHM1JbdutHt3Lplx'],
    product_category: 'meat',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Smoked Duck 烟熏鸭胸肉 200-250g',
    product_picture: ['https://drive.google.com/uc?id=18t6Y_-6AXj5BbMiRTppKpfJD7azksWiT'],
    product_category: 'meat',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Lobak 卤肉 (16pcs/pkt)',
    product_picture: ['https://drive.google.com/uc?id=1-CF1GNAniGo9EpwYLc7_aj0Rp1vgSFlA'],
    product_category: 'meat',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Cleaned Frog 本地野生田鸡 1kg',
    product_picture: ['https://drive.google.com/uc?id=17MVmzLBYnp4SI9ni1gprkjWqSe_XhxpT', 'https://drive.google.com/uc?id=1LUz4uMVZinQ_39Eb9Avp5Fvgq-G3xwcH'],
    product_category: 'meat',
    product_price: '45',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japanese Chashu 日式叉烧 150g',
    product_picture: ['https://drive.google.com/uc?id=1Tzkd-aZ8RMkWrEWMSoRy2ij_vLyx54wD', 'https://drive.google.com/uc?id=1__u_U26t2zl2KGNZ4mLcZwWGfs2txgWq'],
    product_category: 'meat',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Baby Octopus 小章鱼 (6-15pcs/pkt)',
    product_picture: ['https://drive.google.com/uc?id=1zqpFCjYqcGeCBLmmoAYSnxVGVrQzEv4B'],
    product_category: 'squid',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg',
    product_picture: ['https://drive.google.com/uc?id=1L8cU7utDtHsocCNPmxIqKeNTNTJv3tPS', 'https://drive.google.com/uc?id=1qmWFtZnFhcHH9hFs8MIkK82t_i3PgBXm'],
    product_category: 'squid',
    product_price: '88',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g',
    product_picture: ['https://drive.google.com/uc?id=1tYZFVCuRE1zZX0d_hXAavTQkQ1EsAr8Q', 'https://drive.google.com/uc?id=1qmWFtZnFhcHH9hFs8MIkK82t_i3PgBXm'],
    product_category: 'squid',
    product_price: '25',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Flower Squid 花枝 1kg',
    product_picture: ['https://drive.google.com/uc?id=1E4iKuvlB3727hU05MZifAu-8x2BwHiyy'],
    product_category: 'squid',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sotong (Cleaned) 苏东 2kg',
    product_picture: ['https://drive.google.com/uc?id=1G7TO58bgd7t4STQ_WXtLU1vwRpOyr99s', 'https://drive.google.com/uc?id=1o39JGCzfJ9suiBgi_gXi-Fg7fjtiasHZ'],
    product_category: 'squid',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Cleaned Sotong (10/20) 苏东 1kg ',
    product_picture: ['https://drive.google.com/uc?id=1__zxvtPqz_QQFty2W5qMjmnqHjs3ATXH', 'https://drive.google.com/uc?id=1o39JGCzfJ9suiBgi_gXi-Fg7fjtiasHZ'],
    product_category: 'squid',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Spicy Squid 香辣大鱿鱼 400g',
    product_picture: ['https://drive.google.com/uc?id=1G7TO58bgd7t4STQ_WXtLU1vwRpOyr99s', 'https://drive.google.com/uc?id=1Y8aIqBXkOpH6J2XxLxnJp6yloSToCVFq'],
    product_category: 'squid',
    product_price: '17',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Squid Tentacle 鱿鱼须 500g',
    product_picture: ['https://drive.google.com/uc?id=1xZ432cdzNoJ1_Eekb-bMHMxrAvLNxou5', 'https://drive.google.com/uc?id=1XwkSX_Do8-4yrkefSK6hHyS2HGcR_p4e'],
    product_category: 'squid',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Abalone Can 罐头鲍鱼 425g',
    product_picture: ['https://drive.google.com/uc?id=1ZIwxvXP5_Nl-dUygrJF0rGWjx7N2lyca', 'https://drive.google.com/uc?id=166oj7nx61xlDOO0T5WCyhOVGswF8CbHe'],
    product_category: 'special',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Abalone Can Bundle 罐头鲍鱼 3x425g',
    product_picture: ['https://drive.google.com/uc?id=1c_58KLFRrP3dGrayl_FKdpCL1WDUyVPi'],
    product_category: 'special',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Caviar 鱼子酱 100g',
    product_picture: ['https://drive.google.com/uc?id=1OYSLYb8_O2Rb1ww4DF4ILayhY97rpmgL'],
    product_category: 'special',
    product_price: '32',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Caviar Bundle 鱼子酱 3x100g',
    product_picture: ['https://drive.google.com/uc?id=1NjevIfnBGpL40T0cJ3Vn-rpG9RqONDoY'],
    product_category: 'special',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chuka Hotate 调味扇贝唇 300g',
    product_picture: ['https://drive.google.com/uc?id=1u9EXi4zc80Zo4TNkfC47gEWW6mFttuJH', 'https://drive.google.com/uc?id=1S4rThJEZfEqQng39rKursL2NJhmxXTkB'],
    product_category: 'special',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Seasoned Octopus Salad (Mala) 调味章鱼 (麻辣味) 300g',
    product_picture: ['https://drive.google.com/uc?id=1cHpF0B8zEnLXYtFUCAbEDDeJgEcPRuMC', 'https://drive.google.com/uc?id=1I4mVehW7MTw8ECdPgJIRruiolxXJPD--'],
    product_category: 'special',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Seasoned Sea Snail Salad (Wasabi) 调味海螺片 (芥末味) 300g',
    product_picture: ['https://drive.google.com/uc?id=12l3DCl3ng0qQ6vn87qXOl1F3O6ck-grT', 'https://drive.google.com/uc?id=1NHuHbfnGFE1c2ZiRt6yJRFbRSor5MFHX'],
    product_category: 'special',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chuka Wakame 日式凉拌海带 450g',
    product_picture: ['https://drive.google.com/uc?id=1Z46CukqlUqVTtSSgCcbk0lWSs1djgQBg', 'https://drive.google.com/uc?id=193ZX_ZJ0PpuNZ9HOt1kPaWyPRh4ARWTB'],
    product_category: 'special',
    product_price: '12.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Ebi Tempura 香脆面包虾 (8pcs/pkt)',
    product_picture: ['https://drive.google.com/uc?id=1zSsd4O2w0Unhl35-QZft6nopWkeYbiZs', 'https://drive.google.com/uc?id=1FPgBQep6hoCKhUW9dxDHq_SBHWNegn1R'],
    product_category: 'special',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Ebiko Orange 虾卵 500g',
    product_picture: ['https://drive.google.com/uc?id=1HI1w7Pc5rqULK04WpE7yGInAzjyp0k4s'],
    product_category: 'special',
    product_price: '45',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Ebiko Orange 虾卵 50g',
    product_picture: ['https://drive.google.com/uc?id=1i33YYWDdUJXPpahhSTS97zjAxNli8Xkl'],
    product_category: 'special',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tobiko Orange 鱼卵 50g',
    product_picture: ['https://drive.google.com/uc?id=1lQg3-XkCjZ8yFZCl_ugMbOMitVtlht83'],
    product_category: 'special',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tobiko Orange 鱼卵 500g',
    product_picture: ['https://drive.google.com/uc?id=1A7sfcB-DcLc7Dixxwl-c-L-ZlNtDw80q'],
    product_category: 'special',
    product_price: '45',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fish Maw 鱼鳔 100g',
    product_picture: ['https://drive.google.com/uc?id=1U-zbMXRiF_rQdTkuyqi-eQITk_fKV4-C', 'https://drive.google.com/uc?id=1v-dXt4-jfB3UxRMOw_SJkUU-IZ9MRtGU'],
    product_category: 'special',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fo Tiao Qiang 佛跳墙 200g',
    product_picture: ['https://drive.google.com/uc?id=1yP5v4QxQN4X_T1-1HYTSmuKRGjYn4zYS', 'https://drive.google.com/uc?id=1Nt08epZ0FDZf9rzgzqen1SgzexrbDkMO'],
    product_category: 'special',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fo Tiao Qiang Bundle 佛跳墙 3x200g',
    product_picture: ['https://drive.google.com/uc?id=1UOnHtsVq25KtJ4cUtXIVJpMu2TXcCLsO'],
    product_category: 'special',
    product_price: '75',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fo Tiao Qiang Bundle 佛跳墙 5x200g',
    product_picture: ['https://drive.google.com/uc?id=1bwLBtYZSGwXOd4RiJucox7_dQuWto-Y5'],
    product_category: 'special',
    product_price: '110',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Imitation Shark Fin 碗仔翅 500g',
    product_picture: ['https://drive.google.com/uc?id=1NjgwQ9AqLM7QAN_XjL_5fiI-1XsMT7WS'],
    product_category: 'special',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shark Fin (Real) 鲍翅 500g',
    product_picture: ['https://drive.google.com/uc?id=1uMbN7lymH_NnD7soeQrgQp8mvHYf9gCf'],
    product_category: 'special',
    product_price: '53',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japan Tamagoyaki 日本厚烧玉子 500g',
    product_picture: ['https://drive.google.com/uc?id=1CJTdUAPbh1Hq4sSUhmgTOmt-6IYlrkIR', 'https://drive.google.com/uc?id=1Qud1qWUjOkeOSHMfaBNUniCC1wUZtpEm'],
    product_category: 'special',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Scallop Sliders 培根带子 260g',
    product_picture: ['https://drive.google.com/uc?id=1ghGazEn4O7PWXKM1d_JvRF_HQ4K5TENj', 'https://drive.google.com/uc?id=1XDylDLpo4e6liKTQZTNxvZcAzT4_NEAz'],
    product_category: 'special',
    product_price: '30',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sea Urchin Platter 海胆 (L) 100g',
    product_picture: ['https://drive.google.com/uc?id=1uXw1d_mgR7e9SagSRH7VjPFR4sjitXq-', 'https://drive.google.com/uc?id=1cMC0OIO9ftJ6hgN2mk_GD65b6lMmimJy'],
    product_category: 'special',
    product_price: '60',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Abalone Slice 鲍鱼片 300g',
    product_picture: ['https://drive.google.com/uc?id=1dWj4VhVSWngSK6uSpBdh-2IHwMU8J4HR'],
    product_category: 'hotpot',
    product_price: '8.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japan King Crab Filament Stick 日本帝王蟹柳 250g',
    product_picture: ['https://drive.google.com/uc?id=1pXp-0JW0XDuQoH7RhQb-DMB1CrSnJwfj'],
    product_category: 'hotpot',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sea Cucumber  (Big) 海参  1kg',
    product_picture: ['https://drive.google.com/uc?id=1gstme7FevxG9Ix0o_JEGUOY_xgFMWNf3', 'https://drive.google.com/uc?id=1Nowr1Kwq4J1gtmOhXP84wAPULRSFYB0M'],
    product_category: 'hotpot',
    product_price: '83',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sea Cucumber 海参  1kg',
    product_picture: ['https://drive.google.com/uc?id=1Z4jrtV7yTFAOZxoAgdzG0Z4AGagv2NqU', 'https://drive.google.com/uc?id=1Nowr1Kwq4J1gtmOhXP84wAPULRSFYB0M'],
    product_category: 'hotpot',
    product_price: '78',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sea Cucumber 海参 500g',
    product_picture: ['https://drive.google.com/uc?id=1Z4jrtV7yTFAOZxoAgdzG0Z4AGagv2NqU', 'https://drive.google.com/uc?id=1Nowr1Kwq4J1gtmOhXP84wAPULRSFYB0M'],
    product_category: 'hotpot',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Cheese Tofu 芝士豆腐 500g',
    product_picture: ['https://drive.google.com/uc?id=1G_PelPa0_AmXgVkxqo_CbTqT3sGphqCI'],
    product_category: 'hotpot',
    product_price: '9',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Seafood Tofu 海鲜豆腐 500g',
    product_picture: ['https://drive.google.com/uc?id=1tao4NIBnDDmYn81UnlqLhn7_siPQj5o3'],
    product_category: 'hotpot',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shrimp Paste 虾滑 150g',
    product_picture: ['https://drive.google.com/uc?id=11R8bw-_UnZjdQ5-NGqImRfgbjIJHSLlp'],
    product_category: 'hotpot',
    product_price: '9',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tobiko Shrimp Paste 鱼卵虾滑 150g',
    product_picture: ['https://drive.google.com/uc?id=1Ii9tmdWTpmk3ftuK1WFOAB9-PqHNXfdJ', 'https://drive.google.com/uc?id=1Q-G1o-pVW95RNTTdLUU1bQd_Mmx_tUCa'],
    product_category: 'hotpot',
    product_price: '9',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Nikudo Fish Paste 鱼滑 200g',
    product_picture: ['https://drive.google.com/uc?id=1ZWFcB655v9IIOqChu4oanqANlNMN-TWu', 'https://drive.google.com/uc?id=1XJZzzJrQ46uLUcIRT9iHLRv4-XD3hTbb'],
    product_category: 'hotpot',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Australian Beef Slice 牛肉片500g',
    product_picture: ['https://drive.google.com/uc?id=1HDMoVeg8I561Jk1CSfzYAcEefHD6W-n-'],
    product_category: 'hotpot',
    product_price: '30',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shabu Shabu Pork 猪肉片 300g',
    product_picture: ['https://drive.google.com/uc?id=12gG1FTuz5_941pEhEkOtm5q0h_h3wTjW'],
    product_category: 'hotpot',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shabu Shabu Pork Belly 五花肉片 300g',
    product_picture: ['https://drive.google.com/uc?id=1f63GPUplBjSAYa5kWTZGrF0cNw6PC1d8'],
    product_category: 'hotpot',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Meatballs 猪肉丸 400g',
    product_picture: ['https://drive.google.com/uc?id=1uOBwSGwjIzzITptZOTnwAL7xbe1_MxDZ'],
    product_category: 'hotpot',
    product_price: '11.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mince Meat 肉碎  (S) 300g',
    product_picture: ['https://drive.google.com/uc?id=1Qe57kjUeeqidmU9cfKtiIcGq9QQm9Ed3'],
    product_category: 'hotpot',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mince Meat 肉碎 (L) 600g',
    product_picture: ['https://drive.google.com/uc?id=1yatLy-4s-tz4mbJCuGA8ypV8bu4V6WUj'],
    product_category: 'hotpot',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Flower Squid 花枝 1kg',
    product_picture: ['https://drive.google.com/uc?id=1lUWsZdBkQQcsN_nRyFnWQW5FaTAxVAlE'],
    product_category: 'hotpot',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fish Maw 鱼鳔 100g',
    product_picture: ['https://drive.google.com/uc?id=1Z7TnMnrTrjFUkQsP4JCFIi8Juc-jHNCe', 'https://drive.google.com/uc?id=1TV2HvKx27-K1JnSFZ-bp5923OBFe_PvN'],
    product_category: 'hotpot',
    product_price: '16',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop 半壳大带子 1kg',
    product_picture: ['https://drive.google.com/uc?id=1o1iRdkquDxgI7AqpxpzXe8-L5XjcrpIR', 'https://drive.google.com/uc?id=1Y4uFvWIn0dUdDdFf921W6Gw0rhhJJcE6'],
    product_category: 'hotpot',
    product_price: '26',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop (Pink) 半壳带子 (粉壳)  (S) 500g',
    product_picture: ['https://drive.google.com/uc?id=1gmeMr0Yo4Rwqwet4IDjdzV_DO9aiw9G0'],
    product_category: 'hotpot',
    product_price: '17.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop (Pink) 半壳带子 (粉壳) (M) 500g',
    product_picture: ['https://drive.google.com/uc?id=1gmeMr0Yo4Rwqwet4IDjdzV_DO9aiw9G0'],
    product_category: 'hotpot',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japanese Hotate Scallop 日本扇贝 (S 100/150) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1BGsaHDE1vdFjRZOZYqoqvILAILSP3w4V'],
    product_category: 'hotpot',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japanese Hotate Scallop 日本扇贝 (L 60/80) 1kg',
    product_picture: ['https://drive.google.com/uc?id=116kQ9lCGDiSolNpffY-dcgW7FDKV_sSn'],
    product_category: 'hotpot',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops 加拿大带子 (XL 10/20) 500g',
    product_picture: ['https://drive.google.com/uc?id=1YZ2ECp9VR4o32qxPpLgzzqtu4GcKn2I-'],
    product_category: 'hotpot',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g',
    product_picture: ['https://drive.google.com/uc?id=1o7TC16Gw0z1zj6w4cdPeWsW4fLfF10pc'],
    product_category: 'hotpot',
    product_price: '99',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops 加拿大带子 (L 20/30) 500g',
    product_picture: ['https://drive.google.com/uc?id=1gC9lYBFn5oyyVJmGwiKTueLgdCAa3E4F'],
    product_category: 'hotpot',
    product_price: '32.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle加拿大带子 (L 20/30) 500g',
    product_picture: ['https://drive.google.com/uc?id=1EEoWVdsf9Obcd_Aezyanhni6kmHmBvl5'],
    product_category: 'hotpot',
    product_price: '90',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (XL 10/20) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1vqdmMM8nI2JgAdeNAdY-GsV3ipkCEQVK'],
    product_category: 'hotpot',
    product_price: '70',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (L 20/30) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1cftiXJUuLEraEZoejE3ZISUl9Jmv0GrV'],
    product_category: 'hotpot',
    product_price: '65',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (M 30/40) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1yrmEJKqj0or3tSris5B84pT151Z5FiwL'],
    product_category: 'hotpot',
    product_price: '60',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (S 60/80) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1SqnjeNvAK3R9hH1MA1HPHSRLL0fM09hr'],
    product_category: 'hotpot',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (81/100) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1TYqnIHg8vHfjs-jEuOuIEludmw3VNWWJ'],
    product_category: 'hotpot',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (41/50) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1csOJTT9p9fxgWyogoRyGd0M4a6yRuOuy'],
    product_category: 'hotpot',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Breaded Cod Fish 300g',
    product_picture: ['https://drive.google.com/uc?id=1s0DL2n0SNqtlrQ270KhbjVjRHKI8yz-b', 'https://drive.google.com/uc?id=1pS7MmOHkYR1ug3_MZgQs6wO4D8RvU0JL'],
    product_category: 'fish',
    product_price: '12',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Cod Fillet (Miso) 鳕鱼片(味增) 454g',
    product_picture: ['https://drive.google.com/uc?id=1xcKefHLljL3hu_oZDyAfX4WQhazZALdJ', 'https://drive.google.com/uc?id=195BDpI6NiyVXyClAN4_WpsG3pwx5Hrs0'],
    product_category: 'fish',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Cod Fish 鳕鱼 (±250g/pc) RM128/kg',
    product_picture: ['https://drive.google.com/uc?id=1-kKB2Ydx1WqzGXDgsxdclPTEfKRbUF9g'],
    product_category: 'fish',
    product_price: '32',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Halibut Fillet 大比目鱼片 (±150g/pc) by pieces',
    product_picture: ['https://drive.google.com/uc?id=1kEMHWzmQQiOoF3H49tIuu5LRzK55PDD3'],
    product_category: 'fish',
    product_price: '8.25',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Halibut Fillet 大比目鱼片 (1kg/pkt) ',
    product_picture: ['https://drive.google.com/uc?id=1kEMHWzmQQiOoF3H49tIuu5LRzK55PDD3'],
    product_category: 'fish',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Halibut Fillet (Miso) 比目鱼片 (味增) 454g',
    product_picture: ['https://drive.google.com/uc?id=1xQgaxGS49q46fqOVvl8MwBjUAFpEAyUE', 'https://drive.google.com/uc?id=1NSDTiBoAsAjvLy1D1q8_CALbTLO3L_Fm'],
    product_category: 'fish',
    product_price: '25',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Halibut Steak 大比目鱼 (±250g/pc) by pieces',
    product_picture: ['https://drive.google.com/uc?id=15foO6cHP9QEVyxXl664xAi_aKhJ19yi5'],
    product_category: 'fish',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Patin Slice 巴丁鱼片 1kg',
    product_picture: ['https://drive.google.com/uc?id=1Dxz0bqtGBl-VBBRAq5PB65CBSJhvP_gQ'],
    product_category: 'fish',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Patin Slice Bundle 巴丁鱼片 3x1kg',
    product_picture: ['https://drive.google.com/uc?id=1weFD7QJGiYJO04xlLLjyq4dtO2AKaUID'],
    product_category: 'fish',
    product_price: '27',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Red Snapper Fillet (Miso) 红鱼片 (味增) 454g',
    product_picture: ['https://drive.google.com/uc?id=1I2LnoyGS7wkzKH4WWntlfji3urVTd8pj', 'https://drive.google.com/uc?id=1MVBV--lIfNIdVeUoiIGq7KO_DxijUYlY'],
    product_category: 'fish',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet 鲭鱼 500g',
    product_picture: ['https://drive.google.com/uc?id=1JsZD6GRIOT36WO67txbGqaAxaUdPSeBm'],
    product_category: 'fish',
    product_price: '17',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet (Fried) 鲭鱼片 (炸) 80g',
    product_picture: ['https://drive.google.com/uc?id=1cb-HLpptDK7R61Hguk-ixuGm0LVq_6BY', 'https://drive.google.com/uc?id=1xup5Hae1q19-4Utb89Hqdnxw5EaY7PC8'],
    product_category: 'fish',
    product_price: '6',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet (Miso) 鲭鱼片 (味增) 1pc/pkt',
    product_picture: ['https://drive.google.com/uc?id=1eVziO9PbrXX3LnTLEQ7sBsNO8O1czJ1a', 'https://drive.google.com/uc?id=1AvqHXEj8mi9Cx_Fgtl_hFH_dP1E0bDK_'],
    product_category: 'fish',
    product_price: '6',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet (Salt Baked) 鲭鱼片 (盐烤) 1pc/pkt',
    product_picture: ['https://drive.google.com/uc?id=1mr8ahOTu6Yo-04nKumKRBmdF2VuXj6xX', 'https://drive.google.com/uc?id=1wYfkanUvXlBta1F1u4aJCW2qmpyO6GEZ'],
    product_category: 'fish',
    product_price: '6',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet (Mix & Match) 鲭鱼片 3pkts',
    product_picture: ['https://drive.google.com/uc?id=1_LrQrjMLz76AZ_olaQdSc08J7TwTd8Zb'],
    product_category: 'fish',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shime Saba (Vinegered Mackerel)  腌制醋鲭鱼 (1pc/pkt)',
    product_picture: ['https://drive.google.com/uc?id=16zx8RzS6yNLIlfAaJU9sb2dBDPJrvyd4'],
    product_category: 'fish',
    product_price: '6',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Teriyaki Saba 照烧鲭鱼 180g',
    product_picture: ['https://drive.google.com/uc?id=1QK7myKQOBzS73mAEyFZE4euPeZcoVyBe'],
    product_category: 'fish',
    product_price: '13',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Salmon Fillet 三文鱼片 （±180g/pc) order by pieces',
    product_picture: ['https://drive.google.com/uc?id=1bIe0xabXqk3yLNESueFcf3sr3Y5CGlLt'],
    product_category: 'fish',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Salmon Fillet (uncut) 三文鱼片 (大) (1.2-2kg/pc)',
    product_picture: ['https://drive.google.com/uc?id=1nxozBKQboFfZUjb8TheLHMsvm63QQ0GW'],
    product_category: 'fish',
    product_price: '53',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Salmon Steak 三文鱼排 (±200g/pc)order by pieces',
    product_picture: ['https://drive.google.com/uc?id=1LBYB_qZ1fHdJ2LREdK9HymVuvyi1p_Vn'],
    product_category: 'fish',
    product_price: '38',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Salmon Head 三文鱼头 (700-800g)',
    product_picture: ['https://drive.google.com/uc?id=1vf5OoJ_ISYA_o7nK6kmkqH_ag5kuXYLV', 'https://drive.google.com/uc?id=1R5OvGLFEHGwzUk8CDokTbmm3lXulCc8p'],
    product_category: 'fish',
    product_price: '12',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Smoked Salmon 烟熏三文鱼 100g',
    product_picture: ['https://drive.google.com/uc?id=1WmtouqbucQ1YfPbjFhhPezMilFGDsD2R'],
    product_category: 'fish',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Shishamo 多春鱼 (7-8pcs/pkt)',
    product_picture: ['https://drive.google.com/uc?id=1r10-CTSEThM1N0cD3cLBjzXU5VDRnrC_'],
    product_category: 'fish',
    product_price: '12',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Siakap Fillet 石甲鱼 (400-450g)',
    product_picture: ['https://drive.google.com/uc?id=1UMmF1aNGeVnPRfjqxNwS8FJOc1vID7iQ'],
    product_category: 'fish',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tilapia (Premium Quality) 顶级金凤鱼片 (200-250g)',
    product_picture: ['https://drive.google.com/uc?id=1Xg3ir6Rj1ZQGstzsVhQyOS0TK1CHeiWg'],
    product_category: 'fish',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tilapia (Premium Quality) Bundle 顶级金凤鱼片 3pkts',
    product_picture: ['https://drive.google.com/uc?id=11z5Qyn6wCuRPA5CfYfbVWa0qexUmNBRv'],
    product_category: '',
    product_price: '',
    product_sale_price: null,
    product_bulk_price: null,
    product_weight: '',
    product_status: null,
    product_bulk_quantity: null,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tuna Fillet 鲔鱼 (±450g/pc)',
    product_picture: ['https://drive.google.com/uc?id=1JJjGx1XtnSkHZ00_m5Acbr_SLubceppM'],
    product_category: 'fish',
    product_price: '60/kg',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi 鳗鱼 200g',
    product_picture: ['https://drive.google.com/uc?id=1rDDqvKkynXdT-IoJY04qiKtODwK2YMeD'],
    product_category: 'fish',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi 鳗鱼 310g',
    product_picture: ['https://drive.google.com/uc?id=1_xXfYoIeuRl_r7gIYEzHQJujRIcbg959'],
    product_category: 'fish',
    product_price: '30',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi 鳗鱼 380g',
    product_picture: ['https://drive.google.com/uc?id=1_rlC1IEgYvQrWmE3PWANJV_bhtJRP32U'],
    product_category: 'fish',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x310g',
    product_picture: ['https://drive.google.com/uc?id=1YhtuynaI7a5L9R-KnAGMuAoorW20TEXt'],
    product_category: 'fish',
    product_price: '88',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x200g',
    product_picture: ['https://drive.google.com/uc?id=1w9b7ITsiizgoUb5f63qnkvDoXKggaEHl'],
    product_category: 'fish',
    product_price: '48',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x380g',
    product_picture: ['https://drive.google.com/uc?id=1_rlC1IEgYvQrWmE3PWANJV_bhtJRP32U'],
    product_category: 'fish',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Abalone Can Bundle 罐头鲍鱼 3x425g',
    product_picture: ['https://drive.google.com/uc?id=1c_58KLFRrP3dGrayl_FKdpCL1WDUyVPi'],
    product_category: 'bundle promotion',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Caviar Bundle 鱼子酱 3x100g',
    product_picture: ['https://drive.google.com/uc?id=1gTEv9tJeRnRpieaedHU_Ngpylq_z2ZgS'],
    product_category: 'bundle promotion',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g',
    product_picture: ['https://drive.google.com/uc?id=1iXckAFYSq7ZFH_MS9SmYu8UNb1Eptfgw'],
    product_category: 'bundle promotion',
    product_price: '99',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle加拿大带子 (L 20/30) 500g',
    product_picture: ['https://drive.google.com/uc?id=1kQCuIBRW7pJ05zqzWiNTztLOOObUERYn'],
    product_category: 'bundle promotion',
    product_price: '90',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fo Tiao Qiang Bundle 佛跳墙 3x200g',
    product_picture: ['https://drive.google.com/uc?id=1VvqsqxXAcS1hHlc4qxr1rGtxp-cLZLPU'],
    product_category: 'bundle promotion',
    product_price: '75',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Fo Tiao Qiang Bundle 佛跳墙 5x200g',
    product_picture: ['https://drive.google.com/uc?id=1qwxsWyUrmrm0RV-qRpshlzrWRdhBG873'],
    product_category: 'bundle promotion',
    product_price: '110',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Edamame Bundle日本毛豆 3x500g',
    product_picture: ['https://drive.google.com/uc?id=14ZQjd0sNp7jKbsQR1akJD4qdBUukPN9r'],
    product_category: 'bundle promotion',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Berries Bundle 3pkts',
    product_picture: ['https://drive.google.com/uc?id=1gs7cpIouSjkdNFNAl5J4Or_k-DEGsTDe'],
    product_category: 'bundle promotion',
    product_price: '36',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Smoked Duck Bundle 烟熏鸭胸肉 3pkts',
    product_picture: ['https://drive.google.com/uc?id=1_3_ITj5yRFzlxj4i6IhW0sneNYfTXvUq'],
    product_category: 'bundle promotion',
    product_price: '21',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Saba Fillet (Mix & Match) 鲭鱼片 3pkts',
    product_picture: ['https://drive.google.com/uc?id=17ZDGMehxQrLuNlzAxXo4MWIalhUnJ0Pv'],
    product_category: 'bundle promotion',
    product_price: '15',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x200g',
    product_picture: ['https://drive.google.com/uc?id=1BjFBzCmiSiH9SxIJdCuy_ZxcSHxbg-PT'],
    product_category: 'bundle promotion',
    product_price: '48',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x310g',
    product_picture: ['https://drive.google.com/uc?id=1JeIooxvfgjtICOVYDbrK88SeV7VrJ0R6'],
    product_category: 'bundle promotion',
    product_price: '88',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Unagi Bundle 鳗鱼 3x380g',
    product_picture: ['https://drive.google.com/uc?id=1_rlC1IEgYvQrWmE3PWANJV_bhtJRP32U'],
    product_category: 'bundle promotion',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Tilapia (Premium Quality) Bundle 顶级金凤鱼片 3pkts',
    product_picture: ['https://drive.google.com/uc?id=11z5Qyn6wCuRPA5CfYfbVWa0qexUmNBRv'],
    product_category: 'bundle promotion',
    product_price: '21',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'Patin Slice Bundle 巴丁鱼片 3x1kg',
    product_picture: ['https://drive.google.com/uc?id=1IPKOpaOOFx3Iwmtq39zwVcLy_AW9-1qY'],
    product_category: 'bundle promotion',
    product_price: '27',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 3,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 400-600g',
    product_picture: ['https://drive.google.com/uc?id=1WEaWLhEAg4EEFMSLSN-i_HfFXV_2MDt6'],
    product_category: 'shellfish',
    product_price: '50',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 600-800g',
    product_picture: ['https://drive.google.com/uc?id=1xKKdG8peNb7wRu0F1UjJx2QFwgHyb2wu'],
    product_category: 'shellfish',
    product_price: '80',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 800-1000g',
    product_picture: ['https://drive.google.com/uc?id=1c84wby5lGR0xbfOCio1clZ7awSXJl5g5'],
    product_category: 'shellfish',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 1-1.2kg',
    product_picture: ['https://drive.google.com/uc?id=1glabHbvFok_ujS7GCNXXkiXg2-liHBtL'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 1.2-1.4kg',
    product_picture: ['https://drive.google.com/uc?id=1n1qMcfJ1l9ksh6_4qgzDRbHjH15q-weH'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 1.4-1.6kg',
    product_picture: ['https://drive.google.com/uc?id=19o79q1_Nr3pqhKpN-KQxGEnDjNFYgciN'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 1.6-1.8kg',
    product_picture: ['https://drive.google.com/uc?id=17S1gtiHkmNfS6oP4XyrRU12YD-xGMAdr'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 1.8-2kg',
    product_picture: ['https://drive.google.com/uc?id=1sP4UUZe6qwTB3fmxvQJ7v5Iijn1xrrlu'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'King Crab 帝王蟹 2kg Up',
    product_picture: ['https://drive.google.com/uc?id=1SlhUSa3d8TIObrx_6Hcu4qZyFMBgde85'],
    product_category: 'shellfish',
    product_price: '108',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Live Mud Crab 活螃蟹 (2nos/kg, 3nos/kg, 4nos/kg, Egg Crab)',
    product_picture: ['https://drive.google.com/uc?id=1daZf0OdMf20FKiiQhHRdcEyYJ9k5c8XM', 'https://drive.google.com/uc?id=1sunMZo-6rZJzUcI2icSUCDXsIVcwwgGV'],
    product_category: 'shellfish',
    product_price: '',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: 'Market Price',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Soft Shell Crab 软壳蟹 (150-200g/nos)',
    product_picture: ['https://drive.google.com/uc?id=1DIcXT2MKXjV9vuilQCIwPn2Kb1KatMHO', 'https://drive.google.com/uc?id=1ksu_UrbvmJCR_Cf5WY13l04d2RYkI4r9'],
    product_category: 'shellfish',
    product_price: '45',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crab Meat (Mix) 螃蟹肉 400g',
    product_picture: ['https://drive.google.com/uc?id=1I8LnKX20hb8GuRzaeBsNKtdXp8Bgr9jc', 'https://drive.google.com/uc?id=1NEA_K4Fy_JavXHFoPzgQYUakaV1zrqdt'],
    product_category: 'shellfish',
    product_price: '30',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crab meat (Red) 螃蟹肉 (蟹钳肉) 400g',
    product_picture: ['https://drive.google.com/uc?id=1rgdu4RT5sNRI0GwuKXsMAaPAHMU-XmqF', 'https://drive.google.com/uc?id=1NEA_K4Fy_JavXHFoPzgQYUakaV1zrqdt'],
    product_category: 'shellfish',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crab Meat (Red) 螃蟹肉 (蟹钳肉) 800g',
    product_picture: ['https://drive.google.com/uc?id=1KmdXilS9tOZJwedGSdGaLmj1gqZrEIv1', 'https://drive.google.com/uc?id=1NEA_K4Fy_JavXHFoPzgQYUakaV1zrqdt'],
    product_category: 'shellfish',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crab Meat (White) 螃蟹肉 (白蟹肉) 400g',
    product_picture: ['https://drive.google.com/uc?id=10jhr5VplJkXlHV6xYxDrtSRwO-AJRVFx', 'https://drive.google.com/uc?id=1NEA_K4Fy_JavXHFoPzgQYUakaV1zrqdt'],
    product_category: 'shellfish',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crab Meat (White) 螃蟹肉 (白蟹肉) 800g',
    product_picture: ['https://drive.google.com/uc?id=17uIgutFV2C3R5oPCcw8hSq0dTh0RMlQX', 'https://drive.google.com/uc?id=1NEA_K4Fy_JavXHFoPzgQYUakaV1zrqdt'],
    product_category: 'shellfish',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Crayfish Tailmeat with Shell 麻辣虾尾 300g',
    product_picture: ['https://drive.google.com/uc?id=1TZlq4ucESnKFP02rN4Wr9kN-891l8iu0'],
    product_category: 'shellfish',
    product_price: '27',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Garlic Crayfish Whole 蒜香小龙虾 700g',
    product_picture: ['https://drive.google.com/uc?id=1HyfLWsMI8rUF28P5Nx3OBxau4VZh6Ed5', 'https://drive.google.com/uc?id=1IvIyawveJgsY3hU_kNP0U3eDAdUwlSYf'],
    product_category: 'shellfish',
    product_price: '37',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Spicy Crayfish Whole 麻辣小龙虾700g',
    product_picture: ['https://drive.google.com/uc?id=1saA6pSbA0a6cHhCYLhJCMuRNIp5UCZgJ', 'https://drive.google.com/uc?id=16V7aamSX7HBzAWNxY8B5eyggWyobLhn5'],
    product_category: 'shellfish',
    product_price: '37',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Thirteen Spices Crayfish Whole 十三香小龙虾 700g',
    product_picture: ['https://drive.google.com/uc?id=1DWkUwPaLyXGQQS9HxRq0A5WY4_vufk6E', 'https://drive.google.com/uc?id=1ZA88XAcHIdRNQtAkbHBkwQutJIK6lS75'],
    product_category: 'shellfish',
    product_price: '37',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mala Seafood 莱克三鲜 400g',
    product_picture: ['https://drive.google.com/uc?id=1K1oiXsMQFx2D11WnXT8o0bZgrOUbz7kN', 'https://drive.google.com/uc?id=13kRmveVuTVjLD5hSK7NXnxitUD6T6W0z'],
    product_category: 'shellfish',
    product_price: '22',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Lobster 龙虾 (700g up)',
    product_picture: ['https://drive.google.com/uc?id=1bl1DNHY4uvMiocLlsu5Q-LiXjWIBvN0M', 'https://drive.google.com/uc?id=1720sWQKowTvD86BTIGmq56Y7pMMQyowW'],
    product_category: 'shellfish',
    product_price: '100',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Lobster 龙虾 (400/500)',
    product_picture: ['https://drive.google.com/uc?id=1MbZknjqen_0v1gsKcm-YitCZJWEfR7_k', 'https://drive.google.com/uc?id=1720sWQKowTvD86BTIGmq56Y7pMMQyowW'],
    product_category: '',
    product_price: '90',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Scampi U7 大头虾 (200-300g/nos)',
    product_picture: ['https://drive.google.com/uc?id=1UE1mSfSxe7P9HkF8jnGm5ihwqYrWkRl_'],
    product_category: 'shellfish',
    product_price: '70',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '1kg',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'White Prawn 明虾 (L 20/30)',
    product_picture: ['https://drive.google.com/uc?id=1CoaUMW5Ct6-pWSgwz58DMKvsxhZwjXba'],
    product_category: 'shellfish',
    product_price: '45',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'White Prawn 明虾 (M 31/40)',
    product_picture: ['https://drive.google.com/uc?id=1Q0_6O7WQXf2-E4bEnMCUfWjyB77eVqJf'],
    product_category: 'shellfish',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Prawn Meat 虾肉 (L) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1ky9cXAx-lQ0sxB9Gd2UKQDsw01cnhTMG'],
    product_category: 'shellfish',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Prawn Meat 虾肉 (M) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1hTg-vf1-uBqD47jgjMHdvGk0-4LJXfld'],
    product_category: 'shellfish',
    product_price: '38',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Prawn Meat 虾肉 (S) 1kg',
    product_picture: ['https://drive.google.com/uc?id=105tBNyJra_SCaj0ZwKcoTyLnzl7k2_hs'],
    product_category: 'shellfish',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Prawn Meat 虾肉 (XS) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1zCDNRDKh2jSI5FhEghh93sm4G24nYYO6'],
    product_category: 'shellfish',
    product_price: '28',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Mantis Prawn Meat Fresh 新鲜虾姑肉 1kg',
    product_picture: ['https://drive.google.com/uc?id=1p3dnVAgzK__2330GUz5LYoL0RIDTYLIk', 'https://drive.google.com/uc?id=1PJz-15Y5qKxEf-9eLWwkkeeV431JMWZr'],
    product_category: 'shellfish',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Clam (Lala) 啦啦 500g',
    product_picture: ['https://drive.google.com/uc?id=1Is5pPslc6le8Gl6iUCP7FSGZyCEfh2A2'],
    product_category: 'shellfish',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Spicy Clam with Shell 啦啦(辣味) 400g',
    product_picture: ['https://drive.google.com/uc?id=1U-7R3HoN33IwjU-6pe6PxhC4WSA6bsIo'],
    product_category: 'shellfish',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Premium Black Mussels 贻贝 907g',
    product_picture: ['https://drive.google.com/uc?id=15BsiLiLcXN_c8mgq18k0UmAfrwNZJNA6', 'https://drive.google.com/uc?id=14yqctrLB4PrgHPQPARbkTHwCzOPIhcFR'],
    product_category: 'shellfish',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Breaded Scallops 180g',
    product_picture: ['https://drive.google.com/uc?id=1n73ID-YpJgmdrwFSK4ZQ4Gw_xyOiOC6q'],
    product_category: 'scallops',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Scallop Sliders 培根带子 260g',
    product_picture: ['https://drive.google.com/uc?id=1ghGazEn4O7PWXKM1d_JvRF_HQ4K5TENj', 'https://drive.google.com/uc?id=1XDylDLpo4e6liKTQZTNxvZcAzT4_NEAz'],
    product_category: 'scallops',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops 加拿大带子 (XL 10/20) 500g',
    product_picture: ['https://drive.google.com/uc?id=1MmGZrM9Vy3jrSDhSn1olDKTSh8lYWbfH'],
    product_category: 'scallops',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle 加拿大带子 (XL 10/20) 3x500g',
    product_picture: ['https://drive.google.com/uc?id=1AaZtJABENKp5GkKeeRWtIs6rkSa2Uiz_'],
    product_category: 'scallops',
    product_price: '99',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops 加拿大带子 (L 20/30) 500g',
    product_picture: ['https://drive.google.com/uc?id=1bLUyApVAFsoKRXJCqzEudmWsfE16kb1B'],
    product_category: 'scallops',
    product_price: '32.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Canadian Scallops Bundle 加拿大带子 (L 20/30) 500g',
    product_picture: ['https://drive.google.com/uc?id=11dtRWOwhEHNjQtIrUtL8T_7-Ulfkx6om'],
    product_category: 'scallops',
    product_price: '90',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (XL 10/20) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1dckkWU76ViLgrSJuWMlIwlt1k3qY2npe'],
    product_category: 'scallops',
    product_price: '70',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (L 20/30) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1UCcBJsBBiMOCVaMS5w9-1vm45JG16FNq'],
    product_category: 'scallops',
    product_price: '65',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (M 30/40) 1kg',
    product_picture: ['https://drive.google.com/uc?id=16t7gKjALJ79laPrYTArkeRZ8TtZuVPw1'],
    product_category: 'scallops',
    product_price: '60',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (S 60/80) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1yskHg_9_OQ92N_OupwuKdeAqHm7FQb8p'],
    product_category: 'scallops',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (81/100) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1TYqnIHg8vHfjs-jEuOuIEludmw3VNWWJ'],
    product_category: 'scallops',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Hokkaido Scallops 北海道带子 (41/50) 1kg',
    product_picture: ['https://drive.google.com/uc?id=1csOJTT9p9fxgWyogoRyGd0M4a6yRuOuy'],
    product_category: 'scallops',
    product_price: '55',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop 半壳大带子 1kg',
    product_picture: ['https://drive.google.com/uc?id=1NC3yRD5UOo1kVYqAuv8tF5EHbRtrzZCd', 'https://drive.google.com/uc?id=1fZqfNIlVGPimhs8Z38ZKDTDdPWHkAug3'],
    product_category: 'scallops',
    product_price: '26',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop (Pink) 半壳带子 (粉壳)  (S) 500g',
    product_picture: ['https://drive.google.com/uc?id=1akDQnlP8Br6LKEfO74VUfX2xkuDZSLz2'],
    product_category: 'scallops',
    product_price: '17.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Half Shell Scallop (Pink) 半壳带子 (粉壳) (M) 500g',
    product_picture: ['https://drive.google.com/uc?id=1akDQnlP8Br6LKEfO74VUfX2xkuDZSLz2'],
    product_category: 'scallops',
    product_price: '20',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japanese Hotate Scallop 日本扇贝 (S 100/150) 1kg',
    product_picture: ['https://drive.google.com/uc?id=10hckAbOXa-pFCmWZyOYPRO2RGPpLDi5J'],
    product_category: 'scallops',
    product_price: '35',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Japanese Hotate Scallop 日本扇贝 (L 60/80) 1kg',
    product_picture: ['https://drive.google.com/uc?id=164XPlaWsBrgW15QAZ6cEYfpyvmQXpr2w'],
    product_category: 'scallops',
    product_price: '40',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Edamame 日本毛豆 500g',
    product_picture: ['https://drive.google.com/uc?id=1vOqp49oZasQi-AUFrZu1D-MMEP02GB9k'],
    product_category: 'vegetables',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Edamame Bundle 日本毛豆 3x500g',
    product_picture: ['https://drive.google.com/uc?id=105fWwnA2IYnsfBreHT-eREI-gT5SGtPb'],
    product_category: 'vegetables',
    product_price: '18',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Edamame (peeled) 去壳毛豆 500g',
    product_picture: ['https://drive.google.com/uc?id=1OUMMTg-Xz7bn3rMTN7LAvLmuqOOMAdDA'],
    product_category: 'vegetables',
    product_price: '9',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'French Fries (Crinkle Cut) 薯条 1kg',
    product_picture: ['https://drive.google.com/uc?id=1C6xM2-t1jrZDkk1QSg2-xJ8SY2J4Fff_'],
    product_category: 'vegetables',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'French Fries (Shoestring) 薯条 1kg',
    product_picture: ['https://drive.google.com/uc?id=15gMjZn49myNkCRhjvNwh9Zt2hEoJ_inY'],
    product_category: 'vegetables',
    product_price: '10',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Sweet Corn 甜玉米 500g',
    product_picture: ['https://drive.google.com/uc?id=185J3VgVkMNGL89Fq0J3h_-6xV5lcHuVu'],
    product_category: 'vegetables',
    product_price: '8',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Chuka Wakame 日式凉拌海带 450g',
    product_picture: ['https://drive.google.com/uc?id=1Z46CukqlUqVTtSSgCcbk0lWSs1djgQBg', 'https://drive.google.com/uc?id=193ZX_ZJ0PpuNZ9HOt1kPaWyPRh4ARWTB'],
    product_category: 'vegetables',
    product_price: '12.5',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Blueberries 冷冻蓝莓 500g',
    product_picture: ['https://drive.google.com/uc?id=1qqQugrKiB1qpg0IN6WF8n8PesWsHzQNS'],
    product_category: 'fruits',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Mixed Berries 冷冻混莓 500g',
    product_picture: ['https://drive.google.com/uc?id=1atCjA5AmZVIRQneUXkKJqg1HG-NaeiH9'],
    product_category: 'fruits',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Mixed Fruits 冷冻水果 500g',
    product_picture: ['https://drive.google.com/uc?id=156GNRwHn7PsA2H9gTPzC1afmA7RAOXms'],
    product_category: 'fruits',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Rasberries 冷冻山莓 500g',
    product_picture: ['https://drive.google.com/uc?id=1Mj9SumWjfFFFNZa9c3Wx0xLpWeSMUNjn'],
    product_category: 'fruits',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Strawberries 冷冻草莓 500g',
    product_picture: ['https://drive.google.com/uc?id=1ff762ohqFwcexj35E55YtXtiDNlsmA0W'],
    product_category: 'fruits',
    product_price: '14',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
  await Product.create({
    product_name: 'Frozen Berries Bundle 3x500g',
    product_picture: ['https://drive.google.com/uc?id=1SPxvBN6SI5ttzWx9Q6_8I5DXVVgdu-FH'],
    product_category: 'fruits',
    product_price: '36',
    product_sale_price: 0,
    product_bulk_price: 0,
    product_weight: '',
    product_status: true,
    product_bulk_quantity: 0,
    product_featured: false
 })
 
    

  console.log('order seeded');

  process.exit();

});