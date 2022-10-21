import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertaService } from '../../../genericos/servicios/alerta.service';
import { VuelosService } from '../../../servicios/vuelos/vuelos.service';

@Component({
  selector: 'ngx-vuelos-listado',
  templateUrl: './vuelos-listado.component.html',
  styleUrls: ['./vuelos-listado.component.scss']
})
export class VuelosListadoComponent  {

  @Input() opciones: any[];
  public source: LocalDataSource = new LocalDataSource();
  public data:any[];  
  public columnas:Object = {
    idVuelo: {
      title: 'Id Vuelo',      
      filter:false
    },
    origen: {
      title: 'Origen',
      filter:false
    },
    destino: {
      title: 'Destino',
      filter:false
    },
    horaPartida: {
      title: 'Hora de partida',
      filter:false
    },
    horaLlegada: {
      title: 'Hora de llegada',
      filter:false
    },
    idAeronave: {
      title: 'Id Aeronave',
      filter:false
    }    
  };
 
  
  constructor(private vuelosService: VuelosService,private alertaService:AlertaService) {
    this.obtenerVuelos();
   }
   obtenerVuelos() {
    this.vuelosService.obtenerVuelos()
      .pipe(first())
      .subscribe(
        (data: any) => {
          if(data.success)
          {
            this.data = data.value;
            this.source.load(this.data);
          }
          else{
            this.alertaService.atencion(data.message);
          }
        }
      );
  }



}
