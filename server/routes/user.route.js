const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.contreller');

router.route('/login')
    .post(userController.login);

module.exports = router;