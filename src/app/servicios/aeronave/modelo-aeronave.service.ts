import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModeloAeronaveService {
  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) { 
    this.apiUrl = environment.apiAeronave;
  }
  public obtenerModelo(id:string ){
    return this.http.get<any>(`${this.apiUrl}/ModeloAeronave/{id}`);
  }
  public listarModelo(){
    return this.http.get<any>(`${this.apiUrl}/ModeloAeronave/`);
  }
  public registrarModelo(modelo:string,marca:string,capacidadCarga:number, capacidadCargaCombustible:number){
    const datos={
      modelo:modelo,
      marca:marca,
      capacidadCarga:capacidadCarga,
      capacidadCargaCombustible:capacidadCargaCombustible,
      asientos:[]
    }
    return this.http.post<any>(`${this.apiUrl}/ModeloAeronave/`, datos);
  }
}
