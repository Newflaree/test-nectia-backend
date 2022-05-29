import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces/api-interfaces';
// DB Config
import dbConnection from '../database/config.db';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth'
    };

    // Init Methods
    this.dbConnect();
    this.middlewares();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
