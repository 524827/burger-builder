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
    console.log(req.body);
     const customer = customerSchema.customers({
      customer: {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email_address:req.body.emailId,
        mobile_no: req.body.mobile_no,
        address: {
          street: req.body.street,
          zipcode: req.body.zipCode,
          state: req.body.state,
          country: req.body.country,
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