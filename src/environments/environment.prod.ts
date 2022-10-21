/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  /*apiHostReserva: window["env"]["apiHostReserva"] || "http://localhost",
  apiPortReserva: window["env"]["apiPortReserva"] || "8080",
  apiResourceGetPasajero: window["env"]["apiResourceGetPasajero"] || "/pasajero/buscarpasajero",
  apiResourceGetVuelo: window["env"]["apiResourceGetVuelo"] || "/vuelo/buscarvuelos",
  apiResourceCrearPasajero: window["env"]["apiResourceCrearPasajero"] || "/pasajero/crear",
  apiResourceCrearReserva: window["env"]["apiResourceCrearReserva"] || "/reserva/crear",
  */

  apiHostReserva: "http://159.223.144.204",
  apiPortReserva:  "8080",
  apiResourceGetPasajero:  "/pasajero/buscarpasajero",
  apiResourceGetVuelo:  "/vuelo/buscarvuelos",
  apiResourceCrearPasajero:"/pasajero/crear",
  apiResourceCrearReserva:  "/reserva/crear",

  apiHostDeuda: "http://159.223.144.204",
  apiPortDeuda:  "8081",
  apiResourceGetdeudaByReservaId:  "/deuda/buscardeudabyreservaid",
  apiResourceCrearDeuda:  "/deuda/crear",
  apiResourceCrearPago:  "/deuda/realizarpago",

  //apiHostDeuda: window["env"]["apiHostDeuda"] || "http://localhost",
  //apiPortDeuda: window["env"]["apiPortDeuda"] || "8080",
};
