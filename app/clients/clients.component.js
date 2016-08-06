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
var data_service_1 = require('../data.service');
var ClientsComponent = (function () {
    function ClientsComponent(dataService) {
        this.dataService = dataService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.dataService.initDB();
        this.bindData();
        this.inp = {
            _id: '', field3: '', field2: ''
        };
    };
    ClientsComponent.prototype.bindData = function () {
        var _this = this;
        this.dataService.getAllData()
            .then(function (d) {
            _this.data = d;
        });
    };
    ClientsComponent.prototype.save = function () {
        var _this = this;
        if (this.inp) {
            this.dataService.add(this.inp)
                .then(function (res) {
                _this.bindData();
            }, function (err) {
                console.log(err);
            });
        }
    };
    ClientsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients',
            templateUrl: 'clients.component.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ClientsComponent);
    return ClientsComponent;
}());
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map