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
var Repository = (function () {
    //TODO: make _db injectable
    function Repository(databaseName, entityName) {
        var _this = this;
        this.onDatabaseChange = function (change) {
            var index = _this._entities.findIndex(function (p) { return p._id === change.id; });
            var entity = _this._entities[index];
            if (change.deleted) {
                if (entity) {
                    _this._entities.splice(index, 1); // delete
                }
            }
            else {
                change.doc.created = new Date(change.doc.created);
                change.doc.edited = new Date(change.doc.edited);
                if (entity && entity._id === change.id) {
                    _this._entities[index] = change.doc; // update
                }
                else {
                    _this._entities.splice(index, 0, change.doc); // insert
                }
            }
        };
        this._db = new PouchDB(databaseName);
        this.entityName = entityName;
    }
    Repository.prototype.add = function (entity) {
        var currentDate = new Date();
        entity.created = currentDate;
        entity.edited = currentDate;
        entity._id = this.createId();
        return this._db.put(entity);
    };
    Repository.prototype.delete = function (entity) {
        return this._db.remove(entity);
    };
    Repository.prototype.update = function (entity) {
        entity.edited = new Date();
        return this._db.put(entity);
    };
    Repository.prototype.get = function (entityId) {
        if (!this._entities) {
            return this._db.get(entityId);
        }
        else {
            return Promise.resolve(this._entities
                .find(function (p) { return p._id === entityId; }));
        }
    };
    Repository.prototype.getAll = function () {
        var _this = this;
        if (!this._entities) {
            return this._db.allDocs({ include_docs: true })
                .then(function (docs) {
                _this._entities = docs.rows.map(function (row) {
                    row.doc.created = new Date(row.doc.created);
                    row.doc.edited = new Date(row.doc.edited);
                    return row.doc;
                });
                // Listen for changes on the database.
                _this._db.changes({ live: true, since: 'now', include_docs: true })
                    .on('change', _this.onDatabaseChange);
                return _this._entities;
            });
        }
        else {
            // Return cached data as a promise
            return Promise.resolve(this._entities);
        }
    };
    Repository.prototype.createId = function () {
        var createdId = this.entityName ? this.entityName : this.databaseName;
        createdId += "_" + new Date().getTime();
        return createdId;
    };
    Repository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String, String])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map