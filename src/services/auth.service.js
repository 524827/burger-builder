import axios from '../axios';


// login user
export const login = (userCredentials) => {

 const token = localStorage.getItem('user');
 return axios.post('/users/login', userCredentials)
     .then(response => {
         const newTokens = response.data.result.tokens;
         console.log(newTokens);
         console.log(token);
         // store user details and jwt token in local storage to keep user logged in between page refreshes
         const user = {
             user: response.data.result.email,
             token: response.data.result.tokens[newTokens.length-1].token
         }
         localStorage.setItem('user', JSON.stringify(user));
         return user;
     });
}

// logout user
export const logoutUser = (user) => {
    
    console.log(user.token);
    return axios.post('/users/logout',null,{ headers: {"Authorization" : `Bearer ${user.token}`} }).then(response => {
        localStorage.removeItem('user');
    }).then(error => {

    });
}

// register new user
export const registerUser = (userDetails) => {
    return axios.post('/users/register', userDetails).then(response => {

    }).then(error => {

    });
}