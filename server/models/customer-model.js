const connection = require('../connection/connection');

class UserModel {

  getCustomerData(callback) {
    connection.query('SELECT * FROM customers', function (err, result, fields) {
      if (err) return callback(err, null);
      return callback(null, result);
    });
  }

  setCostomerData() {

  }
}

module.exports = UserModel;