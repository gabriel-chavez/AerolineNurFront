import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { filter, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reserva } from './reserva';
import { cloneDeep } from "lodash";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reserva: Reserva
  satisfactorio: boolean;

  constructor(
    private http: HttpClient
  ) {
    this.reserva = new Reserva();
    this.satisfactorio = false;
  }

  getReserva(){
    return this.reserva;
  }

  setReserva(reserva: Reserva){
    this.reserva = reserva;
  }

  crearReservaBackEnd(reservaACrear: Reserva){
    const url = environment.apiHostReserva+':'+environment.apiPortReserva+environment.apiResourceCrearReserva;
    console.log(reservaACrear);
    let response = this.http.post<Reserva>(
      url,
      reservaACrear
      ).subscribe(
        data => {
          alert("reserva creada correctamente con el id:" + data.reservaId);
          this.satisfactorio = true;
        },
        error => {
          alert("Ocurrio un error al tratar de crear la reserva");
          console.log(error);
          this.satisfactorio = false;
        }
      );
      return cloneDeep(response);
  }

}
