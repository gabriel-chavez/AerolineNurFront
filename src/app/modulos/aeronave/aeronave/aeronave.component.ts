import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { first } from 'rxjs/operators';
import { AlertaService } from '../../../genericos/servicios/alerta.service';
import { AeronaveService } from '../../../servicios/aeronave/aeronave.service';
import { AeropuertoService } from '../../../servicios/aeronave/aeropuerto.service';
import { ModeloAeronaveService } from '../../../servicios/aeronave/modelo-aeronave.service';

@Component({
  selector: 'ngx-aeronave',
  templateUrl: './aeronave.component.html',
  styleUrls: ['./aeronave.component.scss']
})
export class AeronaveComponent  {
  @Input() opciones: any[];
  public registroAeronaveForm: FormGroup;
  public respuesta: any;
  public mostrarAlerta: boolean;
  public source: LocalDataSource = new LocalDataSource();
  public data: any[];
  public parametrosModelosAeronave:any[];
  public parametrosAeropuerto:any[];
  public parametrosEstadoAeropuerto:any[];
  public columnas: Object = {
    AeronaveId: {
      title: 'Id Aeronave',
      filter: false
    },
    AeronaveEstado: {
      title: 'Estado',
      filter: false
    },
    AeronaveMatricula: {
      title: 'Matricula',
      filter: false
    },
    AeropuertoNombre: {
      title: 'Aeropuerto',
      filter: false
    },
    ModeloDescripcion: {
      title: 'Modelo',
      filter: false
    },
    ModeloMarca: {
      title: 'Marca',
      filter: false
    },
    ModeloCapacidadCarga: {
      title: 'Capacidad de carga',
      filter: false
    },
    ModeloCapacidadCargaCombustible: {
      title: 'Capacidad de carga combustible',
      filter: false
    },
  };
  
  constructor(private aeronaveService: AeronaveService, private alertaService: AlertaService, private modeloAeronaveService: ModeloAeronaveService, private aeropuertoService: AeropuertoService, private formBuilder: FormBuilder) {    
     this.listarModelos();
     this.listarAeropuertos()
     this.listarAeronave();    

    this.parametrosEstadoAeropuerto=[{id:"1",descripcion:"Habilitado"},{id:"2",descripcion:"Mantenimiento"}];    
    this.registroAeronaveForm = this.formBuilder.group({    
      matricula: ['', Validators.required],
      estadoAeronave: ['', Validators.required],      
      modeloAeronave: ['',Validators.required],
      aeropuerto: ['',Validators.required],
    });
  }
 
  listarAeronave() {
    this.aeronaveService.listarAeronaveDetalle()
      .pipe(first())
      .subscribe(
        (data: any) => {         
          if (data.Success) {            
            this.data = data.Value;
            this.source.load(this.data);
          }
          else {
            this.alertaService.atencion(data.Message);
          }
        }
      );
  }
  listarAeropuertos() {
    this.aeropuertoService.listarAeropuerto()
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.parametrosAeropuerto = data.value;            
          }
          else {
            this.alertaService.atencion(data.message);
          }
        }
      );
  }
  listarModelos() {
    this.modeloAeronaveService.listarModelo()
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.parametrosModelosAeronave = data.value;            
          }
          else {
            this.alertaService.atencion(data.message);
          }
        }
      );
  }
  registrarAeronave() {
    this.mostrarAlerta = false
    if (this.registroAeronaveForm.valid) {

      let matricula = this.registroAeronaveForm.controls.matricula.value
      let estadoAeronave = this.registroAeronaveForm.controls.estadoAeronave.value;
      let modeloAeronave = this.registroAeronaveForm.controls.modeloAeronave.value;
      let aeropuerto = this.registroAeronaveForm.controls.aeropuerto.value;
      
      this.aeronaveService.registrarAeronave(modeloAeronave.id, aeropuerto.id, estadoAeronave.id,matricula)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.respuesta = data;
            if (this.respuesta.success) {
              this.alertaService.exito(this.respuesta.message);              
              this.registroAeronaveForm.reset();
              this.listarAeronave();
            } else {
              this.alertaService.atencion(this.respuesta.message);
              this.mostrarAlerta = true;
            }
          }
        );
    }
  }
}
