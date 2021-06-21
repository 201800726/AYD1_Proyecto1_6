"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
const database_1 = require("../database");
class ApiController {
    obtenerTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Probando');
            const conn = yield database_1.connect();
            const data = yield conn.query("SELECT * FROM pokemon ORDER BY numero;");
            conn.end();
            if (data[0] instanceof Array) {
                res.json(data[0]);
                res.status(200);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            let pokemon = req.body;
            const data = yield conn.query("INSERT INTO `practica1`.`pokemon` VALUES (?,?,?,?,?,?,?);", [pokemon.numero, pokemon.nombre, pokemon.altura, pokemon.categoria, pokemon.peso, pokemon.habilidad, pokemon.tipo]);
            if (data instanceof Array) {
                let aux = data[0];
                res.json(aux);
                res.status(200);
            }
            else {
                res.json(['error']);
                res.status(200);
            }
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let numero = req.params.numero;
            const conn = yield database_1.connect();
            const data = yield conn.query("SELECT * FROM pokemon WHERE numero = ?;", [numero]);
            conn.end();
            if (data[0] instanceof Array) {
                res.json(data[0]);
                res.status(200);
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let numero = req.params.numero;
            let pokemon = req.body;
            const conn = yield database_1.connect();
            const data = yield conn.query("UPDATE pokemon SET nombre = ?, altura = ?, categoria = ?," +
                "peso = ?, habilidad = ?, tipo = ?" +
                "WHERE numero = ?;", [pokemon.nombre, pokemon.altura, pokemon.categoria, pokemon.peso, pokemon.habilidad, pokemon.tipo, numero]);
            if (data instanceof Array) {
                let aux = data[0];
                res.json(aux);
                res.status(200);
            }
            else {
                res.json(['error']);
                res.status(200);
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numero = req.params.numero;
            const conn = yield database_1.connect();
            const data = yield conn.query("DELETE FROM pokemon WHERE numero = ?;", [numero]);
            conn.end();
            res.json(data);
            res.status(200);
        });
    }
}
exports.apiController = new ApiController();
