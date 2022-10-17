import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AutenticacionService } from '../../servicios/autenticacion/autenticacion.service';
import { AlertaService } from '../servicios/alerta.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    public autenticacionService: AutenticacionService,
    private alerta: AlertaService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.autenticacionService.obtenerJwtToken()) {
      request = this.addToken(request, this.autenticacionService.obtenerJwtToken());
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      }));
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //   if (!this.isRefreshing) {
    //     this.isRefreshing = true;
    //     this.refreshTokenSubject.next(null);

    //     return this.autenticacionService.refrescarToken().pipe(
    //       switchMap((respuesta: RespuestaBase) => {
    //         if (respuesta.exito) {
    //           let token: Token = JSON.parse(respuesta.resultado)
    //           this.isRefreshing = false;
    //           this.refreshTokenSubject.next(token.TokenAcceso);
    //           return next.handle(this.addToken(request, token.TokenAcceso));
    //         }
    //         else {
    //           this.alerta.error(respuesta.mensaje);
    //           this.autenticacionService.cerrarSesion();
    //           return next.handle(request);
    //         }
    //       }));

    //   } else {

    //     return this.refreshTokenSubject.pipe(
    //       filter(token => token != null),
    //       take(1),
    //       switchMap(jwt => {
    //         return next.handle(this.addToken(request, jwt));
    //       }));
    //   }
    // }
    return next.handle(this.addToken(request, ''));
  }
}
