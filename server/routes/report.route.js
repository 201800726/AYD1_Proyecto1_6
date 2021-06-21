const express = require('express');
const router = express.Router();

const reportController = require('../controllers/report.controller');


router.route('/')
    .get(reportController.get)
    .post(reportController.create)

router.route('/:id')
    .get(reportController.get)
    .put(reportController.update);

router.route('/citizen/:id')
    .get(reportController.getByCitizen)

router.route('/employee/:id')
    .get(reportController.getByEmployee)

router.route('/statistics/data/')
    .get(reportController.getStatistics)

router.route('/statistics/data/:id')
    .get(reportController.getStatistics)

router.route('/assigned/unassigned/employee/state/:id')
    .put(reportController.assignEmployee)

router.route('/assigned/unassigned/employee/state/')
    .get(reportController.getUnassignedReports)

module.exports = router;