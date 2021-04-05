const mongoose = require('mongoose');

//What kind of promise should mongoose use.
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connection established.');
});
