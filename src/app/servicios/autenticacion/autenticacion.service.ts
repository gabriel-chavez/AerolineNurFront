import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from './usuario.model';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ResultadoLogin } from './resultado-login.model';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public usuarioAutenticado: Usuario;
  private apiUrl: string;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.servicioAutenticacionUrl;
    this.obtenerUsuarioAutenticado();

  }
  obtenerUsuarioAutenticado() {
    if (this.estaConectado()) {
      if (!this.usuarioAutenticado) {
        this.usuarioAutenticado = this.helper.decodeToken(this.obtenerJwtToken());
      }
    }
  }
  autenticar(nombreUsuario: string, contrasena: string): Observable<ResultadoLogin> {
    const credenciales = {
      username: nombreUsuario,
      password: contrasena
    }
    return this.http.post<any>(
      `${this.apiUrl}login`, credenciales)
      .pipe(
        tap(resp => this.autenticarEjecutar(resp)),       
      );
  }
  // autenticar(nombreUsuario: string, contrasena: string): Observable<ResultadoLogin> {
  //   const credenciales = {
  //     username: nombreUsuario,
  //     password: contrasena
  //   }
  //   console.log("asd")
  //   return this.http.post<any>(`${this.apiUrl}login`, credenciales);
  //   // return this.http.post<any>(
  //   //   `${this.apiUrl}login`, credenciales)
  //   //   .pipe(
  //   //     tap(resp => this.autenticarEjecutar(resp))
  //   //   );
  // }
  autenticarEjecutar(respuestaBase: ResultadoLogin) {
    console.log(respuestaBase.result.success)
    if (respuestaBase.result.success) {
      let token: string = respuestaBase.result.value;
      this.usuarioAutenticado = this.helper.decodeToken(token);
      this.guardarTokens(token);
    }
  }
  estaConectado() {
    return !!this.obtenerJwtToken();
  }
  obtenerJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }
  cerrarSesion() {
    this.cerrarSesionEjecutar();
    this.router.navigate(['/autenticacion/iniciar-sesion']);
  }
  private cerrarSesionEjecutar() {
    this.usuarioAutenticado = null;
    this.eliminarTokens();
  }
  private guardarTokens(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);

  }
  private eliminarTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
