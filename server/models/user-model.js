const userSchema = require('./schema');

class Auth {

/**
 * @function getLoginDetails - function for get login details of users
 * @param {*} callback - callback function for return result or error
 */
  getLoginDetails(userCredentials, callback) {
    const users = new userSchema.users;
    const email = userCredentials.email;
    const password = userCredentials.password;
  userSchema.users.findOne({'email':email,'password':password}, async function (error, data) {
   if (error) {
     callback(true, [], "Something went wrong");
   }
   else if(data === null) {
    callback(true, [], "No User Found");
   } else {
    await users.generateAuthToken(data);
    callback(false, data,"User data fetch");
    }
  });
 }

 async setLoginDetails(userDetails, callback) {
 // ueserSchema.users.generateAuthToken();
   const users = new userSchema.users({
     email: userDetails.email.value,
     password: userDetails.password.value
   });
   users.save((err, result) => {
    if (err) {
      return callback(err, null)
    }
    return callback(null, result)
  });
 }

}

module.exports = Auth;