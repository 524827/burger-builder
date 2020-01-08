const connection = require('../connection/connection');
const customerSchema = require('./schema');

class UserModel {
  getCustomerData(callback) {

    const customers = customerSchema.customers.find({}, (err, result) => {
      if (err) throw err
      return callback(null, result);
    });
    /* customers.then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    }); */
    /*  connection.query('SELECT * FROM customers', function (err, result, fields) {
       if (err) return callback(err, null);
       return callback(null, result);
     }); */
  }

  setCustomerData(req, callback) {
    const customer = customerSchema.customers({
      ingredients: {
        salad: req.body.ingredients.salad,
        cheese: req.body.ingredients.cheese,
        bacon: req.body.ingredients.bacon,
        meat: req.body.ingredients.meat,
      },
      customer: {
        cname: req.body.customer.name,
        email: req.body.customer.mailId,
        mobile_no: req.body.customer.mobile_no,
        address: {
          street: req.body.customer.address.street,
          zipcode: req.body.customer.address.zipCode,
          state: req.body.customer.address.state,
          country: req.body.customer.address.country,
        },
      },
    });

    customer.save((err, result) => {
      if (err) {
        return callback(err, null)
      }
      return callback(null, result)
    });

    /* console.log(req.body);
    const address = req.body.customer.address.street + ',' + req.body.customer.address.state + ',' + req.body.customer.address.zipCode + ',' + req.body.customer.address.country;
    const cname = req.body.customer.cname;
    const email = req.body.customer.email;
    const monile_no = req.body.customer.mobile_no;
     const sql = "INSERT INTO customers (cname, address,email,mobile_no) VALUES ()";

    connection.query('SELECT * FROM customers', function (err, result, fields) {
      if (err) return callback(err, null);
      return callback(null, result);
    }); */
  }
}

module.exports = UserModel;