const express = require('express');
const router = express.Router();

const reportAppController = require('../controllers/reportApp.controller');



router.route('/zonas')
    .get(reportAppController.getZonas)

router.route('/categorias')
    .get(reportAppController.getCategorias)

router.route('/reporte')
    .post(reportAppController.create)


module.exports = router;