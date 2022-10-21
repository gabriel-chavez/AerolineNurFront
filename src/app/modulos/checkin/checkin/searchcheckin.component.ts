import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reserva } from '../../../servicios/checkin/reserva/reserva';
import { ReservaService } from '../../../servicios/checkin/reserva/reserva.service';
import { CheckIn, Equipaje } from '../../../servicios/checkin/checkin/checkin';
import { CheckInService } from '../../../servicios/checkin/checkin/checkin.service';

@Component({
  selector: 'app-searchcheckin',
  templateUrl: './searchcheckin.component.html',
  styleUrls: ['./searchcheckin.component.css']
})
export class SearchCheckInComponent implements OnInit {

  idSearch: string;
  checkinbuscado: Observable<CheckIn>;
  checkins: CheckIn[];
  equipajes: Equipaje[];


  inputFormBuscar = this.formBuilder.group({
    idSearch_txt: '',
  });

  constructor(
    private checkinService: CheckInService,
    private formBuilder: FormBuilder
  ) {
    this.idSearch = "";
    this.checkins = [];
    this.equipajes = [];
    this.checkinbuscado = new Observable;

  }

  ngOnInit(): void {
  }

  searchObj() {
    this.checkins = [];
    this.equipajes = [];
    this.idSearch = this.inputFormBuscar.value.idSearch_txt;
    if (this.idSearch == "") {
      alert("Ingrese un ID para buscar.");
      return;
    }
    this.checkinbuscado = this.checkinService.getDeudaByReservaIdBackEnd(this.idSearch);
    this.checkinbuscado.forEach(data => {
      debugger;
      this.checkins = [];
      this.checkins.push(data);
      this.equipajes = data.detalleEquipaje;
      debugger;
    }
    );
  }

  loadEquipaje(obj: CheckIn) {
    this.equipajes = obj.detalleEquipaje;
  }

}
