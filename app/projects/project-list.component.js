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
var router_1 = require('@angular/router');
var project_data_service_1 = require('../data/project-data.service');
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAll()
            .then(function (p) {
            _this.projects = p;
        })
            .catch(function (err) { return console.error("error getting all projects"); });
    };
    ProjectListComponent.prototype.goToProject = function (projectId) {
        this.router.navigate(['/projects', projectId]);
    };
    ProjectListComponent.prototype.viewTasks = function (project) {
        if (!project.tasks)
            project.tasks = new Array();
        this.selectedProject = project;
    };
    ProjectListComponent.prototype.taskModified = function (task) {
        if (task._id) {
            this.projectService.updateTask(this.selectedProject, task);
        }
        else {
            this.projectService.addTask(this.selectedProject, task);
        }
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-list',
            templateUrl: 'project-list.component.html'
        }), 
        __metadata('design:paramtypes', [project_data_service_1.ProjectDataService, router_1.Router])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map