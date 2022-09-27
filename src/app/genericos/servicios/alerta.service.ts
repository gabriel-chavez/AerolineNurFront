import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';

import swal from 'sweetalert2'
import { NbToastrService } from '@nebular/theme';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class AlertaService {
    private index: number = 0;
    constructor(private toastrService: NbToastrService) { }
    atencion(mensaje: string, funcion: Function=null) {
        swal.fire({
            title:"Atención",
            text:mensaje,
            type:"warning",
            allowEscapeKey:false,
            allowOutsideClick:false
        }).then((result) => {
            if (result.value) {
             if(funcion)
                funcion();
            }
        });
    }
    error(mensaje: string,funcion: Function=null) {     
        swal.fire({
            title:"Error",
            text:mensaje,
            type:"error",
            allowEscapeKey:false,
            allowOutsideClick:false
        }).then((result) => {
            if (result.value) {
             if(funcion)
                funcion();
            }
        });
    }
    confirmar(mensaje: string, funcion: Function) {
        swal.fire({
            title: '',
            text: mensaje,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonClass: 'default',
            confirmButtonText: 'Si',
            cancelButtonText: "No realizar cambios",
            allowEscapeKey:false,
            allowOutsideClick:false
            
        }).then((result) => {
            if (result.value) {
                funcion();
            }
        })
    }
    correcto(mensaje: string) {
        this.index += 1;
        this.toastrService.show(
            mensaje,
            'Correcto',
            { status: 'success' });
    }
    exito(mensaje: string) {       
        swal.fire({
            title:"Correcto",
            text:mensaje,
            type:"success",
            allowEscapeKey:false,
            allowOutsideClick:false
        });
    }

}