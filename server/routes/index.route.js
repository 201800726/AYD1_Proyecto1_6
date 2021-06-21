const express = require('express');
const router = express.Router();

router.route('/').get((_req, res) => {
    res.send({
        curso: 'AYD 1'
    });
});

module.exports = router;