import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeronaveComponent } from './aeronave/aeronave/aeronave.component';
import { AeropuertoComponent } from './aeronave/aeropuerto/aeropuerto.component';
import { ModeloAeronaveComponent } from './aeronave/modelo-aeronave/modelo-aeronave.component';

import { DefaultComponent } from './default/default.component';
import { DeudaComponent } from './deuda/deuda/deuda.component';
import { ModulosComponent } from './modulos.component';
import { PasajeroComponent } from './reserva/pasajero/pasajero.component';
import { ReservaComponent } from './reserva/reserva/reserva.component';
import { VueloComponent } from './reserva/vuelo/vuelo.component';
import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';


// import { ReservaComponent } from './checkin/reserva/reserva.component';
import { ReservaLibreComponent } from './checkin/reservalibre/reservalibre.component';
import { CheckInComponent } from './checkin/checkin/checkin.component';
import { CreateCheckInComponent } from './checkin/checkin/createcheckin.component';
import { SearchCheckInComponent } from './checkin/checkin/searchcheckin.component';

const routes: Routes = [
  {
    path: '',
    component: ModulosComponent,
    children: [
      {
        path: 'default',
        component: DefaultComponent
      },
      {
        path: 'aeronave',
        children: [
          {
            path: 'aeropuerto',
            component: AeropuertoComponent
          },
          {
            path: 'modelo',
            component: ModeloAeronaveComponent
          },
          {
            path: 'registrar',
            component: AeronaveComponent
          },

        ]
      },
      {
        path: 'vuelos',
        children: [
          {
            path: 'registro',
            component: VuelosRegistroComponent
          },
          {
            path: 'listado',
            component: VuelosListadoComponent
          }
        ]
      },
      {
        path: 'reserva',
        children: [
          {
            path: 'vuelo',
            component: VueloComponent
          },
          {
            path: 'pasajero',
            component: PasajeroComponent
          },
          {
            path: 'reserva',
            component: ReservaComponent
          }
        ]
      },
      {
        path: 'deuda',
        children: [
          {
            path: 'deuda',
            component: DeudaComponent
          }
        ]
      },
      {
        path: 'checkin',
        children: [
          // {
          //   path: 'reserva',
          //   component: ReservaComponent
          // },
          {
            path: 'reservalibre',
            component: ReservaLibreComponent
          },
          {
            path: 'createcheckin',
            component: CreateCheckInComponent
          },
          {
            path: 'checkin',
            component: CheckInComponent
          },
          {
            path: 'searchcheckin',
            component: SearchCheckInComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
