import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { filter, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Tripulacion } from './tripulacion';
import { cloneDeep } from "lodash";
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TripulacionService {

  tripulacion: Tripulacion;

  constructor(
    private httpget: HttpClient,
    private httppost: HttpClient,
    private http: HttpClient
  ) {
    this.tripulacion = new Tripulacion();
  }

  crearTripulacionBackEnd(tripulacionACrear: Tripulacion){
    const url = environment.apiHostTripulacion+':'+environment.apiPortTripulacion+environment.apiResourceCrearTripulacion;
    console.log("crear bk");
    console.log(tripulacionACrear);
    this.httppost.post<Tripulacion>(
      url,
      tripulacionACrear
      )
      .subscribe(
        res => {
          console.log(res);
          alert("tripulacion creado");
        }

    );
  }

  setTripulacion(tripulacion: Tripulacion){
    this.tripulacion = cloneDeep(tripulacion);
  }

  getTripulacion(){
    return cloneDeep(this.tripulacion);
  }

  clear(){
    this.tripulacion = cloneDeep(new Tripulacion());
  }


}
