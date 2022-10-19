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
  apiHostMsCheckIn: "http://159.223.144.204",
  apiPortMsCheckIn:  "8090",
  // LOCAL
  apiHostLocal: "https://localhost",
  apiPortLocal:  "5001",
  // GATEWAY
  apiHostGateway: "http://34.152.30.178",
  apiPortGateway:  "8184",
  // GATEWAY LOCAL
  apiHostGatewayLocal: "https://localhost",
  apiPortGatewayLocal:  "7212",
  // apiResourceGetAllReserva:  "/api/Reserva",
  apiResourceGetAllReserva:  "/api/mscheckin/reserva",
  // apiResourceGetAllCheckIn:  "/api/CheckIn",
  apiResourceGetAllCheckIn:  "/api/mscheckin/checkin",
  // apiResourceCreateCheckIn:  "/api/CheckIn",
  apiResourceCreateCheckIn:  "/api/mscheckin/checkin",
  apiResourceGetReservasSinCheckIn:  "/api/mscheckin/GetReservasSinCheckIn",
  // apiResourceGetReservaLibre:  "/api/ReservaLibre",
  apiResourceGetCheckInById:  "/api/CheckIn",
  // apiResourceGetCheckInById:  "/api/mscheckin/checkin",

};
