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

  servicioAutenticacionUrl: "http://34.152.30.178:8184/api/security/",

   /*apiHostReserva: window["env"]["apiHostReserva"] || "http://localhost",
  apiPortReserva: window["env"]["apiPortReserva"] || "8080",
  apiResourceGetPasajero: window["env"]["apiResourceGetPasajero"] || "/pasajero/buscarpasajero",
  apiResourceGetVuelo: window["env"]["apiResourceGetVuelo"] || "/vuelo/buscarvuelos",
  apiResourceCrearPasajero: window["env"]["apiResourceCrearPasajero"] || "/pasajero/crear",
  apiResourceCrearReserva: window["env"]["apiResourceCrearReserva"] || "/reserva/crear",
  */

  apiHostReserva: "http://34.152.30.178",
  apiPortReserva:  "8184",
  apiResourceGetPasajero:  "/api/pasajero/buscarpasajero",

  apiResourceCrearPasajero:"/api/pasajero/crear",
  apiResourceCrearReserva:  "/api/reserva/crear",

  apiHostVuelo: "http://159.223.144.204",
  apiPortVuelo:  "8080",
  apiResourceGetVuelo:  "/vuelo/buscarvuelos",///no se encuentra

  apiHostDeuda: "http://34.152.30.178",
  apiPortDeuda:  "8184",
  apiResourceGetdeudaByReservaId:  "/api/deuda/buscardeudabyreservaid",
  apiResourceCrearDeuda:  "/api/deuda/crear",
  apiResourceCrearPago:  "/api/deuda/realizarpago",

  //apiHostDeuda: window["env"]["apiHostDeuda"] || "http://localhost",
  //apiPortDeuda: window["env"]["apiPortDeuda"] || "8080",

};
