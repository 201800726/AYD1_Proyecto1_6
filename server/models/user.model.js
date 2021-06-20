const mysqlConnection = require('../config/database');

const userModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    login(params, callback) {
        const {
            usuario,
            contrasenia
        } = params

        const query = `SELECT * FROM Usuario
            WHERE usuario = '${usuario}' 
                AND contrasenia = '${contrasenia}';`;
        console.log(query);

        return this.executeQuery(query, callback);
    }
};

module.exports = userModel;