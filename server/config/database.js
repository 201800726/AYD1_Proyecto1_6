const mysql = require('mysql');

const params = {
    user: 'root',
    password: 'root',
    database: 'ReportesMixco',
    host: '35.238.213.225',
    multipleStatements: true
};

module.exports = mysql.createPool(params);