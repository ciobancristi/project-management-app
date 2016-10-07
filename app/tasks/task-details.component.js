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
var models_1 = require('../models/models');
var core_1 = require('@angular/core');
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent() {
        this.taskModified = new core_1.EventEmitter();
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished'];
        this.priorities = ['Critical', 'High', 'Normal', 'Low'];
    };
    //TODO: add deadline validation
    TaskDetailsComponent.prototype.save = function () {
        this.setDates();
        this.taskModified.emit(this.task);
    };
    TaskDetailsComponent.prototype.setDates = function () {
        var currentDate = new Date();
        if (!this.task.created)
            this.task.created = currentDate;
        this.task.edited = currentDate;
        this.task.deadline = new Date(this.task.deadline.toString());
    };
    TaskDetailsComponent.prototype.cancel = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.Task)
    ], TaskDetailsComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TaskDetailsComponent.prototype, "editMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskDetailsComponent.prototype, "taskModified", void 0);
    TaskDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-details',
            templateUrl: 'task-details.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());
exports.TaskDetailsComponent = TaskDetailsComponent;
//# sourceMappingURL=task-details.component.js.map