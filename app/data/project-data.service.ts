import {Repository} from './repository';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService extends Repository {
    constructor() {
        super("projects", "project");
    }
}