const ingredientsSchema = require('./schema');

class Ingredients {

  /**
   *@function getIngredientsDetails - function for get ingredients details for database
   * @param {*} callback - callback function
   */
  getIngredientsDetails(callback) {
    ingredientsSchema.ingredients.findOne({}, function (error, data) {
      if (error) {
        console.log(error);
        callback(error, []);
      }
      callback(null, data);
    });
  }
}

module.exports= Ingredients;
