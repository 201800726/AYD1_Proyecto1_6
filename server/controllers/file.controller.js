const fileModel = require('../models/file.model');

const fileController = {

    get: (req, res) => {
        fileModel.get(req.params.id, (err, results) => {
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

    addFile: (req, res) => {
        fileModel.addFile(req.body, (err, results) => {
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
        let reportePhoto = {
            nombre: req.body.name,
            ruta: req.file.filename,
            reporte: req.body.idReporte
        };

        fileModel.addFile(reportePhoto, (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    },

};

module.exports = fileController;