import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './areonave/listado/listado.component';
import { RegistroComponent } from './areonave/registro/registro.component';
import { ReservaComponent } from './checkin/reserva/reserva.component';
import { ReservaLibreComponent } from './checkin/reservalibre/reservalibre.component';
import { CheckInComponent } from './checkin/checkin/checkin.component';
import { DefaultComponent } from './default/default.component';
import { ModulosComponent } from './modulos.component';
import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';
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
            path: 'registro',
            component: RegistroComponent
          },
          {
            path: 'listado',
            component: ListadoComponent
          }
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
        path: 'checkin',
        children: [
          {
            path: 'reserva',
            component: ReservaComponent
          },
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
