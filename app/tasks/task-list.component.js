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
var models_1 = require('../models/models');
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.taskModifiedEvent = new core_1.EventEmitter();
    }
    TaskListComponent.prototype.ngOnInit = function () {
    };
    TaskListComponent.prototype.addTask = function () {
        this.newTask = new models_1.Task;
        this.editMode = false;
    };
    TaskListComponent.prototype.taskModified = function (newTask) {
        this.tasks.push(newTask);
        this.taskModifiedEvent.emit();
    };
    TaskListComponent.prototype.editTask = function (task) {
        task.edit = true;
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TaskListComponent.prototype, "tasks", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "taskModifiedEvent", void 0);
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-list',
            templateUrl: 'task-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map