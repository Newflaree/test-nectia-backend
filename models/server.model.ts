import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces/api-interfaces';
// DB Config
import dbConnection from '../database/config.db';
// Routes
import {
  authRoutes,
  laptopsRoutes,
  searchesRoutes,
  usersRoutes
} from '../routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth',
      laptops: '/api/laptops',
      searches: '/api/searches',
      users: '/api/users'
    };

    // Init Methods
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRoutes );
    this.app.use( this.apiPaths.laptops, laptopsRoutes );
    this.app.use( this.apiPaths.searches, searchesRoutes );
    this.app.use( this.apiPaths.users, usersRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
