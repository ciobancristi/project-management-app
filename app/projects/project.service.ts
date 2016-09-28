import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { Project } from '../models/models';

@Injectable()
export class ProjectService {
    private _db: any;
    private _projects: Project[];

    //TODO: make _db injectable
    constructor() {
        this._db = new PouchDB('projects');
    }

    add(project: Project) {
        let currentDate = new Date();
        project.created = currentDate;
        project.edited = currentDate;
        project._id = this.createId();

        return this._db.put(project);
    }

    delete(project: Project) {
        return this._db.remove(project);
    }

    update(project: Project) {
        project.edited = new Date();
        return this._db.put(project);
    }

    get(projectId: string) {
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
                        row.doc.edited = new Date(row.doc.edited);

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
        var project = this._projects[index];

        if (change.deleted) {
            if (project) {
                this._projects.splice(index, 1); // delete
            }
        } else {
            change.doc.created = new Date(change.doc.created);
            change.doc.edited = new Date(change.doc.edited);
            if (project && project._id === change.id) {
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