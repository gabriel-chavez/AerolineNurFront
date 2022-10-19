import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaService } from '../../../servicios/checkin/reserva/reserva.service';
import { Reserva } from '../../../servicios/checkin/reserva/reserva';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservalibre',
  templateUrl: './reservalibre.component.html',
  styleUrls: ['./reservalibre.component.css']
})
export class ReservaLibreComponent implements OnInit {

  reservas: Observable<Reserva[]>;

  destino: string;
  origen: string;

  reservaSeleccionado: Reserva;

  inputForm = this.formBuilder.group({
    origen: '',
    destino: ''
  });

  constructor(private reservaService: ReservaService, private formBuilder: FormBuilder) {
    this.reservas = new Observable;
    this.destino = "";
    this.origen = "";
    this.reservaSeleccionado = reservaService.getReserva();
    this.loadTable();
  }

  ngOnInit(): void {
  }

  // onSubmit(): void {
  loadTable(): void {
    this.destino = this.inputForm.value.destino;
    this.origen = this.inputForm.value.origen;
    this.reservas = this.reservaService.GetReservasSinCheckIn();
    this.inputForm.reset();
  }

  onSeleccionar(reserva: Reserva) {
    this.reservaSeleccionado = reserva;
    this.reservaService.setReserva(this.reservaSeleccionado);
  }

}
