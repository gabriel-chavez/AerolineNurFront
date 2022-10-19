import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  
  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.servicioAutenticacionUrl;   
  } 
}
