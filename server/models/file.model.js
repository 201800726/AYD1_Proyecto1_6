const mysqlConnection = require('../config/database');

const fileModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    get(id, callback) {
        let query = `SELECT * FROM Archivo WHERE reporte = ${id};`;
        console.log(query);
        return this.executeQuery(query, callback);
    },

    addFile(params, callback) {
        const {
            nombre,
            ruta,
            reporte,
        } = params

        const query = `INSERT INTO Archivo (nombre,ruta, reporte) 
            VALUES('${nombre}','${ruta}',${reporte});`;

        return this.executeQuery(query, callback);
    }

};

module.exports = fileModel;