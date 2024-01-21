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

            socket.on('next-ticket', ({agente, mesa}, callback) => {
                const nextTicket = this.ticketList.assignTicket(agente, mesa)
                callback(nextTicket)

                this.io.emit('assigned-tickets', this.ticketList.last13)
            })
        });

    }


}

export default Sockets;