// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US',
  _url: 'https://api.themoviedb.org/3/movie',
  apiKey: 'ebea8cfca72fdff8d2624ad7bbf78e4c',
  img_url: {
    poster: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2',
    background: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
