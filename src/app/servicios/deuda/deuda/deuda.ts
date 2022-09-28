import { Pago } from "../pago/pago";

export interface IDeuda {
  deudaId: string;
  estado: string;
  reservaId: string;
  total: number;
  listaPagos: Pago[];
}

export class Deuda implements IDeuda {
  deudaId = "";
  estado = "";
  reservaId = "";
  total = 0;
  listaPagos = new Array();
}
