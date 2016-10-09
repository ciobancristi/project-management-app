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
var modal_1 = require('ng2-bootstrap/components/modal');
var TaskUpsertComponent = (function () {
    function TaskUpsertComponent() {
        this.taskModified = new core_1.EventEmitter();
    }
    TaskUpsertComponent.prototype.ngOnInit = function () {
        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished'];
        this.priorities = ['Critical', 'High', 'Normal', 'Low'];
    };
    TaskUpsertComponent.prototype.showModal = function () {
        this.taskToModify = Object.assign({}, this.task);
        this.taskModal.show();
    };
    TaskUpsertComponent.prototype.hideModal = function () {
        this.taskModal.hide();
    };
    TaskUpsertComponent.prototype.cancel = function () {
        this.hideModal();
    };
    //todo: check deadline date
    TaskUpsertComponent.prototype.save = function () {
        this.setDates();
        this.taskModified.emit(this.taskToModify);
        this.hideModal();
    };
    TaskUpsertComponent.prototype.setDates = function () {
        var currentDate = new Date();
        if (!this.taskToModify.created)
            this.taskToModify.created = currentDate;
        this.taskToModify.edited = currentDate;
    };
    TaskUpsertComponent.prototype.onHide = function () {
    };
    __decorate([
        core_1.ViewChild('taskModal'), 
        __metadata('design:type', modal_1.ModalDirective)
    ], TaskUpsertComponent.prototype, "taskModal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskUpsertComponent.prototype, "taskModified", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.Task)
    ], TaskUpsertComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TaskUpsertComponent.prototype, "buttonText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TaskUpsertComponent.prototype, "heading", void 0);
    TaskUpsertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-upsert',
            templateUrl: 'task-upsert.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TaskUpsertComponent);
    return TaskUpsertComponent;
}());
exports.TaskUpsertComponent = TaskUpsertComponent;
//# sourceMappingURL=task-uspert.component.js.map