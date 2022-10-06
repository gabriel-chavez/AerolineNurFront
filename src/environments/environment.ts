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
  
  //  MS - CHECK IN
  // apiHostCheckIn: "http://159.223.144.204",
  // apiPortCheckIn:  "8090",
  apiHostCheckIn: "https://localhost",
  apiPortCheckIn:  "5001",
  apiResourceGetAllReserva:  "/api/Reserva",
  apiResourceGetAllCheckIn:  "/api/CheckIn",
  // apiResourceCrearDeuda:  "/deuda/crear",
  // apiResourceCrearPago:  "/deuda/realizarpago",

  //apiHostDeuda: window["env"]["apiHostDeuda"] || "http://localhost",
  //apiPortDeuda: window["env"]["apiPortDeuda"] || "8080",
};
