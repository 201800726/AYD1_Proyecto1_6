const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file.controller');


router.route('/')
    .post(fileController.addFile)

router.route('/:id')
    .get(fileController.get)

module.exports = router;