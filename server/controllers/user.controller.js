const userModel = require('../models/user.model');

const userController = {
    login: (req, res) => {
        userModel.login(req.body, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }

            if (results.length === 1) {
                res.status(200).send({
                    code: 200,
                    data: results[0]
                });
            } else {
                res.status(500).send({
                    code: 404,
                    data: 'Not Found'
                });
            }
        });
    },
    roles: (req, res) => {
        userModel.roles(req.params.id, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }

            res.status(200).send({
                code: 200,
                data: results
            });
        });
    }
};

module.exports = userController;