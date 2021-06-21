const reportModel = require('../models/report.model');

const reportController = {
    create: (req, res) => {
        reportModel.create(req.body, (err, results) => {
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

    get: (req, res) => {
        reportModel.get(req.params.id, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }

            if (req.params.id) {
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
            } else {
                res.status(200).send({
                    code: 200,
                    data: results
                });
            }
        });
    },

    update: (req, res) => {
        reportModel.update(req.body, req.params.id, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }

            if (results.affectedRows === 0) {
                res.status(500).send({
                    code: 404,
                    data: 'Not Found'
                });
            } else {
                res.status(200).send({
                    code: 200,
                    data: results
                });
            }
        });
    },

    assignEmployee: (req, res) => {
        reportModel.assignEmployee(req.body, req.params.id, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }

            if (results.affectedRows === 0) {
                res.status(500).send({
                    code: 404,
                    data: 'Not Found'
                });
            } else {
                res.status(200).send({
                    code: 200,
                    data: results
                });
            }
        });
    },

    getByCitizen: (req, res) => {
        reportModel.getByCitizen(req.params.id, (err, results) => {
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

    getByEmployee: (req, res) => {
        reportModel.getByEmployee(req.params.id, (err, results) => {
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

    getStatistics: (req, res) => {
        reportModel.getStatistics(req.params.id, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }
                res.status(200).send({
                    code: 200,
                    data: results[0]
                });
            
        });
    },

    getUnassignedReports: (req, res) => {
        reportModel.getUnassignedReports(req.params.id, (err, results) => {
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

module.exports = reportController;