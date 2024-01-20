// Server Model: Contiene todo el servidor de express + socket.io configurado
import Server from './models/server.js';
import dotenv from 'dotenv';

// Paquete para leer y establecer las variables de entorno
dotenv.config()

// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();