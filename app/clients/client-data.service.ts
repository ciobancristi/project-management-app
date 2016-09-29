import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { Client } from '../models/client';

@Injectable()
export class ClientDataService {
    private _db: any;
    private _clients: Client[];

    //TODO: make _db injectable
    constructor() {
        this._db = new PouchDB('clients');
    }

    add(client: Client) {
        client._id = this.createId();
        client.created = new Date();;

        return this._db.put(client);
    }

    delete(client: Client) {
        return this._db.remove(client);
    }

    update(client: Client) {
        return this._db.put(client);
    }

    get(clientId: string) {
        if (!this._clients) {
            return this._db.get(clientId);
        } else {
            return Promise.resolve(this._clients
                .find(p => p._id === clientId));
        }
    }

    getAll() {
        if (!this._clients) {
            return this._db.allDocs({ include_docs: true })
                .then((docs: any) => {
                    this._clients = docs.rows.map((row: any) => {
                        row.doc.created = new Date(row.doc.created);

                        return row.doc;
                    });

                    // Listen for changes on the database.
                    this._db.changes({ live: true, since: 'now', include_docs: true })
                        .on('change', this.onDatabaseChange);

                    return this._clients;
                });
        } else {
            // Return cached data as a promise
            return Promise.resolve(this._clients);
        }
    }

    private onDatabaseChange = (change: any) => {
        var index = this._clients.findIndex(p => p._id === change.id);
        var client = this._clients[index];

        if (change.deleted) {
            if (client) {
                this._clients.splice(index, 1); // delete
            }
        } else {
            change.doc.created = new Date(change.doc.created);
            if (client && client._id === change.id) {
                this._clients[index] = change.doc; // update
            } else {
                this._clients.splice(index, 0, change.doc) // insert
            }
        }
    }

    private createId() {
        return 'client_' + new Date().getTime();
    }
}