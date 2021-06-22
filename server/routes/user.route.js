const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.route('/login')
    .post(userController.login);

router.route('/rol/:id')
    .get(userController.roles);

router.route('/registro')
    .post(userController.registro);

module.exports = router;