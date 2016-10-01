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
var PouchDB = require('pouchdb');
var ClientDataService = (function () {
    //TODO: make _db injectable
    function ClientDataService() {
        var _this = this;
        this.onDatabaseChange = function (change) {
            var index = _this._clients.findIndex(function (p) { return p._id === change.id; });
            var client = _this._clients[index];
            if (change.deleted) {
                if (client) {
                    _this._clients.splice(index, 1); // delete
                }
            }
            else {
                change.doc.created = new Date(change.doc.created);
                if (client && client._id === change.id) {
                    _this._clients[index] = change.doc; // update
                }
                else {
                    _this._clients.splice(index, 0, change.doc); // insert
                }
            }
        };
        this._db = new PouchDB('clients');
    }
    ClientDataService.prototype.add = function (client) {
        client._id = this.createId();
        client.created = new Date();
        ;
        return this._db.put(client);
    };
    ClientDataService.prototype.delete = function (client) {
        return this._db.remove(client);
    };
    ClientDataService.prototype.update = function (client) {
        return this._db.put(client);
    };
    ClientDataService.prototype.get = function (clientId) {
        if (!this._clients) {
            return this._db.get(clientId);
        }
        else {
            return Promise.resolve(this._clients
                .find(function (p) { return p._id === clientId; }));
        }
    };
    ClientDataService.prototype.getAll = function () {
        var _this = this;
        if (!this._clients) {
            return this._db.allDocs({ include_docs: true })
                .then(function (docs) {
                _this._clients = docs.rows.map(function (row) {
                    row.doc.created = new Date(row.doc.created);
                    return row.doc;
                });
                // Listen for changes on the database.
                _this._db.changes({ live: true, since: 'now', include_docs: true })
                    .on('change', _this.onDatabaseChange);
                return _this._clients;
            });
        }
        else {
            // Return cached data as a promise
            return Promise.resolve(this._clients);
        }
    };
    ClientDataService.prototype.createId = function () {
        return 'client_' + new Date().getTime();
    };
    ClientDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ClientDataService);
    return ClientDataService;
}());
exports.ClientDataService = ClientDataService;
//# sourceMappingURL=client-data.service.js.map