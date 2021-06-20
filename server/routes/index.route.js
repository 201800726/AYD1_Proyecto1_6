const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send({
        curso: 'AYD 1'
    });
});

module.exports = router;