import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { DefaultComponent } from './default/default.component';

import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';
import { ReservaComponent } from './reserva/reserva/reserva.component';
import { TripulacionComponent } from './tripulacion/tripulacion/tripulacion.component';
import { PasajeroComponent } from './reserva/pasajero/pasajero.component';
import { VueloComponent } from './reserva/vuelo/vuelo.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeudaComponent } from './deuda/deuda/deuda.component';


import { ComponentesModule } from '../genericos/componentes/componentes.module';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { AeropuertoComponent } from './aeronave/aeropuerto/aeropuerto.component';
import { ModeloAeronaveComponent } from './aeronave/modelo-aeronave/modelo-aeronave.component';
import { AeronaveComponent } from './aeronave/aeronave/aeronave.component';

// import { ReservaComponent } from './checkin/reserva/reserva.component';
import { ReservaLibreComponent } from './checkin/reservalibre/reservalibre.component';
import { CheckInComponent } from './checkin/checkin/checkin.component';
import { CreateCheckInComponent } from './checkin/checkin/createcheckin.component';
import { SearchCheckInComponent } from './checkin/checkin/searchcheckin.component';



@NgModule({

  imports: [
    CommonModule,
    ModulosRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,

    MatInputModule,
    NbSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,


    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbIconModule,
    FormsModule,
  ],
  declarations: [
    ModulosComponent,

    DefaultComponent,

    VuelosListadoComponent,
    VuelosRegistroComponent,
    ReservaComponent,
    PasajeroComponent,
    VueloComponent,
    DeudaComponent,
    AeropuertoComponent,
    ModeloAeronaveComponent,
    AeronaveComponent,
    TripulacionComponent,

    ReservaLibreComponent,
    CheckInComponent,
    CreateCheckInComponent,
    SearchCheckInComponent,
  ],


})
export class ModulosModule { }
