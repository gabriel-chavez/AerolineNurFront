import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { filter, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pasajero } from './pasajero';
import { cloneDeep } from "lodash";
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  pasajero: Pasajero;

  constructor(
    private httpget: HttpClient,
    private httppost: HttpClient,
    private http: HttpClient
  ) {
    this.pasajero = new Pasajero();
  }

  getPasajeroByNroDocTipoDocBackEnd(nrodoc: number, tipodoc: number){
    const url = environment.apiHostReserva+':'+environment.apiPortReserva+environment.apiResourceGetPasajero;
    let queryParams = new HttpParams().append("nrodoc", nrodoc).append("tipodoc", tipodoc);

    //return
    let response = cloneDeep(this.httpget.get<Pasajero>(
      url,
      {params:queryParams},
      ));
      return cloneDeep(response);
  }

  crearPasajeroBackEnd(pasajeroACrear: Pasajero){
    const url = environment.apiHostReserva+':'+environment.apiPortReserva+environment.apiResourceCrearPasajero;
    console.log("crear bk");
    console.log(pasajeroACrear);
    this.httppost.post<Pasajero>(
      url,
      pasajeroACrear
      )
      .subscribe(
        res => {
          console.log(res);
          alert("Pasajero creado");
        }

    );
  }

  getPasajeroFile(){
    return this.http.get<Pasajero[]>('/assets/pasajero.json');
  }

  setPasajero(pasajero: Pasajero){
    this.pasajero = cloneDeep(pasajero);
  }

  getPasajero(){
    return cloneDeep(this.pasajero);
  }

  clear(){
    this.pasajero = cloneDeep(new Pasajero());
  }


}
