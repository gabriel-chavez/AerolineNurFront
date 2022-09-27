import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './areonave/listado/listado.component';
import { RegistroComponent } from './areonave/registro/registro.component';
import { DefaultComponent } from './default/default.component';
import { ModulosComponent } from './modulos.component';
import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';

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
        children :[
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
        children :[
          {
            path: 'registro',
            component: VuelosRegistroComponent
          },
          {
            path: 'listado',
            component: VuelosListadoComponent
          }
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
