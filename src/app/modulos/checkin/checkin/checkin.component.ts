import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckInService } from '../../../servicios/checkin/checkin/checkin.service';
import { CheckIn } from '../../../servicios/checkin/checkin/checkin';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckInComponent implements OnInit {

  checkins: Observable<CheckIn[]>;

  destino: string;
  origen: string;

  checkinSeleccionado: CheckIn;

  inputForm = this.formBuilder.group({
    origen: '',
    destino: ''
  });

  constructor(private checkinService: CheckInService, private formBuilder: FormBuilder) {
    this.checkins = new Observable;
    this.destino = "";
    this.origen = "";
    this.checkinSeleccionado = checkinService.getCheckIn();
    this.loadTable();
  }

  ngOnInit(): void {
  }

  // onSubmit(): void {
  loadTable(): void {
    this.destino = this.inputForm.value.destino;
    this.origen = this.inputForm.value.origen;
    this.checkins = this.checkinService.getAllCheckIn();
    this.inputForm.reset();
  }

  onSeleccionar(checkin: CheckIn) {
    this.checkinSeleccionado = checkin;
    this.checkinService.setCheckIn(this.checkinSeleccionado);
  }

}
