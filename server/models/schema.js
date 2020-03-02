const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customers = new Schema({
  customer: {
    first_name: String,
    last_name: String,
    email_address: String,
    mobile_no: String,
    address: {
      street: String,
      zipcode: Number,
      state: String,
      country: String
    }
  }
});

exports.customers = mongoose.model('customers', customers, 'customers');

const ingredients = new Schema({
  ingredients: {
    salad: Number,
    cheese: Number,
    bacon: Number,
    meat: Number,
  },
  total_price: Number
});

exports.ingredients = mongoose.model('ingredient', ingredients, 'ingredients');

