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
var ClientDetailComponent = (function () {
    function ClientDetailComponent(clientService, toastr) {
        this.clientService = clientService;
        this.toastr = toastr;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
    };
    ClientDetailComponent.prototype.cancel = function () {
        this.client = null;
    };
    ClientDetailComponent.prototype.save = function () {
        var _this = this;
        console.log(this.client);
        if (this.client._id) {
            this.clientService.update(this.client)
                .then(function () {
                _this.client = undefined;
                console.info("client update successfully");
                _this.toastr.pop("success", "msg", "Client updated successfully!");
            })
                .catch(function (err) { return console.error(err); });
        }
        else {
            this.clientService.add(this.client)
                .then(function () {
                _this.client = undefined;
                console.info("client update successfully");
                _this.toastr.pop("success", "msg", "Client added successfully");
            })
                .catch(function (err) { return console.error(err); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_1.Client)
    ], ClientDetailComponent.prototype, "client", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ClientDetailComponent.prototype, "editMode", void 0);
    ClientDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-detail',
            templateUrl: 'client-detail.component.html'
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, angular2_toaster_1.ToasterService])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map