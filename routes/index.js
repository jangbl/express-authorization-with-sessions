const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
const orderController = require('../controller/order');
const role = require('../authorization/role');
const authorize = require('../authorization/authorize');

router.post('/login', authController.login);

// all routes that come after this middleware are protected
// and can only be accessed if the user is logged in
router.use(authenticate);

router.get(
  '/order',
  authorize(role.COMPLIANCE_OFFICER, role.CUSTOMER_SERVICE),
  orderController.getOrder
);
router.post(
  '/order',
  authorize(role.CUSTOMER_SERVICE),
  orderController.createOrder
);
router.delete(
  '/order',
  authorize(role.CUSTOMER_SERVICE),
  orderController.deleteOrder
);

module.exports = router;
