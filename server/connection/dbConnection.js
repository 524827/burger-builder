const mongoose = require('mongoose');
const config = require('./config');

class MongoDb {


  connect() {
    mongoose.connect('mongodb://localhost:27017/burger_builder', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}
module.exports = MongoDb;