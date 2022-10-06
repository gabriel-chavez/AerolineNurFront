export interface ICheckIn {
  id: string;
  nroCheckIn: string;
  hora: Date;
  esAltaPrioridad: number;
  letraAsiento: string;
  nroAsiento: number;
  reservaId: string;
  vueloId: string;
  // detalleEquipaje: string;
}

export class CheckIn implements CheckIn {
  id: string = "";
  nroCheckIn: number = 0;
  hora: Date = new Date();
  esAltaPrioridad: number = 0
  letraAsiento: string = "";
  nroAsiento: number = 0;
  reservaId: string = "";
  vueloId: string = "";
  // detalleEquipaje: string;
}

