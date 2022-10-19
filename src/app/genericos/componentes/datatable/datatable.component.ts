import { Component, Input, OnInit } from '@angular/core';
import { TablaOpciones } from './tabla-opciones.model';

@Component({
  selector: 'ngx-datatable',
  template: `<ng2-smart-table [settings]="ajustes" [source]="datos"></ng2-smart-table>`,
})
export class DatatableComponent implements OnInit {

  @Input() columnas: any;
  @Input() datos: any;
  @Input() opciones: TablaOpciones[];
  public ajustes: Object;

  constructor() {

  }
  ngOnInit() {
    this.columnas.button = this.buttonsCustom();
    this.ajustes = {
      actions: false,
      columns: this.columnas,
    };
  }
  private buttonsCustom(): object {
    // let app = this;
    return {
      title: '',
      type: 'custom',
      filter: false,
      valuePrepareFunction: () => {
        return this.opciones;
      },
      renderComponent: ButtonCustomComponent,
      // onComponentInitFunction(instance) {
      //   instance.btnPresionado.subscribe(row => {
      //     app.opcionseleccionada.emit(row);
      //   });
      // }
    }
  }
}
/*****COMPONENTE HIJO******/
@Component({
  selector: 'button-custom',
  styles: [`
  button.dropdown-item {  
    font-size:13px!important;
  } 
  .dropdown-item.disabled{
    color:#ccc;
    cursor: no-drop !important;
  }
  `],
  template: `
    <div class="dropdown dropleft">
      <button nbButton size="tiny" type="button"  outline status="primary"  class="dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Opciones
      </button>


      <div class="dropdown-menu" aria-labelledby="dropdownMenu2" *ngIf="opciones">
        <div *ngFor="let opcion of opciones">
          <div *ngIf="opcion.deshabilitado; else habilitado" [nbTooltip]="opcion.textoDeshabilitado" nbTooltipIcon="slash-outline">
            <button class="dropdown-item disabled" type="button" (click)="clickOpcion(opcion.funcionEjecutar)" >              
            <span *ngIf="opcion.icono">
              <nb-icon [icon]="opcion.icono" pack="eva" ></nb-icon>
            </span>        
            {{opcion.nombreOpcion}}
            </button>
          </div>
          <ng-template #habilitado>
            <button class="dropdown-item" type="button" (click)="clickOpcion(opcion.funcionEjecutar)" >              
            <span *ngIf="opcion.icono">
              <nb-icon [icon]="opcion.icono" pack="eva" ></nb-icon>
            </span>        
            {{opcion.nombreOpcion}}
            </button>
          </ng-template>
        </div>      
      </div>
    </div>
  `,
})
export class ButtonCustomComponent implements OnInit {
  @Input() rowData: any;
  @Input() value: TablaOpciones[];
  //public _opciones: TablaOpciones[];
  public opciones: opcionAux[] = [];
  constructor() {
  }
  ngOnInit() {
    //this.opciones = this.value;
    //this._opciones.icono.this.value.
    
    if(this.value)
    this.obtenerOpciones();
  }
  public obtenerOpciones() {
    this.value.forEach(opcion => {
      let _opcion: opcionAux = new opcionAux();
      _opcion.icono = opcion.icono;
      _opcion.nombreOpcion = opcion.nombreOpcion;
      _opcion.funcionEjecutar = opcion.funcionEjecutar;
      _opcion.deshabilitado = this.habilitaDeshabilita(opcion.funcionDeshabilitaOpcion);
      _opcion.textoDeshabilitado = opcion.textoDeshabilitado;
      this.opciones.push(_opcion);

    });
  }
  public clickOpcion(funcionEjecutar: Function) {
    funcionEjecutar(this.rowData);
  }
  public habilitaDeshabilita(funcionDeshabilitaOpcion: Function): boolean {
    if (funcionDeshabilitaOpcion == null)
      return false;
    return funcionDeshabilitaOpcion(this.rowData);
  }


}
class opcionAux {
  icono: string;
  nombreOpcion: string;
  funcionEjecutar: Function;
  deshabilitado: boolean;
  textoDeshabilitado: String;
}
