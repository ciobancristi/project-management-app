"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
//TODO: uncomment in prod mode
// Raven
//     .config('https://b2d58d9faee947548dd644f0fa1e374a@sentry.io/101859')
//     .install();
// class RavenErrorHandler implements ErrorHandler {
//     handleError(err: any): void {
//         Raven.captureException(err.originalError);
//     }
// }
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dashboard_module_1.DashboardModule,
                app_routing_1.routing,
            ],
            declarations: [app_component_1.AppComponent],
            //providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map