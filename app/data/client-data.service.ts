import { Injectable } from '@angular/core';
import { Repository } from './repository';

@Injectable()
export class ClientDataService extends Repository{

    constructor() {
        super("clients", "client");
     }
}