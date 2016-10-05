import { Injectable } from '@angular/core';
import { Repository } from './repository';

@Injectable()
export class ProjectDataService extends Repository{

    constructor() {
        super("projects", "project");
     }
}