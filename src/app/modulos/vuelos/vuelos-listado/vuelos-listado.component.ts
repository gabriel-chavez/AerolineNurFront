import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-vuelos-listado',
  templateUrl: './vuelos-listado.component.html',
  styleUrls: ['./vuelos-listado.component.scss']
})
export class VuelosListadoComponent  {

  @Input() opciones: any[];
  public source: LocalDataSource = new LocalDataSource();
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
  data = [
    {
        "idVuelo": "1c539104-ed5e-4fba-ac4f-fbf7a1c0323f",
        "origen": "La Paz",
        "destino": "Santa Cruz",
        "horaPartida": "05:00:00",
        "horaLlegada": "11:00:00",
        "cantidadAsientos": 0,
        "tripulacion": null,
        "idAeronave": "4db14fa8-602c-4fa7-8f89-8b321b9f1c1a"
    },
    {
        "idVuelo": "6eaed405-b382-4705-84bf-657e6ee44f4d",
        "origen": "Cochabamba",
        "destino": "La Paz",
        "horaPartida": "10:10:10",
        "horaLlegada": "10:10:10",
        "cantidadAsientos": 0,
        "tripulacion": null,
        "idAeronave": "c56fea37-9493-4557-97f5-764f0d4c6ef7"
    },
    {
        "idVuelo": "5a658220-2f0c-4403-aecf-81851071d8b8",
        "origen": "ORURO",
        "destino": "Santa Cruz",
        "horaPartida": "09:00:00",
        "horaLlegada": "11:00:00",
        "cantidadAsientos": 0,
        "tripulacion": null,
        "idAeronave": "ee4447ab-9c40-4348-ac6f-064975a251b6"
    },
    {
        "idVuelo": "b112ae92-2599-468f-86bf-16dc6d0c5478",
        "origen": "ORURO",
        "destino": "Santa Cruz",
        "horaPartida": "09:00:00",
        "horaLlegada": "11:00:00",
        "cantidadAsientos": 0,
        "tripulacion": null,
        "idAeronave": "ee4447ab-9c40-4348-ac6f-064975a251b6"
    },
    {
        "idVuelo": "07e2dcb9-c3fb-4a83-888f-7b1a7b9e2c5c",
        "origen": "Cochabamba",
        "destino": "Santa Cruz",
        "horaPartida": "08:00:00",
        "horaLlegada": "11:00:00",
        "cantidadAsientos": 0,
        "tripulacion": null,
        "idAeronave": "96041f38-7ea1-48a1-877f-7c09e1a67207"
    }
]
  constructor() {
    this.source.load(this.data);
   }



}
