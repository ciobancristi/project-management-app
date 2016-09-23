//TODO: compare performance 
// dynamic
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// static
// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';
// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory); 
//# sourceMappingURL=main.js.map