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
var client_service_1 = require('./client.service');
var client_1 = require('../models/client');
var ClientListComponent = (function () {
    function ClientListComponent(clientService, toastr) {
        this.clientService = clientService;
        this.toastr = toastr;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.bindData();
        this.editMode = false;
    };
    ClientListComponent.prototype.bindData = function () {
        var _this = this;
        this.clientService.getAll()
            .then(function (c) {
            _this.clients = c;
            console.log("clients:", c);
        })
            .catch(function (err) { console.error(err); });
    };
    ClientListComponent.prototype.addClient = function () {
        this.selectedClient = new client_1.Client();
        this.editMode = true;
    };
    ClientListComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
        this.editMode = false;
    };
    ClientListComponent.prototype.deleteClient = function (client) {
        var _this = this;
        this.clientService.delete(client)
            .then(function (res) {
            console.log("client delted successfully", res);
            _this.toastr.pop("success", "msg", "Client deleted successfully!");
            _this.selectedClient = undefined;
        })
            .catch(function (err) { return console.error(err); });
    };
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-list',
            templateUrl: 'client-list.component.html'
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, angular2_toaster_1.ToasterService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map