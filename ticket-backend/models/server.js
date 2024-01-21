import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';

import Sockets from './sockets.js';

class Server {

  constructor() {

    this.app = express();
    this.port = process.env.PORT || 8080;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = new SocketServer(this.server, {
      cors:{
        origin: "http://localhost:5173/"
      }
    })

    this.socket = new Sockets(this.io)
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    this.app.get('/last', (req, res) => {
      res.json({
        ok: true,
        last: this.socket.ticketList.last13
      })
    })
  }

  execute() {

    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }

}

export default Server;
