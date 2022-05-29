import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces/api-interfaces';

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
    this.middlewares();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]:'.green } Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
