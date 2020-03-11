const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', function (req, res, next) {
 res.send("response send");
});

// router for login users
router.post('/login', userController.getUserDetails);

// router for register new users
router.post('/register', userController.setUserDetails);

module.exports = router;