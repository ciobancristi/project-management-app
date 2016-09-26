import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { Project } from '../models/models';

//TODO: add logger!!
@Injectable()
export class ProjectService {
    private _db: any;
    private _projects: Project[];

    //TODO: make _db injectable
    constructor() {
        this._db = new PouchDB('projects');
    }

    add(project: Project) {
        if (!project._id) {
            project._id = this.createId();
        }
        return this._db.put(project);
    }

    delete(project: Project) {
        return this._db.remove(project);
    }

    update(project: Project) {
        //this.get(project._id).then((doc: any) => {
        return this._db.put(project);
        //})

    }

    get(projectId: any) {
        if (!this._projects) {
            return this._db.get(projectId);
        } else {
            return Promise.resolve(this._projects
                .find(p => p._id === projectId));
        }
    }

    getAll() {
        if (!this._projects) {
            return this._db.allDocs({ include_docs: true })
                .then((docs: any) => {
                    this._projects = docs.rows.map((row: any) => {
                        row.doc.created = new Date(row.doc.created);
                        return row.doc;
                    });

                    // Listen for changes on the database.
                    this._db.changes({ live: true, since: 'now', include_docs: true })
                        .on('change', this.onDatabaseChange);

                    return this._projects;
                });
        } else {
            // Return cached data as a promise
            return Promise.resolve(this._projects);
        }
    }

    private onDatabaseChange = (change: any) => {
        var index = this._projects.findIndex(p => p._id === change.id);
        var birthday = this._projects[index];

        if (change.deleted) {
            if (birthday) {
                this._projects.splice(index, 1); // delete
            }
        } else {
            change.doc.created = new Date(change.doc.created);
            if (birthday && birthday._id === change.id) {
                this._projects[index] = change.doc; // update
            } else {
                this._projects.splice(index, 0, change.doc) // insert
            }
        }
    }

    private createId() {
        return 'project_' + new Date().getTime();
    }
}