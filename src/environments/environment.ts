/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
