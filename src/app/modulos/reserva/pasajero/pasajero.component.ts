import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VueloService } from '../../../servicios/reserva/vuelo/vuelo.service';
import { Vuelo } from '../../../servicios/reserva/vuelo/vuelo';
//import { catchError, Observable } from 'rxjs';
import { Pasajero } from '../../../servicios/reserva/pasajero/pasajero';
import { PasajeroService } from '../../../servicios/reserva/pasajero/pasajero.service';
import { cloneDeep } from "lodash";

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

  vuelo: Vuelo;

  //pasajeros: Observable<Pasajero>;

  pasajeroEncontrado: Pasajero;
  pasajeroACrear: Pasajero;

  mostrarPasajeroSeleccionado: boolean;

  crearPasajero: boolean;

  nrodoc: number;
  tipodoc: number;
  nombre: string;
  primerapellido: string;
  segundoapellido: string;

  selectedItemCrear : string;
  selectedItemBuscar : string;

  inputForm = this.formBuilder.group({
    inputNroDoc: '',
    inputTipoDoc: ''
  });

  inputFormCrear = this.formBuilder.group({
    inputCrearNroDoc: '',
    inputCrearTipoDoc: '',
    inputCrearNombre: '',
    inputCrearPrimerApellido: '',
    inputCrearSegundoApellido: ''
  });

  constructor(
    private vueloService: VueloService,
    private pasajeroService: PasajeroService,
    private formBuilder: FormBuilder
  ) {
    this.vuelo = vueloService.getVuelo();
    //this.pasajeros = new Observable;
    this.nrodoc = 0;
    this.tipodoc = 0;
    this.pasajeroEncontrado = new Pasajero();
    this.pasajeroACrear = new Pasajero();
    this.crearPasajero = false;
    this.nombre = "";
    this.primerapellido = "";
    this.segundoapellido = "";
    this.mostrarPasajeroSeleccionado = false;
  }

  ngOnInit(): void {
  }

  onBuscarPasajero() {
    this.nrodoc = this.inputForm.value.inputNroDoc;
    this.tipodoc = this.inputForm.value.inputTipoDoc;
    this.selectedItemBuscar = this.inputForm.value.inputTipoDoc;
    let response = this.pasajeroService.getPasajeroByNroDocTipoDocBackEnd(this.nrodoc, this.tipodoc);
    response.subscribe(
      (respuesta) => {
        console.log('response received');
        console.log(respuesta);
        this.pasajeroEncontrado = cloneDeep(respuesta);
      },
      error => {
        console.log("ocurrio un error");
        console.log(error);
      }

    );
  }

  onCrearPasajero() {
    this.pasajeroACrear.nombre = cloneDeep(this.inputFormCrear.value.inputCrearNombre);
    this.pasajeroACrear.primerApellido = cloneDeep(this.inputFormCrear.value.inputCrearPrimerApellido);
    this.pasajeroACrear.segundoApellido = cloneDeep(this.inputFormCrear.value.inputCrearSegundoApellido);
    this.pasajeroACrear.nroDoc = cloneDeep(this.inputFormCrear.value.inputCrearNroDoc);
    this.selectedItemCrear = this.inputFormCrear.value.inputCrearTipoDoc;
    this.pasajeroACrear.tipoDoc = cloneDeep(this.inputFormCrear.value.inputCrearTipoDoc);
    this.inputFormCrear.reset();
    this.crearPasajero = false;
    this.pasajeroService.crearPasajeroBackEnd(cloneDeep(this.pasajeroACrear));
  }

  onSeleccionar() {
    this.pasajeroService.setPasajero(this.pasajeroEncontrado);
    this.mostrarPasajeroSeleccionado = true;
  }

  habilitarCrearPasajero() {
    this.crearPasajero = !this.crearPasajero;
  }

}
