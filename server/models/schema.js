const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

// schema for custumer details
const customersSchema = new Schema({
  customer: {
    first_name: String,
    last_name: String,
    email_address: String,
    mobile_no: String,
    address: {
      street: String,
      zipcode: Number,
      state: String,
    }
  },
  ingredients: {
    salad: String,
    cheese: String,
    bacon: String,
    meat: String
  },
  price: Number,
  user: String
});

exports.customers = mongoose.model('customers', customersSchema, 'customers');

// schema for store ingredient details
const ingredientsShcema = new Schema({
  ingredients: {
    salad: Number,
    cheese: Number,
    bacon: Number,
    meat: Number,
  },
  total_price: Number
});

exports.ingredients = mongoose.model('ingredient', ingredientsShcema, 'ingredients');

// schema for user
const userShcema = new Schema({
  email: String,
  password: String,
  tokens: [{
    token: {
      type: String
    },
  }],
  token: String
});

/**
 * @function generateAuthToken - function for generate jwt token when user login
 */
userShcema.methods.generateAuthToken = async (user) => {
  const token = jwt.sign({ _id: user._id }, 'thisistoken');
  user.tokens = user.tokens.concat({ token });
  user.token = token;
  await user.save();
  return token;
}

exports.users = mongoose.model('user', userShcema, 'users');


