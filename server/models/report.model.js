const mysqlConnection = require('../config/database');

const reportModel = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    create(params, callback) {
        const {
            descripcion,
            fechaProblema,
            ciudadano,
            zona,
            categoria
        } = params

        const query = `INSERT INTO Reporte (descripcion,fechaProblema, ciudadano, zona, categoria) 
            VALUES('${descripcion}','${fechaProblema}',${ciudadano},${zona},${categoria});`;

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

    getByID(id, callback) {
        const query = `SELECT r.reporteID, r.descripcion, r.fechaReporte, r.fechaProblema,
            r.empleado AS empleadoID, c.nombre, c.apellido, r.estado,
            z.nombre AS zona, t.nombre as categoria
        FROM Reporte r 
        LEFT JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID
        WHERE reporteID = ${id};`;

        return this.executeQuery(query, callback);
    },

    assignEmployee(params, id, callback) {
        const {
            empleado
        } = params

        const query = `UPDATE Reporte SET empleado = ${empleado} WHERE reporteID = ${id};`;

        return this.executeQuery(query, callback);
    },

    get(id, callback) {
        let query = `SELECT r.reporteID as No, r.descripcion as Descripcion, r.fechaReporte as Fecha, r.fechaProblema , c.nombre, c.apellido, r.estado as Estado, z.nombre as Zona, t.nombre as Categoria
        FROM Reporte r 
        LEFT JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID`;
        if (id) query += ` WHERE reporteID = ${id}`;
        query += ' ORDER BY fechaReporte DESC;';

        return this.executeQuery(query, callback);
    },

    getByCitizen(id, callback) {
        let query = `SELECT r.reporteID as No, r.descripcion as Descripcion, r.fechaReporte as Fecha, r.fechaProblema , c.nombre, c.apellido, r.estado as Estado, z.nombre as Zona, t.nombre as Categoria
        FROM Reporte r 
        LEFT JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID WHERE ciudadano = ${id};`;

        return this.executeQuery(query, callback);
    },

    getByEmployee(id, callback) {
        let query = `SELECT r.reporteID as No, r.descripcion as Descripcion, r.fechaReporte as Fecha, r.fechaProblema , c.nombre, c.apellido, r.estado as Estado, z.nombre as Zona, t.nombre as Categoria
        FROM Reporte r 
        LEFT JOIN Usuario c ON usuarioID = ciudadano 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID WHERE empleado = ${id} 
        ORDER BY fechaReporte Desc;`;

        return this.executeQuery(query, callback);
    },

    getStatistics(id, callback) {
        let query = `SELECT * FROM (
            SELECT COUNT(reporteID) as Total FROM Reporte ) a, 
            (SELECT COUNT(reporteID) as Pendientes FROM Reporte WHERE estado = 0) b,
            (SELECT COUNT(reporteID) as Proceso FROM  Reporte WHERE estado = 1) c,
            (SELECT COUNT(reporteID) as Finalizados FROM Reporte WHERE estado = 2) d;`;
        if (id) query = `SELECT * FROM (
            SELECT COUNT(reporteID) as Total FROM Reporte WHERE empleado = ${id}) a, 
            (SELECT COUNT(reporteID) as Pendientes FROM Reporte WHERE estado = 0 AND empleado = ${id}) b,
            (SELECT COUNT(reporteID) as Proceso FROM  Reporte WHERE estado = 1 AND empleado = ${id}) c,
            (SELECT COUNT(reporteID) as Finalizados FROM Reporte WHERE estado = 2 AND empleado = ${id}) d;`;

        return this.executeQuery(query, callback);
    },

    getUnassignedReports(id, callback) {
        let query = `SELECT r.reporteID as no, r.fechaReporte, r.estado, z.nombre as zona, t.nombre as categoria
        FROM Reporte r 
        INNER JOIN Zona z ON z.zonaID = r.zona 
        INNER JOIN CategoriaReporte t ON r.categoria = t.categoriaReporteID 
        WHERE empleado is null;`;
        return this.executeQuery(query, callback);
    }

};

module.exports = reportModel;