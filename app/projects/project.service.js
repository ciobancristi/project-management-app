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
//TODO: add logger!!
var ProjectService = (function () {
    //TODO: make _db injectable
    function ProjectService() {
        var _this = this;
        this.onDatabaseChange = function (change) {
            var index = _this._projects.findIndex(function (p) { return p._id === change.id; });
            var birthday = _this._projects[index];
            if (change.deleted) {
                if (birthday) {
                    _this._projects.splice(index, 1); // delete
                }
            }
            else {
                change.doc.created = new Date(change.doc.created);
                if (birthday && birthday._id === change.id) {
                    _this._projects[index] = change.doc; // update
                }
                else {
                    _this._projects.splice(index, 0, change.doc); // insert
                }
            }
        };
        this._db = new PouchDB('projects');
    }
    ProjectService.prototype.add = function (project) {
        if (!project._id) {
            project._id = this.createId();
        }
        return this._db.put(project);
    };
    ProjectService.prototype.delete = function (projectId) {
        //TODO: implement
    };
    ProjectService.prototype.update = function (project) {
        return this._db.put(project);
    };
    ProjectService.prototype.get = function (projectId) {
        if (!this._projects) {
            return this._db.get(projectId);
        }
        else {
            return Promise.resolve(this._projects
                .find(function (p) { return p._id === projectId; }));
        }
    };
    ProjectService.prototype.getAll = function () {
        var _this = this;
        if (!this._projects) {
            return this._db.allDocs({ include_docs: true })
                .then(function (docs) {
                _this._projects = docs.rows.map(function (row) {
                    row.doc.created = new Date(row.doc.created);
                    return row.doc;
                });
                // Listen for changes on the database.
                _this._db.changes({ live: true, since: 'now', include_docs: true })
                    .on('change', _this.onDatabaseChange);
                return _this._projects;
            });
        }
        else {
            // Return cached data as a promise
            return Promise.resolve(this._projects);
        }
    };
    ProjectService.prototype.createId = function () {
        return 'project_' + new Date().getTime();
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map