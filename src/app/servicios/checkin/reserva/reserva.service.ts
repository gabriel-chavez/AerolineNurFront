import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Reserva } from './reserva';
//import { filter, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { cloneDeep } from "lodash";
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reserva: Reserva;

  constructor(
    private http: HttpClient
  ) {
    this.reserva = new Reserva();
  }

  setReserva(reserva: Reserva) {
    this.reserva = cloneDeep(reserva);
  }

  getReserva() {
    return cloneDeep(this.reserva);
  }

  getReservas() {
    return this.http.get<Reserva[]>('/assets/reservas.json');
  }

  getReservaByID(id: string) {
    return this.http.get<Reserva[]>('/assets/reservas.json').pipe(
      map(reservas => reservas.filter(reserva => reserva.id == id))
    )
  }

  getAllReserva() {
    const url = environment.apiHostCheckIn + ':' + environment.apiPortCheckIn + environment.apiResourceGetAllReserva;
    let response = this.http.get<Reserva[]>(url);
    console.log(response);
    return cloneDeep(response);
  }

  clear() {
    this.reserva = new Reserva();
  }

}
