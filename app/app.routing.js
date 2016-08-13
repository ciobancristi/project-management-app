"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'projects', loadChildren: 'app/projects/project.module' },
    { path: 'clients', loadChildren: 'app/clients/client.module' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map