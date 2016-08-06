import { Project } from "./models/models";
import { MonetaryUnit } from "./models/models";
import { Status } from "./models/models";
import { Task } from "./models/models";
import { Client } from "./models/models";
import { Priority } from "./models/models";

export const MonetaryUnits: MonetaryUnit[] = [
    {
        id: 1, name: 'USD'
    },
    {
        id: 2, name: 'RON'
    },
    {
        id: 3, name: 'EUR'
    }
]

export const Statuses: Status[] = [
    {
        id: 1, name: 'In Progress'
    },
    {
        id: 2, name: 'Finished'
    }
]

export const Priorities: Priority[] = [
    {
        id: 1, name: 'Low'
    },
    {
        id: 2, name: 'Normal'
    },
    {
        id: 3, name: 'High'
    }
]

export const Tasks: Task[] = [
    {
        id: 1, name: 'Awesome task', description: "tick tick",
        comments: "", estimation: 4, status: Statuses[0],
        priority: Priorities[0], duration: 0, deadline: '',
        created: '', started: '', finished: '',
    }
]

export const Projects: Project[] = [
    {
        id: 1,
        name: "Awesome project",
        description: "Sweeet",
        estimation: 1,
        revenue: 100,
        monetaryUnit: MonetaryUnits[0],
        status: Statuses[0],
        created: '',
        finished: false,
        tasks: Tasks
    },
    {
        id: 2,
        name: "Awesome project 2",
        description: "not so Sweeet",
        estimation: 1,
        revenue: 440,
        monetaryUnit: MonetaryUnits[0],
        status: Statuses[0],
        created: '',
        finished: false,
        tasks: Tasks
    }
];

export const Clients: Client[] = [
    { id: 1, name: 'That guy', projects: Projects }
]