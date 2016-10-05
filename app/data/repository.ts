import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class Repository {
    private _db: any;
    private _entities: any[];
    private entityName: string;
    private databaseName: string;

    //TODO: make _db injectable
    constructor(databaseName: string, entityName?: string) {
        this._db = new PouchDB(databaseName);
        this.entityName = entityName;
    }

    add(entity: any) {
        let currentDate = new Date();
        //project.created = currentDate;
        //project.edited = currentDate;
        entity._id = this.createId();

        return this._db.put(entity);
    }

    delete(entity: any) {
        return this._db.remove(entity);
    }

    update(entity: any) {
        //project.edited = new Date();
        return this._db.put(entity);
    }

    get(entityId: string) {
        if (!this._entities) {
            return this._db.get(entityId);
        } else {
            return Promise.resolve(this._entities
                .find(p => p._id === entityId));
        }
    }

    getAll() {
        if (!this._entities) {
            return this._db.allDocs({ include_docs: true })
                .then((docs: any) => {
                    this._entities = docs.rows.map((row: any) => {
                        //row.doc.created = new Date(row.doc.created);
                        //row.doc.edited = new Date(row.doc.edited);

                        return row.doc;
                    });

                    // Listen for changes on the database.
                    this._db.changes({ live: true, since: 'now', include_docs: true })
                        .on('change', this.onDatabaseChange);

                    return this._entities;
                });
        } else {
            // Return cached data as a promise
            return Promise.resolve(this._entities);
        }
    }

    private onDatabaseChange = (change: any) => {
        var index = this._entities.findIndex(p => p._id === change.id);
        var entity = this._entities[index];

        if (change.deleted) {
            if (entity) {
                this._entities.splice(index, 1); // delete
            }
        } else {
            //change.doc.created = new Date(change.doc.created);
            //change.doc.edited = new Date(change.doc.edited);
            if (entity && entity._id === change.id) {
                this._entities[index] = change.doc; // update
            } else {
                this._entities.splice(index, 0, change.doc) // insert
            }
        }
    }

    private createId() {
        var createdId = this.entityName ? this.entityName : this.databaseName;
        createdId += "_" + new Date().getTime();
        return createdId;
    }
}