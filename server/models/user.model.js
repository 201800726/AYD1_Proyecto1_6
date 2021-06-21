const mysqlConnection = require('../config/database');

const userModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    login(params, callback) {
        const {
            usuario,
            contrasenia
        } = params;

        const query = `
            SELECT usuarioID, usuario, DPI,
                nombre, apellido, fechaNacimiento
            FROM Usuario
            WHERE usuario = '${usuario}' 
                AND contrasenia = '${contrasenia}';
        `;

        return this.executeQuery(query, callback);
    },
    roles(id, callback) {
        const query = `
            SELECT r.* FROM RolUsuario ru
                INNER JOIN Rol r ON r.rolID = ru.rol
            WHERE usuario = ${id};
        `;

        return this.executeQuery(query, callback);
    }
};

module.exports = userModel;