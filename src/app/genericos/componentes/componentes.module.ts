import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonCustomComponent, DatatableComponent } from './datatable/datatable.component';
import { NebularModule } from '../../nebular.module';



@NgModule({
  declarations: [
    DatatableComponent,
    ButtonCustomComponent
  ],
  imports: [   
    CommonModule, 
    NebularModule
  ],
  exports:[DatatableComponent],
  entryComponents: [ButtonCustomComponent]
})
export class ComponentesModule { }
