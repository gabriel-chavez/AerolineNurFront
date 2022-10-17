import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { ResultadoLogin } from '../../servicios/autenticacion/resultado-login.model';
import { AutenticacionService } from '../../servicios/autenticacion/autenticacion.service';




@Component({
  selector: 'ngx-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})

export class IniciarSesionComponent {

  inicioSesionForm: FormGroup;
  respuesta: ResultadoLogin = new ResultadoLogin();
  mostrarAlerta: boolean;
  constructor(

    private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private http: HttpClient
  ) {
    this.inicioSesionForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
    this.redireccionar();
  }

  iniciarSesion() {
    this.respuesta = new ResultadoLogin();
    this.mostrarAlerta = false
    if (this.inicioSesionForm.valid) {

      let usr = this.inicioSesionForm.controls.usuario.value;
      let pas = this.inicioSesionForm.controls.contrasena.value;

      this.inicioSesionForm.reset();

      this.autService.autenticar(usr, pas)
        .pipe(first())
        .subscribe(
          (data: ResultadoLogin) => {
            this.respuesta = data;
            if (this.respuesta.result.success) {
              this.redireccionar();
            } else {
              this.inicioSesionForm.setValue({
                usuario: usr,
                contrasena: pas
              });
              this.mostrarAlerta = true;
            }
          }
        );
    }
  }

  redireccionar() {
    if (this.autService.estaConectado())
      this.router.navigate(['/modulos']);
  }

  throwError() {
    throw new Error('My Pretty Error');
  }

  throwHttpError() {
    this.autService.autenticar("usr", "pas")
      .pipe(first())
      .subscribe(
        (data: ResultadoLogin) => {
          this.respuesta = data;
          if (this.respuesta.result.success) {
            this.redireccionar();
          }
        }
      );
  }
}
