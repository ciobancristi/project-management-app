(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'pouchdb': 'npm:pouchdb/dist',
      'raven-js': 'npm:raven-js/dist',
      'angular2-toaster': 'npm:angular2-toaster',
      'angular2-highcharts': 'npm:angular2-highcharts/dist',
      'highcharts/highstock.src': 'npm:highcharts/highstock.js',
      'ng2-bootstrap': 'npm:ng2-bootstrap/',
      'moment': 'npm:moment/moment.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'pouchdb': { main: 'pouchdb.js', defaultExtension: 'js' },
      'raven-js': { main: 'raven.js', defaultExtension: 'js' },
      'angular2-toaster': { main: 'angular2-toaster.js', defaultExtension: 'js' },
      'angular2-highcharts': { main: './index.js', defaultExtension: 'js' },
      'ng2-bootstrap': { main: './ng2-bootstrap', defaultExtension: 'js' }
    }
  });
})(this);
