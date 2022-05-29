import express, { Application } from 'express';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]:'.green } Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
