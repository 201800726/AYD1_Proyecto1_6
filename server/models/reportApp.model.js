const mysqlConnection = require('../config/database');

const reportAppModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    create2(params, callback) {
        const {
            descripcion,
            fechaProblema,
            ciudadano,
            zona,
            categoria
        } = params

        const query = `INSERT INTO Reporte (descripcion,fechaProblema, ciudadano, estado, zona, categoria) 
            VALUES('${descripcion}','${fechaProblema}',${ciudadano},'0',${zona},${categoria});`;

        return this.executeQuery(query, callback);
    },

    create(params, callback) {
        const {
            descripcion,
            fechaProblema,
            ciudadano,
            zona,
            categoria
        } = params

        const query = `INSERT INTO Reporte (descripcion,fechaProblema, ciudadano, estado, zona, categoria) 
            VALUES('${descripcion}','${fechaProblema}',${ciudadano},'0',${zona},${categoria});`;

        return this.executeQuery(query, callback);
    },

    update(params, id, callback) {
        const {
            estado,
        } = params

        const query = `UPDATE Reporte SET estado = ${estado}
            WHERE reporteID = ${id};`;

        return this.executeQuery(query, callback);
    },

    get(id, callback) {
        let query = `SELECT r.reporteID as No, r.descripcion as Descripcion, r.fechaReporte as Fecha, r.fechaProblema , c.nombre, c.apellido, r.estado as Estado, z.nombre as Zona, t.nombre as Categoria
        FROM Reporte r 
        INNER JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID`;
        if (id) query += ` WHERE reporteID = ${id}`;
        query += ' ORDER BY fechaReporte DESC;';

        return this.executeQuery(query, callback);
    },

    getByCitizen(id, callback){
        let query = `SELECT r.reporteID as No, r.descripcion as Descripcion, r.fechaReporte as Fecha, r.fechaProblema , c.nombre, c.apellido, r.estado as Estado, z.nombre as Zona, t.nombre as Categoria
        FROM Reporte r 
        INNER JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID WHERE ciudadano = ${id};`;

        return this.executeQuery(query, callback);
    },

    getZonas(callback){
        let query = `SELECT * FROM Zona;`;
        
        return this.executeQuery(query, callback);
    },

    getCategorias(callback){
        let query = `SELECT * FROM CategoriaReporte;`;
        
        return this.executeQuery(query, callback);
    },

};

module.exports = reportAppModel;