import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class DataService {
    private _db;
    private _data;

    initDB(){
        this._db = new PouchDB('testData');
    }

    add(testData){
        return this._db.put(testData);
    }

    delete(docId){
        this._db.get(docId).then(function(doc){

        })
    } 

    update(testData){
        return this._db.put(testData);
    }

    getAllData(){
        return this._db.allDocs({include_docs:true});
    }
}