import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Deuda } from './deuda';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  deuda: Deuda;

  constructor(
    private http: HttpClient
  ) {
    this.deuda = new Deuda();
   }

   getDeudaByReservaIdBackEnd(reservaId: string){
    const url = environment.apiHostDeuda+':'+environment.apiPortDeuda+environment.apiResourceGetdeudaByReservaId;
    let queryParams = new HttpParams().append("id", reservaId);

    return this.http.get<Deuda>(
      url,
      {params:queryParams},
      //{headers: {'Access-Control-Allow-Origin':'*'}}
      )
      /*.subscribe(
        data => {
          alert("Deuda encontrada:" + data.deudaId);
        },
        error => {
          alert("Ocurrio un error al tratar de buscar la deuda");
          console.log(error);
        }
      )*/
      ;
  }

  crearDeudaBackEnd(deudaACrear: Deuda){
    const url = environment.apiHostDeuda+':'+environment.apiPortDeuda+environment.apiResourceCrearDeuda;
    return this.http.post<Deuda>(
      url,
      deudaACrear
      ).subscribe(
        data => {
          alert("deuda creada correctamente con el id:" + data.deudaId);
        },
        error => {
          alert("Ocurrio un error al tratar de crear la deuda");
          console.log(error);
        }
      );
  }

  setDeuda(deuda: Deuda){
    this.deuda = deuda;
  }

  getDeuda(){
    return this.deuda;
  }


}
