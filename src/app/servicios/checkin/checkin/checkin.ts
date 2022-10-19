export interface ICheckIn {
  id: string;
  nroCheckIn: string;
  hora: Date;
  esAltaPrioridad: number;
  letraAsiento: string;
  nroAsiento: number;
  reservaId: string;
  vueloId: string;
  detalle: Equipaje[];
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
  detalle: Equipaje[] = [];

  addEquipaje(pDescripcion: string, pPeso: number, pEsFragil: number) {
    var newEuipaje = new Equipaje();
    newEuipaje.id = "00000000-0000-0000-0000-000000000000";
    newEuipaje.descripcion = pDescripcion;
    newEuipaje.peso = pPeso;
    newEuipaje.esFragil = pEsFragil;

    this.detalle.push(newEuipaje);
  }

  resetEquipaje() {
    this.detalle = [];
  }
}

export interface IEquipaje {
  id: string;
  descripcion: string;
  peso: number;
  esFragil: number;
}

export class Equipaje implements Equipaje {
  id: string = "";
  descripcion: string = "";
  peso: number = 0;
  esFragil: number = 0;
}