export interface IPasajero {
    segundoApellido: string;
    tipoDoc: number;
    nombre: string;
    nroDoc: number;
    primerApellido: string;
    pasajeroId: string;
  }

  export class Pasajero implements IPasajero{
    segundoApellido: string ="";
    tipoDoc: number = 0;
    nombre: string = "";
    nroDoc: number = 0;
    primerApellido: string = "";
    pasajeroId: string = ""
  }
 