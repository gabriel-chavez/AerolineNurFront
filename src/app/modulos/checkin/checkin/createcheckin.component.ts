import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reserva } from '../../../servicios/checkin/reserva/reserva';
import { ReservaService } from '../../../servicios/checkin/reserva/reserva.service';
import { CheckIn } from '../../../servicios/checkin/checkin/checkin';
import { CheckInService } from '../../../servicios/checkin/checkin/checkin.service';

@Component({
  selector: 'app-createcheckin',
  templateUrl: './createcheckin.component.html',
  styleUrls: ['./createcheckin.component.css']
})
export class CreateCheckInComponent implements OnInit {

  checkin_nuevo: CheckIn;
  reserva: Reserva;

  inputFormCrear = this.formBuilder.group({
    esAltaPrioridad_txt: '',
    descripcion_txt: '',
    peso_txt: '',
    esFragil: '',
  });

  constructor(
    private checkinService: CheckInService,
    private reservaService: ReservaService,
    private formBuilder: FormBuilder
  ) {

    this.checkin_nuevo = new CheckIn();
    this.reserva = this.reservaService.getReserva();
    console.log("Cargando CheckIn...");
    if (this.reserva.id)
      console.log("- Reserva ID: " + this.reserva.id);
    else {
      console.log("- No hay reserva seleccionada.");
      alert("Debe seleccionar una reserva del Listado Reservas Libres.");
    }
  }

  ngOnInit(): void {
  }

  onCrearCheckIn() {
    this.reserva = this.reservaService.getReserva();

    if (this.reserva.id) {
      this.checkin_nuevo.esAltaPrioridad = this.inputFormCrear.value.esAltaPrioridad_txt == "" ? 0 : this.inputFormCrear.value.esAltaPrioridad_txt;
      this.checkin_nuevo.reservaId = this.reserva.id;

      if (this.checkinService.createNew(this.checkin_nuevo)) {
        this.inputFormCrear.reset();
        this.reservaService.clear();
      }
    } else {
      alert("Debe seleccionar una reserva del Listado Reserva.");
    }

  }

  addEquipajeTemp() {
    if (this.inputFormCrear.value.descripcion_txt == "" ||
      this.inputFormCrear.value.peso_txt == "")
      return;
    this.checkin_nuevo.addEquipaje(
      this.inputFormCrear.value.descripcion_txt,
      this.inputFormCrear.value.peso_txt,
      this.inputFormCrear.value.esFragil == "" ? 0 : this.inputFormCrear.value.esFragil
    );
    alert("Se agregado un equipaje.");
  }

}
