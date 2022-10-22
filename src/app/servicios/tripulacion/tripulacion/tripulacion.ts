export interface ITripulacion {
    tipoDoc: number;
    nombre: string;
    nroDoc: number;
    apellido: string;
    tipo: number;
  }

  export class Tripulacion implements ITripulacion{
    tipoDoc: number = 0;
    nombre: string = "";
    nroDoc: number = 0;
    apellido: string = "";
    tipo: number = 0;
  }
