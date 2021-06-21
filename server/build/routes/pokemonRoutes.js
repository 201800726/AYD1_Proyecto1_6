"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemonController_1 = require("../controllers/pokemonController");
class PokemonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/obtenerTodos', pokemonController_1.apiController.obtenerTodos);
        this.router.post('/agregar', pokemonController_1.apiController.agregar);
        this.router.get('/obtener/:numero', pokemonController_1.apiController.obtener);
        this.router.put('/actualizar/:numero', pokemonController_1.apiController.actualizar);
        this.router.delete('/eliminar/:numero', pokemonController_1.apiController.eliminar);
    }
}
const apiRoutes = new PokemonRoutes();
exports.default = apiRoutes.router;
