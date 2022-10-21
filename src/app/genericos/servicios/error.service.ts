import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
//import * as StackTrace from 'stacktrace-js';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(public location: LocationStrategy) {
  
  }
  obtenerMensajeErrorCliente(error: Error): string {
    return error.message ?
      error.message :
      error.toString();
  }
  obtenerMensajeErrorServer(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      "No es posible procesar su solicitud, verifique su conexión";
  }
  obtenerStackError(error: Error): string {
    let objError:ErrorAux=new ErrorAux();
    //obtenemos las primeras 10 lineas de la pila de errores
    // let stack=StackTrace.fromError(error).then(stackframes => {
    //   const stackString = stackframes
    //     .splice(0, 20)
    //     .map(function (sf) {
    //       console.log(sf)
    //       return sf.toString();
    //     }).join('\n');      
    //   return stackString;
    // });



   // objError.consolaError=error;
  //  objError.stackError=stack;
    
    return JSON.stringify(error);
  }
  obtenerUrlError():string {
    const url = this.location instanceof PathLocationStrategy
      ? this.location.path() : '';
    return url;
  }
}
class ErrorAux{
  consolaError:object;
  stackError:any;
}
