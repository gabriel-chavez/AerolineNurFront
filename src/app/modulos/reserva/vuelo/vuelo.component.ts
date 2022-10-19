import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VueloService } from '../../../servicios/reserva/vuelo/vuelo.service';
import { Vuelo } from '../../../servicios/reserva/vuelo/vuelo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {

  vuelos: Observable<Vuelo[]>;

  destino: string;
  origen: string;

  vueloSeleccionado: Vuelo;

  inputForm = this.formBuilder.group({
    origen: '',
    destino: ''
  });

  constructor(
    private vueloService: VueloService,
    private formBuilder: FormBuilder
  ) {
    this.vuelos = new Observable;
    this.destino = "";
    this.origen = "";
    this.vueloSeleccionado = vueloService.getVuelo();
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.destino = this.inputForm.value.destino;
    this.origen = this.inputForm.value.origen;
    this.vuelos = this.vueloService.getVuelosByDestinoBackEnd(this.origen, this.destino);
    console.log(this.vuelos);
    console.warn('Your order has been submitted', this.destino + " " + this.origen);
    this.inputForm.reset();
  }

  onSeleccionar(vuelo: Vuelo){
    this.vueloSeleccionado = vuelo;
    this.vueloService.setVuelo(this.vueloSeleccionado);
  }

}
