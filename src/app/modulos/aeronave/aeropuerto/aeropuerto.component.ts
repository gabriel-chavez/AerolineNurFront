import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { first } from 'rxjs/operators';
import { AlertaService } from '../../../genericos/servicios/alerta.service';
import { AeropuertoService } from '../../../servicios/aeronave/aeropuerto.service';

@Component({
  selector: 'ngx-aeropuerto',
  templateUrl: './aeropuerto.component.html',
  styleUrls: ['./aeropuerto.component.scss']
})
export class AeropuertoComponent {

  @Input() opciones: any[];
  public registroAeropuertosForm: FormGroup;
  public respuesta: any;
  public mostrarAlerta: boolean;
  public source: LocalDataSource = new LocalDataSource();
  public data: any[];
  public columnas: Object = {
    id: {
      title: 'Id Aeropuerto',
      filter: false
    },
    nombre: {
      title: 'Nombre',
      filter: false
    },
    pais: {
      title: 'País',
      filter: false
    },
    ciudad: {
      title: 'Ciudad',
      filter: false
    },

  };


  constructor(private aeropuertoService: AeropuertoService, private alertaService: AlertaService, private formBuilder: FormBuilder) {
    this.listarModelos();
    this.registroAeropuertosForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
    });
  }
  listarModelos() {
    this.aeropuertoService.listarAeropuerto()
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.data = data.value;
            this.source.load(this.data);
          }
          else {
            this.alertaService.atencion(data.message);
          }
        }
      );
  }
  registrarVuelo() {

    this.mostrarAlerta = false
    if (this.registroAeropuertosForm.valid) {

      let nombre = this.registroAeropuertosForm.controls.nombre.value
      let pais = this.registroAeropuertosForm.controls.pais.value;
      let ciudad = this.registroAeropuertosForm.controls.ciudad.value;
      

      this.aeropuertoService.registrarAeropuerto(nombre, pais, ciudad)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.respuesta = data;
            if (this.respuesta.success) {
              this.alertaService.exito(this.respuesta.message);              
              this.registroAeropuertosForm.reset();
              this.listarModelos();
            } else {
              this.alertaService.atencion(this.respuesta.message);
              this.mostrarAlerta = true;
            }
          }
        );
    }
  }

}
