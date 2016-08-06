"use strict";
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
exports.projectRoutes = [
    { path: 'projects', component: project_list_component_1.ProjectListComponent },
    { path: 'project/:id', component: project_detail_component_1.ProjectDetailComponent }
];
//# sourceMappingURL=project.routes.js.map