const express = require('express');
const router = express.Router();
const customer = require('../controllers/customer');

/* GET users listing. */
router.get('/', customer.getCustomers);

router.post('/ingredients', customer.setCustomers);

module.exports = router;