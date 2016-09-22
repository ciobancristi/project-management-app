"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'projects', loadChildren: 'app/projects/project.module' },
    // { path: 'clients', component: ClientComponent},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map