const mysqlConnection = require('../config/database');

const chatModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    chats(id, callback) {
        const query = `
            SELECT DISTINCT r.reporteID, c.usuarioID,
                c.nombre, c.apellido
            FROM Reporte r
            INNER JOIN Mensaje m ON m.reporte = r.reporteID
            INNER JOIN Usuario c ON c.usuarioID = r.ciudadano
            WHERE r.empleado = ${id};
        `;
        return this.executeQuery(query, callback);
    },
    mensajes(id, callback) {
        const query = `
            SELECT * FROM Mensaje
            WHERE reporte = ${id};
        `;
        return this.executeQuery(query, callback);
    },
    crearMensaje(params, callback) {
        const {
            contenido,
            reporte,
            emisor
        } = params;

        const query = `
            INSERT INTO Mensaje (contenido, reporte, emisor) 
                VALUES ('${contenido}', '${reporte}', '${emisor}');
        `;

        return this.executeQuery(query, callback);
    }
};

module.exports = chatModel;