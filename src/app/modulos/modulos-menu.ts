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
        title: 'Aeronave',
        children: [
          {
            title: 'Registro',
            link: '/modulos/aeronave/registrar',
          },          
        ],
      },
      {
        title: 'Aeropuerto',
        children: [
          {
            title: 'Aeropuertos',
            link: '/modulos/aeronave/aeropuerto',
          },          
        ],
      },
      {
        title: 'Modelo aeronave',
        children: [
          {
            title: 'Modelos',
            link: '/modulos/aeronave/modelo',
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
