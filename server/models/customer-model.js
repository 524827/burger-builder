const customerSchema = require('./schema');

class UserModel {

  /**
   * @function getCustomerData - function for get order details
   * @param {callback } - callback function
   */
  getCustomerData(callback) {
    customerSchema.customers.find({}, (err, result) => {
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

  /**
   * @function setCustomerData - function for save order details
   * @param {*} req - request
   * @param {*} callback - callback function
   */
 async setCustomerData(req, callback) {

     const customer = new customerSchema.customers({
      customer: {
        first_name: req.body.firstName.value,
        last_name: req.body.lastName.value,
        email_address:req.body.emailId.value,
        mobile_no: req.body.mobile_no.value,
        address: {
          street: req.body.street.value,
          zipcode: req.body.zipCode.value,
          state: req.body.state.value,
        },
       },
       ingredients: {
         salad: req.body.ingredients.salad,
         cheese: req.body.ingredients.cheese,
         bacon: req.body.ingredients.bacon,
         meat: req.body.ingredients.meat
       },
       price: req.body.totalPrice
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