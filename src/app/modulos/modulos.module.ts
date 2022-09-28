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
import { ReservaComponent } from './reserva/reserva/reserva.component';
import { PasajeroComponent } from './reserva/pasajero/pasajero.component';
import { VueloComponent } from './reserva/vuelo/vuelo.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { DeudaComponent } from './deuda/deuda/deuda.component';


@NgModule({

  imports: [
    ModulosRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    MatInputModule,
    NbSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
   // VariosModule,


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
    PasajeroComponent,
    VueloComponent,
    DeudaComponent,
  ],


})
export class ModulosModule { }
