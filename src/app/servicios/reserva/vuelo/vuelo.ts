export interface IVuelo {
    vueloId: string;
    nroVuelo: number;
    origen: string;
    destino: string;
    cantidadAsientoDisponible: number;
  }

  export class  Vuelo implements IVuelo{
    vueloId: string = "";
    nroVuelo: number = 0;
    origen: string = "";
    destino: string = "";
    cantidadAsientoDisponible: number = 0;
  }

