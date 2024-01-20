import TicketList from "./ticket-list.js";

class Sockets {

    constructor( io ) {

        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente conectado');

            socket.on('solicitar-ticket', (data, callback) => {
              const newTicket = this.ticketList.createTicket()

              callback(newTicket);
            })
        });

    }


}

export default Sockets;