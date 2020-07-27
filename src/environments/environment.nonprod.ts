// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  get production() {
    return false;
  },
  get name() {
    return 'nonproduction';
  },
  get apis() {
    return {
      get questionServiceConsumerEndpoint() {
        return 'https://question-service-ft1.azurewebsites.net/api/question';
      },
      get queueServiceEndpoint() {
        return 'https://queuefunctionft1.azurewebsites.net/api';
      }
    };
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
