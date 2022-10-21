import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { first } from 'rxjs/operators';
import { AlertaService } from '../../../genericos/servicios/alerta.service';
import { AeropuertoService } from '../../../servicios/aeronave/aeropuerto.service';
import { ModeloAeronaveService } from '../../../servicios/aeronave/modelo-aeronave.service';

@Component({
  selector: 'ngx-modelo-aeronave',
  templateUrl: './modelo-aeronave.component.html',
  styleUrls: ['./modelo-aeronave.component.scss']
})
export class ModeloAeronaveComponent {

  @Input() opciones: any[];
  public registroModelosForm: FormGroup;
  public respuesta: any;
  public mostrarAlerta: boolean;
  public source: LocalDataSource = new LocalDataSource();
  public data: any[];
  public columnas: Object = {
    id: {
      title: 'Id Modelo',
      filter: false
    },
    modelo: {
      title: 'Modelo',
      filter: false
    },
    marca: {
      title: 'Marca',
      filter: false
    },
    capacidadCarga: {
      title: 'Capacidad carga',
      filter: false
    },
    capacidadCargaCombustible: {
      title: 'Capacidad carga combustible',
      filter: false
    },

  };


  constructor(private modeloAeronaveService: ModeloAeronaveService, private alertaService: AlertaService, private formBuilder: FormBuilder) {
    this.listarModelos();
    this.registroModelosForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      capacidadCarga: ['', Validators.required],
      capacidadCargaCombustible: ['', Validators.required],
    });
  }
  listarModelos() {
    this.modeloAeronaveService.listarModelo()
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
  registrarModelo() {

    this.mostrarAlerta = false
    if (this.registroModelosForm.valid) {

      let modelo = this.registroModelosForm.controls.modelo.value
      let marca = this.registroModelosForm.controls.marca.value;
      let capacidadCarga = this.registroModelosForm.controls.capacidadCarga.value;
      let capacidadCargaCombustible = this.registroModelosForm.controls.capacidadCargaCombustible.value;
      

      this.modeloAeronaveService.registrarModelo(modelo, marca, capacidadCarga,capacidadCargaCombustible)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.respuesta = data;
            if (this.respuesta.success) {
              this.alertaService.exito(this.respuesta.message);              
              this.registroModelosForm.reset();
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
