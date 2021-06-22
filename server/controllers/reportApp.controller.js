const reportAppModel = require('../models/reportApp.model');

const reportAppController = {

    getZonas: (req, res) => {
        reportAppModel.getZonas( (err, results) => {
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
    },

    create: (req, res) => {
        reportAppModel.create(req.body, (err, results) => {
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
    },

    getCategorias: (req, res) => {
        reportAppModel.getCategorias( (err, results) => {
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
    },



};

module.exports = reportAppController;