const ingredientsSchema = require('./schema');

class Ingredients {

  getIngredientsDetails(callback) {
    ingredientsSchema.ingredients.findOne({}, function (error, data) {
      console.log(data);
      if (error) {
        console.log(error);
        callback(error, []);
      }
      callback(null, data);
    });
  }
}

module.exports= Ingredients;
