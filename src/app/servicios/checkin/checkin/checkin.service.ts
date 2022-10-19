import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CheckIn } from './checkin';
//import { filter, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { cloneDeep } from "lodash";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  checkin: CheckIn;
  satisfactorio: boolean;

  constructor(
    private http: HttpClient
  ) {
    this.checkin = new CheckIn();
  }

  setCheckIn(checkin: CheckIn) {
    this.checkin = cloneDeep(checkin);
  }

  getCheckIn() {
    return cloneDeep(this.checkin);
  }

  getCheckIns() {
    return this.http.get<CheckIn[]>('/assets/checkins.json');
  }

  getCheckInByID(id: string) {
    return this.http.get<CheckIn[]>('/assets/checkins.json').pipe(
      map(checkins => checkins.filter(checkin => checkin.id == id))
    )
  }

  getAllCheckIn() {
    const url = environment.apiHostCheckIn + ':' + environment.apiPortCheckIn + environment.apiResourceGetAllCheckIn;
    let response = this.http.get<CheckIn[]>(url);
    console.log(response);
    return cloneDeep(response);
  }

  clear() {
    this.checkin = new CheckIn();
  }


  createNew(new_Obj: CheckIn) {
    debugger;
    const url = environment.apiHostCheckIn + ':' + environment.apiPortCheckIn + environment.apiResourceCreateCheckIn;
    console.log(new_Obj);
    let response = this.http.post<CheckIn>(
      url,
      new_Obj
    ).subscribe(
      data => {
        console.log("Obj creado correctamente con el ID: " + data);
        alert("Obj creado correctamente con el ID: " + data);
        this.satisfactorio = true;
      },
      error => {
        alert("Error al crear el objeto.");
        console.log(error);
        this.satisfactorio = false;
      }
    );
    return cloneDeep(response);
  }
}
