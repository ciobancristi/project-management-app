import { Injectable } from '@angular/core';
import { Clients, MonetaryUnits, Priorities, Projects, Statuses, Tasks} from './mock-data';

@Injectable()
export class MockService {

    getClients() {
        return Promise.resolve(Clients);
    }

    getProjects() {
        return Promise.resolve(Projects);
    }

    getProject(id: number) {
        return this.getProjects()
            .then(projects => projects.find(p => p.id == id));
    }

    getStatuses() {
        return Promise.resolve(Statuses);
    }

    getMonetaryUnits() {
        return Promise.resolve(MonetaryUnits);
    }

    getPriorities() {
        return Promise.resolve(Priorities);
    }

    testPouch(){
        
    }
}