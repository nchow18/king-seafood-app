const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const app = express();
const cors = require('cors');
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*")
  next();
});

const PORT = process.env.PORT || 3001;
const corsOrigin = 'http://localhost:3000';
const corsOptions = {
  origin: [corsOrigin],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  crossorigin: true,
  optionSuccessStatus:200
}

app.use(session(sess));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './build')));

//turn on routes
app.use(routes);

// IMAGE UPLOADER SERVER DETAILS

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, process.env.IP, () => console.log(`
  ==============================
  NOW LISTENING ON PORT: ${PORT}
  ==============================`));
});




