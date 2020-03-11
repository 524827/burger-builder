const express = require('express');
const router = express.Router();
const customer = require('../controllers/customer');

// router for get order details 
router.get('/', customer.getCustomers);

// router for save order details
router.post('/customer-details', customer.setCustomers);

module.exports = router;
