import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion/autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class ValidarAutenticacion implements CanActivate {
  constructor(private autenticacionService: AutenticacionService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {        
    if(this.autenticacionService.estaConectado())
    {
      return true;
    }
    else{  
      this.router.navigate(['/autenticacion/iniciar-sesion'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}