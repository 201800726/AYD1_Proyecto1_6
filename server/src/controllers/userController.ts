import { json, Request, Response } from 'express';
import { connect } from '../database';
class UserController {

    public async prueba(req: Request, res: Response) {
        console.log('Probando Jala');
        res.json('Hola');
    }

}

export const userController = new UserController();