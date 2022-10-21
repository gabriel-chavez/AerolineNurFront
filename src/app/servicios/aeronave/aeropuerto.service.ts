import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) { 
    this.apiUrl = environment.apiAeronave;
  }
  public obtenerAeropuerto(id:string ){
    return this.http.get<any>(`${this.apiUrl}/aeropuerto/{id}`);
  }
  public listarAeropuerto(){
    return this.http.get<any>(`${this.apiUrl}/aeropuerto/`);
  }
  public registrarAeropuerto(nombre:string,pais:string,ciudad:string){
    const datos={
      nombre:nombre,
      pais:pais,
      ciudad:ciudad
    }
    return this.http.post<any>(`${this.apiUrl}/aeropuerto/`, datos);
  }
}
