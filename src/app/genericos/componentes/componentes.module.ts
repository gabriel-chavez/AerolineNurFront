import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { NebularModule } from '../../nebular.module';



@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [   
    CommonModule, 
    NebularModule
  ],
  exports:[DatatableComponent]
})
export class ComponentesModule { }
