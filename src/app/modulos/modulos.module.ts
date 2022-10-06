import { NgModule } from '@angular/core';
import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { RegistroComponent } from './areonave/registro/registro.component';
import { DefaultComponent } from './default/default.component';
import { ListadoComponent } from './areonave/listado/listado.component';
import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';
//import { UvComponentsModule } from '../genericos/uv-componentes/uv-components.module';
//import { VariosModule } from './varios/varios.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaComponent } from './checkin/reserva/reserva.component';
import { CheckInComponent } from './checkin/checkin/checkin.component';



@NgModule({

  imports: [
    ModulosRoutingModule,
    ThemeModule,
    NbMenuModule,
    // VariosModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,



    //  UvComponentsModule
  ],
  declarations: [
    ModulosComponent,
    RegistroComponent,
    DefaultComponent,
    ListadoComponent,
    VuelosListadoComponent,
    VuelosRegistroComponent,
    ReservaComponent,
    CheckInComponent,

  ],


})
export class ModulosModule { }
