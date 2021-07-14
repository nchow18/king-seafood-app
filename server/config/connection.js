const mongoose = require('mongoose');
const URI = 'mongodb+srv://nchow18:Home2283!@cluster0.cnzc1.mongodb.net/king-seafood-app?retryWrites=true&w=majority'

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kingseafood', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
