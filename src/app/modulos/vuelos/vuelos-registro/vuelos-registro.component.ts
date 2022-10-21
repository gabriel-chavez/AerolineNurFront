import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertaService } from '../../../genericos/servicios/alerta.service';
import { AeronaveService } from '../../../servicios/aeronave/aeronave.service';
import { VuelosService } from '../../../servicios/vuelos/vuelos.service';

@Component({
  selector: 'ngx-vuelos-registro',
  templateUrl: './vuelos-registro.component.html',
  styleUrls: ['./vuelos-registro.component.scss']
})
export class VuelosRegistroComponent {
  public registroVueloForm:FormGroup;
  public respuesta:any;
  public mostrarAlerta: boolean;
  public parametrosAeronave:any[];
  constructor(private formBuilder: FormBuilder ,private vuelo:VuelosService, private alertaService:AlertaService,private aeronaveService:AeronaveService  ) { 
    this.listarAeronave();
    this.registroVueloForm = this.formBuilder.group({
      aeronave: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      horaPartida: ['', Validators.required],
      horaLlegada: ['', Validators.required],
    });
  }
  registrarVuelo() {    

    this.mostrarAlerta = false
    if (this.registroVueloForm.valid) {

      let aeronave = this.registroVueloForm.controls.aeronave.value
      let origen = this.registroVueloForm.controls.origen.value;
      let destino = this.registroVueloForm.controls.destino.value;
      let horaPartida = this.registroVueloForm.controls.horaPartida.value;
      let horaLlegada = this.registroVueloForm.controls.horaLlegada.value;

      this.vuelo.registrarVuelos(origen,destino,horaPartida,horaLlegada,aeronave.AeronaveId)
        .pipe(first())
        .subscribe(
          (data: any) => {
            this.respuesta = data;
            if (this.respuesta.success) {
             this.alertaService.exito(this.respuesta.message);
             this.registroVueloForm.reset();
            } else {
              this.alertaService.atencion(this.respuesta.message);
              this.mostrarAlerta = true;
            }
          }
        );
    }    
  }
  listarAeronave() {
    this.aeronaveService.listarAeronaveDetalle()
      .pipe(first())
      .subscribe(
        (data: any) => {         
          if (data.Success) {            
            this.parametrosAeronave = data.Value;            
          }
          else {
            this.alertaService.atencion(data.Message);
          }
        }
      );
  }
}
