import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Status } from 'app/models/status';
import { Task } from 'app/models/task';

export class InMemoryDataService implements InMemoryDbService {
    statuses: Status[] = [
        {
            id: 1,
            name: "To do",
            order: 1
        },
        {
            id: 2,
            name: "In progress",
            order: 2
        },
        {
            id: 3,
            name: "Done",
            order: 3
        }
    ]
    tasks: Task[] = [
        {
            id: 1,
            name: "Task 1",
            description: "Task 1 descrip",
            created: new Date(),
            modified: new Date(),
            priority: "Mid",
            status: this.statuses[0]
        },
        {
            id: 2,
            name: "2 Task",
            description: "Task descrip 2",
            created: new Date(),
            modified: new Date(),
            priority: "High",
            status: this.statuses[2]
        },
        {
            id: 3,
            name: "Task 3",
            description: "descrip Task 3",
            created: new Date(),
            modified: new Date(),
            priority: "Low",
            status: this.statuses[0]
        }
    ]

    tasks2: Task[] = [
        {
            id: 4,
            name: "Task 4",
            description: "Task 4 descrip",
            created: new Date(),
            modified: new Date(),
            priority: "Mid",
            status: this.statuses[1]
        },
        {
            id: 5,
            name: "5 Task",
            description: "Task descrip 5",
            created: new Date(),
            modified: new Date(),
            priority: "High",
            status: this.statuses[0]
        },
        {
            id: 6,
            name: "Task 6",
            description: "descrip Task 6",
            created: new Date(),
            modified: new Date(),
            priority: "Low",
            status: this.statuses[1]
        }
    ]

    createDb() {
        const projects = [
            {
                id: 1, name: "Proj1",
                description: "proj 1 Description",
                created: new Date(),
                modified: new Date(),
                tasks: this.tasks.concat(this.tasks2),
                isFinished: false,
                statuses: this.statuses
            },
            {
                id: 2, name: "Proj2",
                description: "proj 2 Description",
                created: new Date(),
                modified: new Date(),
                tasks: this.tasks2.concat(this.tasks2),
                isFinished: false,
                statuses: this.statuses
            }
        ]
        return { projects };
    }
}