import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { catchError, Observable } from 'rxjs';
import { Tripulacion } from '../../../servicios/tripulacion/tripulacion/tripulacion';
import { TripulacionService } from '../../../servicios/tripulacion/tripulacion/tripulacion.service';
import { cloneDeep } from "lodash";

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {

  tripulacion: Tripulacion;

  //pasajeros: Observable<Pasajero>;

  tripulacionEncontrado: Tripulacion;
  tripulacionACrear: Tripulacion;

  mostrarTripulacionSeleccionado: boolean;

  crearTripulacion: boolean;

  nrodoc: number;
  tipodoc: number;
  tipo: number;
  nombre: string;
  apellido: string;

  selectedItemCrear : string;
  selectedItemCrearTipo : string;
  selectedItemBuscar : string;

  inputFormCrear = this.formBuilder.group({
    inputCrearNroDoc: '',
    inputCrearTipoDoc: '',
    inputCrearTipo: '',
    inputCrearNombre: '',
    inputCrearApellido: ''

  });

  constructor(
    private tripulacionService: TripulacionService,
    private formBuilder: FormBuilder
  ) {
    this.nrodoc = 0;
    this.tipodoc = 0;
    this.tipo = 0;
    this.tripulacionEncontrado = new Tripulacion();
    this.tripulacionACrear = new Tripulacion();
    this.crearTripulacion = true;
    this.nombre = "";
    this.apellido = "";
    this.mostrarTripulacionSeleccionado = false;
  }

  ngOnInit(): void {
  }



  onCrearTripulacion() {
    this.tripulacionACrear.nombre = cloneDeep(this.inputFormCrear.value.inputCrearNombre);
    this.tripulacionACrear.apellido = cloneDeep(this.inputFormCrear.value.inputCrearApellido);

    this.tripulacionACrear.nroDoc = cloneDeep(this.inputFormCrear.value.inputCrearNroDoc);
    this.selectedItemCrear = this.inputFormCrear.value.inputCrearTipoDoc;
    this.tripulacionACrear.tipoDoc = cloneDeep(this.inputFormCrear.value.inputCrearTipoDoc);
    this.tripulacionACrear.tipo = cloneDeep(this.inputFormCrear.value.inputCrearTipo);
    this.selectedItemCrearTipo = this.inputFormCrear.value.inputCrearTipo;
    this.inputFormCrear.reset();
    this.crearTripulacion = true;
    this.tripulacionService.crearTripulacionBackEnd(cloneDeep(this.tripulacionACrear));
  }

}
