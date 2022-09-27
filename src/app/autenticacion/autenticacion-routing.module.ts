import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionComponent } from './autenticacion.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
//import { ValidarAutenticacion } from '../../genericos/guards/validar-autenticacion.guard';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';




const routes: Routes = [
  {
    path: '',
    component: AutenticacionComponent,
    children: [{
      path: 'iniciar-sesion',
      component: IniciarSesionComponent
    },
    {
      path: 'cambiar-contrasena',
      component: CambiarContrasenaComponent,
     // canActivate: [ValidarAutenticacion] 
    },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
