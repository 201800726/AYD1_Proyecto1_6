import { Router } from 'express';
import { apiController } from '../controllers/pokemonController'
class PokemonRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/obtenerTodos', apiController.obtenerTodos);
    this.router.post('/agregar', apiController.agregar);
    this.router.get('/obtener/:numero', apiController.obtener);
    this.router.put('/actualizar/:numero', apiController.actualizar);
    this.router.delete('/eliminar/:numero', apiController.eliminar);
  }
}

const apiRoutes = new PokemonRoutes();

export default apiRoutes.router;
