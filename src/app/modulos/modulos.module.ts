import { NgModule } from '@angular/core';
import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { RegistroComponent } from './areonave/registro/registro.component';
import { DefaultComponent } from './default/default.component';
import { ListadoComponent } from './areonave/listado/listado.component';
import { VuelosListadoComponent } from './vuelos/vuelos-listado/vuelos-listado.component';
import { VuelosRegistroComponent } from './vuelos/vuelos-registro/vuelos-registro.component';
import { ComponentesModule } from '../genericos/componentes/componentes.module';
import { NebularModule } from '../nebular.module';
import { CommonModule } from '@angular/common';
//import { UvComponentsModule } from '../genericos/uv-componentes/uv-components.module';
//import { VariosModule } from './varios/varios.module';




@NgModule({

  imports: [
    CommonModule,
    ModulosRoutingModule,
    ThemeModule,
    NbMenuModule,
    ComponentesModule,
    NebularModule,
    
  ],
  declarations: [
    ModulosComponent,
    RegistroComponent,
    DefaultComponent,
    ListadoComponent,
    VuelosListadoComponent,
    VuelosRegistroComponent,
    
  
  ],


})
export class ModulosModule { }
