import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pago } from '../../../servicios/deuda/pago/pago';
import { PagoService } from '../../../servicios/deuda/pago/pago.service';
import { Deuda } from '../../../servicios/deuda/deuda/deuda';
import { DeudaService } from '../../../servicios/deuda/deuda/deuda.service';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.css']
})
export class DeudaComponent implements OnInit {

  inputFormBuscar = this.formBuilder.group({
    inputReservaId: ''
  });

  inputFormCrear = this.formBuilder.group({
    inputCrearReservaId: '',
    inputCrearTotal: ''
  });

  inputFormRealizarPago = this.formBuilder.group({
    inputMontoPagado: '',
    inputDetalle: ''
  });

  reservaId: string;
  deudaEncontrada: Deuda;
  crearDeuda: boolean;
  mostrarDeudaSeleccionada: boolean;
  mostrarPagos: boolean;

  deudaResultado: Observable<Deuda>;
  deudaACrear: Deuda;
  pagoACrear: Pago;

  crearPago: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private deudaService: DeudaService,
    private pagoService: PagoService
  ) {
    this.deudaResultado = new Observable;
    this.reservaId = "";
    this.deudaEncontrada = new Deuda();
    this.crearDeuda = false;
    this.mostrarDeudaSeleccionada = false;
    this.deudaACrear = new Deuda();
    this.mostrarPagos = false;
    this.crearPago = false;
    this.pagoACrear = new Pago();
  }

  ngOnInit(): void {
  }

  onBuscarDeuda() {
    this.reservaId = this.inputFormBuscar.value.inputReservaId;
    this.deudaResultado = this.deudaService.getDeudaByReservaIdBackEnd(this.reservaId);
    this.deudaResultado.forEach(res => {
      this.deudaEncontrada = res;
      this.mostrarPagos = false;
      console.log(this.deudaEncontrada);
    }
    );

  }

  onCrearDeuda() {
    this.deudaACrear.reservaId = this.inputFormCrear.value.inputCrearReservaId;
    this.deudaACrear.total = this.inputFormCrear.value.inputCrearTotal;
    this.deudaService.crearDeudaBackEnd(this.deudaACrear);
    this.inputFormCrear.reset();
  }

  onRealizarPago() {
    this.deudaService.setDeuda(this.deudaEncontrada);
    this.mostrarDeudaSeleccionada = true;
    this.crearPago = true;
  }

  onPagar(){
    this.pagoACrear.montoPagado = this.inputFormRealizarPago.value.inputMontoPagado;
    this.pagoACrear.detalle = this.inputFormRealizarPago.value.inputDetalle;
    this.pagoACrear.deudaId = this.deudaService.getDeuda().deudaId;
    this.pagoService.crearPagoBackEnd(this.pagoACrear);
    //this.onBuscarDeuda();
  }

  habilitarCrearDeuda() {
    this.crearDeuda = !this.crearDeuda;
  }

  cargarPagos() {
    this.mostrarPagos = true;
  }

}
