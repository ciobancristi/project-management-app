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
var shared_module_1 = require('../shared/shared.module');
var data_module_1 = require('../data/data.module');
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
var project_routing_1 = require('./project.routing');
var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [project_routing_1.routing, shared_module_1.SharedModule, data_module_1.DataModule],
            declarations: [project_detail_component_1.ProjectDetailComponent, project_list_component_1.ProjectListComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map