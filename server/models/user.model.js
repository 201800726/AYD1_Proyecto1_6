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
    },

    registro(params, callback) {
        const {
            usuario,
            contrasenia,
            dpi,
            firstName,
            lastName,
            birthDate
        } = params;

        const query = `
            INSERT INTO Usuario (usuario, contrasenia, DPI, nombre,
                    apellido, fechaNacimiento)
                VALUES ('${usuario}', '${contrasenia}', ${dpi}, 
                    '${firstName}', '${lastName}', '${birthDate}');
        `;

        return this.executeQuery(query, callback);
    },

    agregarRolCiudadano(usuarioID, callback) {
        const query = `
            INSERT INTO RolUsuario (usuario, rol) VALUES ('${usuarioID}', '3');
        `;

        return this.executeQuery(query, callback);
    },

    registroEmpleado(params, callback) {
        const {
            usuario,
            contrasenia,
            DPI,
            nombre,
            apellido,
            fechaNacimiento
        } = params;

        const query = `
            INSERT INTO Usuario (usuario, contrasenia, DPI, nombre,
                    apellido, fechaNacimiento)
                VALUES ('${usuario}', '${contrasenia}', ${DPI}, 
                    '${nombre}', '${apellido}', '${fechaNacimiento}');
        `;

        return this.executeQuery(query, callback);
    },

    agregarRolEmpleado(usuarioID, callback) {
        const query = `
            INSERT INTO RolUsuario (usuario, rol) VALUES ('${usuarioID}', '2');
        `;
        return this.executeQuery(query, callback);
    }
};

module.exports = userModel;