import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ValidarAutenticacion } from './genericos/guards/validar-autenticacion.guard';



const routes: Routes = [
  {
    path: 'modulos',
    loadChildren: () => import('../app/modulos/modulos.module')
      .then(m => m.ModulosModule),
    canActivate: [ValidarAutenticacion]
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('../app/autenticacion/autenticacion.module')
      .then(m => m.AuthModule),
   
  },
  { path: '', redirectTo: 'modulos', pathMatch: 'full' },
  { path: '**', redirectTo: 'modulos' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
