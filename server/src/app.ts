import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors';
import  PokemonRoutes from    './routes/pokemonRoutes'
import  userController from    './routes/userRoutes'
export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 5002);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
       this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    }
    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
    routes(){
        this.app.use('/pokemon/', PokemonRoutes);
        this.app.use('/user/', userController);
    }
}

  

 

