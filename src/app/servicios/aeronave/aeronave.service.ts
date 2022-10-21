import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {
  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) { 
    this.apiUrl = environment.apiAeronave;
  }
  public obtenerAeronave(id:string ){
    return this.http.get<any>(`${this.apiUrl}/aeronave/{id}`);
  }
  public listarAeronave(){
    return this.http.get<any>(`${this.apiUrl}/aeronave/`);
  }
  public registrarAeronave(idModelo:string,idAereopuerto:string,estado:number, matricula:string){
    const datos={
      idModelo:idModelo,
      idAereopuerto:idAereopuerto,
      estado:estado,
      matricula:matricula
    }
    return this.http.post<any>(`${this.apiUrl}/aeronave/`, datos);
  }
  public listarAeronaveDetalle(){
    return this.http.get<any>(`${this.apiUrl}/aeronaves/ListarDatosAeronave`);
  }
}
