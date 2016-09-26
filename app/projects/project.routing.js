"use strict";
var router_1 = require('@angular/router');
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
exports.routes = [
    { path: '', component: project_list_component_1.ProjectListComponent },
    { path: ':id', component: project_detail_component_1.ProjectDetailComponent }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=project.routing.js.map