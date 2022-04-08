const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const app = express();
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const PORT = process.env.PORT || 3001;
const corsOrigin = 'http://localhost:3000';

app.use(session(sess));
app.use(cors({
  origin: [corsOrigin],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './build')));

//turn on routes
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// IMAGE UPLOADER SERVER DETAILS

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/image-upload', (req, res) => {
//   console.log('POST request received to /image-upload.');
//   //ADD REQ.BODY FOR TEST VALUE
//   console.log('Axios POST body: ', req.body);
 
//   res.send('POST request recieved on server to /image-upload.');
// })

// const imageUploadPath = 'C:/Users/nc/Desktop/projects/king-seafood-app/public/products';

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, imageUploadPath)
//   },
//   filename: function(req, file, cb) {
//     cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
//   }
// })

// const imageUpload = multer({storage: storage})

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, process.env.IP, () => console.log(`
  ==============================
  NOW LISTENING ON PORT: ${PORT}
  ==============================`));
});

// const express = require('express');
// const routes = require('./controllers');
// const sequelize = require('./config/connection')
// // import sequelize connection

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
// });
