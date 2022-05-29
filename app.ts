export * from 'colors';
import dotenv from 'dotenv';
dotenv.config();
// Server
import Server from './models/server.model';

const server = new Server();
server.listen();
