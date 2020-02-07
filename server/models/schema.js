const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredients = new Schema({
  ingredients: {
    salad: Number,
    cheese: Number,
    bacon: Number,
    meat: Number,
  },
  price: String,
  customer: {
    cname: String,
    email: String,
    mobile_no: String,
    address: {
      street: String,
      zipcode: Number,
      state: String,
      country: String
    }
  }
});

exports.customers = mongoose.model('customers', ingredients, 'customers');