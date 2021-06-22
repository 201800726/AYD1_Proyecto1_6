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
    registro: (req, res) => {
        userModel.registro(req.body, (err, results) => {
            if (err) {
                res.status(500).send({
                    code: 500,
                    data: err
                });
                return;
            }
            agregarRolCiudadano(results.insertId, res)
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

/**
 * Función que ejecuta el query agregarRolCiudadano con el id del nuevo usuario insertado
 * y devuelve la respuesta de la petición http de 'registro'
 * @param {number} idCiudadano El id insertado del usuario nuevo.
 * @param {*} res El objeto Result de Express utilizado en la controlador inicial.
 */
function agregarRolCiudadano(idCiudadano, res) {
    userModel.agregarRolCiudadano(idCiudadano, (err, results) => {
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

module.exports = userController;