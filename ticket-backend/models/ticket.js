import { v4 as uuidv4 } from 'uuid';

class Ticket {

  constructor( number ){
    this.id = uuidv4();
    this.number = number;
    this.desktop = null;
    this.agent = null;
  }

}

export default Ticket;