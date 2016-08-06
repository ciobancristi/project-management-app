"use strict";
var router_1 = require('@angular/router');
var dashboard_1 = require('./dashboard/dashboard');
var projects_1 = require("./projects/projects");
var clients_1 = require("./clients/clients");
var routes = [
    { path: 'dashboard', component: dashboard_1.DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
].concat(projects_1.projectRoutes, [
    { path: 'clients', component: clients_1.ClientsComponent },
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map