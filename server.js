const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const app = express();
const cors = require('cors');

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

app.use(session(sess));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './build')));

//turn on routes
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`
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
