import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { RespuestaBase } from '../../../modelos/genericos/respuesta-base.model';

import { Router, ActivatedRoute } from '@angular/router';


//import { Usuario } from '../../../modelos/genericos/usuario.model';
import { AlertaService } from '../../genericos/servicios/alerta.service';
//import { AutenticacionService } from '../../../servicios/Autenticacion/autenticacion.service';

@Component({
  selector: 'ngx-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})
export class CambiarContrasenaComponent implements OnInit {

  cambioContrasenaForm: FormGroup;
  //respuesta: RespuestaBase = new RespuestaBase();
  mostrarAlerta: boolean;
  //datosUsuario: Usuario;
  constructor(
    private formBuilder: FormBuilder,
    //private autService:AutenticacionService,
    private router: Router,    
    private alerta: AlertaService,
    private route: ActivatedRoute) {
    this.cambioContrasenaForm = this.formBuilder.group({
      usuario: [''],
      contrasenaActual: ['', Validators.required],
      contrasenaNueva: ['', Validators.required],
      confirmarContrasena: ['', Validators.required]
    }, { validator: this.confirmarContrasena });
  }
  ngOnInit() {
    
    //this.datosUsuario = this.autService.usuarioAutenticado; 
 //   this.cambioContrasenaForm.controls.usuario.setValue(this.datosUsuario.empleadoUsuario.split("_")[0]);
  }
  cambiarContrasena() {
    if (this.cambioContrasenaForm.invalid) {
      return false;
    }
    // this.autService.cambiarContrasena(
    //   this.cambioContrasenaForm.controls.usuario.value,
    //   this.cambioContrasenaForm.controls.contrasenaActual.value,
    //   this.cambioContrasenaForm.controls.contrasenaNueva.value).subscribe(
    //     (data: RespuestaBase) => {
    //       this.respuesta = data;
    //       if (this.respuesta.exito) {
    //         this.cambioContrasenaForm.reset();
    //         this.cambioContrasenaForm.controls.usuario.setValue( this.datosUsuario.empleadoUsuario.split("_")[0]);
    //         this.alerta.correcto(this.respuesta.mensaje)
    //       } else {
           
    //         this.alerta.atencion(this.respuesta.mensaje)
    //       }
    //     })
  }
  confirmarContrasena(group: FormGroup) {
    let pass = group.get('contrasenaNueva').value;
    let confirmPass = group.get('confirmarContrasena').value;
    return pass === confirmPass ? null : { confirmarContrasena: true }
  }
  btnRetornar() {
    let rutaRetornar;
    this.route.queryParamMap.subscribe((params: any) => {
      rutaRetornar = params.params.ruta;
    });
    if (rutaRetornar)
      this.router.navigate([rutaRetornar]);
    else
      this.router.navigate(['/autentiacion/iniciar-sesion']);
  }
}

