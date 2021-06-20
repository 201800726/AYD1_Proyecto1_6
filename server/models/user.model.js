const mysqlConnection = require('../config/database');
const {
    encrypt,
    decrypt
} = require('../config/crypto');

const userModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    login(params, callback) {
        const {
            usuario,
            contrasenia,
            rol
        } = params

        const query = `
            SELECT us.*, r.* FROM Usuario us
                INNER JOIN RolUsuario rus ON (rus.usuario = us.usuarioID)
                INNER JOIN Rol r ON (r.rolID = rus.rol)
            WHERE us.usuario = '${usuario}' 
                AND us.contrasenia = '${contrasenia}'
                AND r.tipo = '${rol}';
        `;

        return this.executeQuery(query, callback);
    }
};

module.exports = userModel;