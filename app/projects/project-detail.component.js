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
var angular2_toaster_1 = require('angular2-toaster');
var models_1 = require('../models/models');
var project_data_service_1 = require('../data/project-data.service');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(route, router, projectService, toastr) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.toastr = toastr;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id != "newProject") {
                _this.projectService.get(id)
                    .then(function (project) {
                    _this.project = project;
                })
                    .catch(function (err) { return console.error(err); });
            }
            else {
                _this.project = new models_1.Project();
            }
        });
        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished'];
        this.currencies = ['USD', 'RON', 'EUR'];
    };
    ProjectDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProjectDetailComponent.prototype.isNewProject = function () {
        return !this.project._id;
    };
    ProjectDetailComponent.prototype.goToProjectList = function () {
        this.router.navigate(['/projects']);
    };
    ProjectDetailComponent.prototype.addProject = function () {
        var _this = this;
        this.projectService.add(this.project)
            .then(function (res) {
            console.log(res);
            _this.goToProjectList();
        })
            .catch(function (err) {
            _this.toastr.pop("error", "Error", "An error occurred on add.");
            console.error(err);
        });
    };
    ProjectDetailComponent.prototype.updateProject = function () {
        var _this = this;
        this.projectService.update(this.project)
            .then(function (res) {
            console.log(res);
            _this.goToProjectList();
        })
            .catch(function (err) {
            _this.toastr.pop("error", "Error", "An error occurred on update.");
            console.error(err);
        });
    };
    ProjectDetailComponent.prototype.deleteProject = function () {
        var _this = this;
        this.projectService.delete(this.project)
            .then(function (res) {
            console.log(res);
            _this.goToProjectList();
        })
            .catch(function (err) {
            _this.toastr.pop("error", "Error", "An error occurred on delete.");
            console.error(err);
        });
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-detail',
            templateUrl: 'project-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, project_data_service_1.ProjectDataService, angular2_toaster_1.ToasterService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map