"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var repository_1 = require('./repository');
var core_1 = require('@angular/core');
var ProjectDataService = (function (_super) {
    __extends(ProjectDataService, _super);
    function ProjectDataService() {
        _super.call(this, "projects", "project");
    }
    ProjectDataService.prototype.addTask = function (project, task) {
        var currentDate = new Date();
        task.created = currentDate;
        task.edited = currentDate;
        task.loggedHours = 0;
        //todo get default status from db
        task.status = 'Active';
        task._id = this.createTaskId();
        project.tasks.push(task);
        this.update(project);
    };
    ProjectDataService.prototype.updateTask = function (project, task) {
        var projectTasks = project.tasks;
        var indexOfTaskToEdit = this.getTaskIndex(projectTasks, task._id);
        if (indexOfTaskToEdit > 0) {
            task.edited = new Date();
            projectTasks[indexOfTaskToEdit] = task;
            //todo log error
            this.update(project);
        }
    };
    ProjectDataService.prototype.deleteTask = function (project, taskId) {
        var indexOfTaskToDelete = this.getTaskIndex(project.tasks, taskId);
        project.tasks.splice(indexOfTaskToDelete);
        this.update(project);
    };
    ProjectDataService.prototype.getTaskIndex = function (projectTasks, taskId) {
        var taskIndex = projectTasks.findIndex(function (item) {
            return taskId === item._id;
        });
        return taskIndex;
    };
    ProjectDataService.prototype.createTaskId = function () {
        return 'task_' + new Date().getTime();
    };
    ProjectDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProjectDataService);
    return ProjectDataService;
}(repository_1.Repository));
exports.ProjectDataService = ProjectDataService;
//# sourceMappingURL=project-data.service.js.map