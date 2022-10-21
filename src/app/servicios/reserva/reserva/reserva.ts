export interface IReserva {
  cantidadPasajero: number;
  precio: number;
  nroReserva: string;
  pasajeroId: string;
  vueloId: string;
  estado: string;
  reservaId: string;
  hora: string;
}

export class Reserva implements IReserva {
  cantidadPasajero: number = 0;
  precio: number = 0.0;
  nroReserva: string = "";
  pasajeroId: string =  "";
  vueloId: string = "";
  estado: string = "";
  reservaId: string = "";
  hora: string = "";
}
