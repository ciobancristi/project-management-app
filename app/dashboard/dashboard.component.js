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
var angular2_toaster_1 = require('angular2-toaster');
var DashboardComponent = (function () {
    function DashboardComponent(toastr) {
        this.toastr = toastr;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.options = {
            title: { text: 'simple chart' },
            series: [{
                    data: [29.9, 71.5, 106.4, 129],
                }]
        };
    };
    DashboardComponent.prototype.popToast = function () {
        this.toastr.pop('success', 'MSG 1', 'msg 2');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
            providers: [angular2_toaster_1.ToasterService]
        }), 
        __metadata('design:paramtypes', [angular2_toaster_1.ToasterService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map