export interface IReserva {
  id: string;
  nroReserva: number;
  hora: Date;
  vueloId: string;
}

export class Reserva implements IReserva {
  id: string = "";
  nroReserva: number = 0;
  hora: Date = new Date();
  vueloId: string = "";
}

