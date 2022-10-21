/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgModule, ErrorHandler } from '@angular/core';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { CoreModule } from './@core/core.module';
 import { ThemeModule } from './@theme/theme.module';
 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 
 //import { NgxSpinnerModule } from 'ngx-spinner';
 import {
   NbChatModule,
   NbDatepickerModule,
   NbDialogModule,
   NbMenuModule,
   NbSidebarModule,
   NbToastrModule,
   NbWindowModule,
 } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from './genericos/interceptor/token.interceptor';
import { ComponentesModule } from './genericos/componentes/componentes.module';

 //import { ErrorServidorInterceptor } from './genericos/Interceptor/error-servidor.interceptor';
 //import { GlobalErrorHandler } from './genericos/error/global-error-handler';
 //import { PantallaCargandoInterceptor } from './genericos/Interceptor/pantalla-cargando.interceptor';
 //import { TokenInterceptor } from './genericos/Interceptor/token.Interceptor';
 
 
 
 
 @NgModule({
   declarations: [AppComponent],
   imports: [      
    BrowserModule,
    ComponentesModule,
     BrowserAnimationsModule,
     HttpClientModule,
     AppRoutingModule,
   //  NgxSpinnerModule,
     ThemeModule.forRoot(),
     NbSidebarModule.forRoot(),
     NbMenuModule.forRoot(),
     NbDatepickerModule.forRoot(),
     NbDialogModule.forRoot(),
     NbWindowModule.forRoot(),
     NbToastrModule.forRoot(),
     NbChatModule.forRoot({
       messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
     }),
     CoreModule.forRoot(),
   ],
   providers: [
   //  { provide: ErrorHandler, useClass: GlobalErrorHandler },
     { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: PantallaCargandoInterceptor, multi: true },
 
 
   ],
   bootstrap: [AppComponent],
 })
 export class AppModule {
 }
 