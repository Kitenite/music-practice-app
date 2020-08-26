// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBggNYDgcJLTo0D1k2J2iLpLmGEaK02bTg",
    authDomain: "kpractice.firebaseapp.com",
    databaseURL: "https://kpractice.firebaseio.com",
    projectId: "kpractice",
    storageBucket: "kpractice.appspot.com",
    messagingSenderId: "739774560207",
    appId: "1:739774560207:web:092858a690a37c822e84ba",
    measurementId: "G-G0SDSMC7E4"
  },
  gapi: {
    apiKey:'AIzaSyBggNYDgcJLTo0D1k2J2iLpLmGEaK02bTg',
    clientId: '739774560207-82kvh8tfk8c1cn6oco9ntodp2tli1o2j.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
