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

    console.log('order seeded');

    process.exit();

});