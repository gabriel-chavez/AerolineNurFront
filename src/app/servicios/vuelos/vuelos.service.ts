import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiVuelo;
  }
  obtenerVuelos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  registrarVuelos(origen: string, destino: string, horaPartida: string, horaLlegada: string, idAeronave: string): Observable<any> {
    const datos = {
      Origen: origen,
      Destino: destino,
      HoraPartida: horaPartida,
      Horallegada: horaLlegada,
      IdAeronave: idAeronave
    }
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }
}
