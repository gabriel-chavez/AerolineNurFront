import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Aeronaves',
    icon: 'paper-plane',
    children: [
      {
        title: 'Registro de aeronave',
        link: '/modulos/aeronave/registro',
      },
      {
        title: 'Listado de aeronaves',
        link: '/modulos/aeronave/listado',
      },
      {
        title: 'Ejemplo',

        children: [
          {
            title: 'Nuevo',
            link: '/modulos/ejemplo/nuevo',
          },
          {
            title: 'Realizados',
            link: '/modulos/ejemplo/realizados',
          },
        ],
      },
    ],
  },
  {
    title: 'Vuelos',
    icon: 'people-outline',
    children: [
      {
        title: 'Registro de vuelo',
        link: '/modulos/vuelos/registro',
      },
      {
        title: 'Listado de vuelos',
        link: '/modulos/vuelos/listado',
      }
    ],
  },
  {
    title: 'Reserva',
    icon: 'people-outline',
    children: [
      {
        title: 'Seleccion de vuelo',
        link: '/modulos/reserva/vuelo',
      },
      {
        title: 'gestion de pasajero',
        link: '/modulos/reserva/pasajero',
      },
      {
        title: 'Registro de reserva',
        link: '/modulos/reserva/reserva',
      },
    ],
  },
  {
    title: 'deuda',
    icon: 'people-outline',
    children: [
      {
        title: 'gestion de deuda',
        link: '/modulos/deuda/deuda',
      }
    ],
  },


];
