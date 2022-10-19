import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pago } from './pago';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pago: Pago;

  constructor(
    private http: HttpClient
  ) {
    this.pago = new Pago();
   }

   crearPagoBackEnd(pagoACrear: Pago){
    const url = environment.apiHostDeuda+':'+environment.apiPortDeuda+environment.apiResourceCrearPago;
    console.log(pagoACrear);
    return this.http.post<Pago>(
      url,
      pagoACrear
      ).subscribe(
        data => {
          alert("pago creado correctamente con el id:" + data.pagoId);
        },
        error => {
          alert("Ocurrio un error al tratar de crear el pago");
          console.log(error);
        }
      );
  }




}
