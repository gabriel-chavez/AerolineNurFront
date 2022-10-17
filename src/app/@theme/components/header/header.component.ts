import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbDialogService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, pipe } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../servicios/autenticacion/usuario.model';
import { AutenticacionService } from '../../../servicios/autenticacion/autenticacion.service';
// import { Usuario } from '../../../modelos/genericos/usuario.model';
// import { AutenticacionService } from '../../../servicios/Autenticacion/autenticacion.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  datosUsuario: Usuario;
  tituloModal: string = "";
  currentTheme = 'default';

  userMenu = [
    { title: 'Cerrar sesion' },
    // { title: 'Cambiar contraseña' }
  ];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private dialogService: NbDialogService,
    private AutService: AutenticacionService,
    private router: Router,
  ) {
  }



  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.datosUsuario = this.AutService.usuarioAutenticado;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
    /*********/
    this.menuService.onItemClick().subscribe((event) => {
      this.onItemSelection(event.item.title);
    })
  }

  onItemSelection(title) {
    if (title === 'Cerrar sesion') {
      this.cerrarSesion()
    }
    if (title === 'Cambiar contraseña') {
      let rutaActual = encodeURI(this.router.url);
      this.router.navigate(['/autenticacion/cambiar-contrasena'], { queryParams: { ruta: rutaActual } });
    }
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    this.layoutService.changeLayoutSize();

    return false;
  }



  abrirModal(dialog: TemplateRef<any>, tituloModal: string) {
    this.tituloModal = tituloModal;
    let contenido: string;
    if (tituloModal == "Contacto") {
      contenido = `
      <div class="container">     
          <p>Cualquier duda y/o sugerencia contactese con nosotros.</p>
            
      </div>      
      `
    }
    else {
      contenido = `
      <div class="container">
        AerolineaNur.
      </div>
      `
    }
    this.dialogService.open(
      dialog,
      { context: contenido, closeOnEsc: true, closeOnBackdropClick: false, });
  }
  cerrarSesion() {
    this.AutService.cerrarSesion();
  }
}
