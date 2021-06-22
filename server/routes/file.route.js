const express = require('express');
const router = express.Router();
const multer = require('../config/multer');
const fileController = require('../controllers/file.controller');


router.route('/')
    .post(fileController.addFile)

router.route('/:id')
    .get(fileController.get)

router.route('/photo')
    .post(multer.single('image'), fileController.create);

module.exports = router;