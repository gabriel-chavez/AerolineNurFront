export interface IPago {
  pagoId: string;
  detalle: string;
  deudaId: string;
  montoPagado: number;
}

export class Pago implements IPago {
  pagoId = "";
  detalle = "";
  deudaId = "";
  montoPagado = 0;
}
