import { json, Request, Response } from 'express';
import { connect } from '../database';
class ApiController {

    public async obtenerTodos(req: Request, res: Response) {
        console.log('Probando');
        const conn = await connect();

        const data = await conn.query("SELECT * FROM pokemon ORDER BY numero;");
        conn.end();
        if (data[0] instanceof Array) {
            res.json(data[0]);
            res.status(200);
        }

    }

    public async agregar(req: Request, res: Response) {

        const conn = await connect();
        let pokemon = req.body;
        const data = await conn.query("INSERT INTO `practica1`.`pokemon` VALUES (?,?,?,?,?,?,?);",
            [pokemon.numero, pokemon.nombre, pokemon.altura, pokemon.categoria, pokemon.peso, pokemon.habilidad, pokemon.tipo]);
        if (data instanceof Array) {
            let aux = data[0];
            res.json(aux);
            res.status(200);
        } else {
            res.json(['error']);
            res.status(200);
        }

    }
    public async obtener(req: Request, res: Response) {
        let numero = req.params.numero;

        const conn = await connect();

        const data = await conn.query("SELECT * FROM pokemon WHERE numero = ?;", [numero]);
        conn.end();
        if (data[0] instanceof Array) {
            res.json(data[0]);
            res.status(200);
        }

    }

    public async actualizar(req: Request, res: Response) {
        let numero = req.params.numero;
        let pokemon = req.body;

        const conn = await connect();
        const data = await conn.query("UPDATE pokemon SET nombre = ?, altura = ?, categoria = ?," +
            "peso = ?, habilidad = ?, tipo = ?" +
            "WHERE numero = ?;",
            [pokemon.nombre, pokemon.altura, pokemon.categoria, pokemon.peso, pokemon.habilidad, pokemon.tipo, numero]);
        if (data instanceof Array) {
            let aux = data[0];
            res.json(aux);
            res.status(200);
        } else {
            res.json(['error']);
            res.status(200);
        }

    }

    public async eliminar(req: Request, res: Response) {
        const numero = req.params.numero;

        const conn = await connect();
        const data: any = await conn.query("DELETE FROM pokemon WHERE numero = ?;", [numero]);
        conn.end();

        res.json(data);
        res.status(200);
    }
}

export const apiController = new ApiController();