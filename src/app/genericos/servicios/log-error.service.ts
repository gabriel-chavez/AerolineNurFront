import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { LogError } from '../error/log-error.model';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {
  private url: string;

  constructor(private http: HttpClient, private alerta: AlertaService) {
    
  }

  agregarLog(error: LogError) {
    // if (navigator.onLine) {
    //   let nombreUsuario = "LCHAVEZ_1";
    //   const _logError = {
    //     UsuarioAut: nombreUsuario,
    //     CodigoSistema: "000-000-000-000",
    //     Tipo: error.tipo,
    //     Mensaje: error.mensaje,
    //     Detalle: error.detalle,
    //     Url: error.url
    //   }
    //   return this.http.post<any>(
    //     `${this.url}registrar`, _logError)
    //     .pipe(
    //       map((respuestaBase: RespuestaBase) => {

    //         this.alerta.error(respuestaBase.mensaje);
    //         return respuestaBase;
    //       })
    //     );
    // }
    // else{
      this.alerta.error(error.mensaje);
      return EMPTY;
    }
  }