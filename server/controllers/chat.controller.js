const chatModel = require('../models/chat.model');

const chatController = {
    chats: (req, res) => {
        chatModel.chats(req.params.idEmpleado, (err, results) => {
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
    mensajes: (req, res) => {
        chatModel.mensajes(req.params.idReporte, (err, results) => {
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
    crearMensaje: (req, res) => {
        chatModel.crearMensaje(req.body, (err, results) => {
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

module.exports = chatController;