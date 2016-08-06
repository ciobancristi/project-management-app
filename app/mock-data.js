"use strict";
exports.MonetaryUnits = [
    {
        id: 1, name: 'USD'
    },
    {
        id: 2, name: 'RON'
    },
    {
        id: 3, name: 'EUR'
    }
];
exports.Statuses = [
    {
        id: 1, name: 'In Progress'
    },
    {
        id: 2, name: 'Finished'
    }
];
exports.Priorities = [
    {
        id: 1, name: 'Low'
    },
    {
        id: 2, name: 'Normal'
    },
    {
        id: 3, name: 'High'
    }
];
exports.Tasks = [
    {
        id: 1, name: 'Awesome task', description: "tick tick",
        comments: "", estimation: 4, status: exports.Statuses[0],
        priority: exports.Priorities[0], duration: 0, deadline: '',
        created: '', started: '', finished: '',
    }
];
exports.Projects = [
    {
        id: 1,
        name: "Awesome project",
        description: "Sweeet",
        estimation: 1,
        revenue: 100,
        monetaryUnit: exports.MonetaryUnits[0],
        status: exports.Statuses[0],
        created: '',
        finished: false,
        tasks: exports.Tasks
    },
    {
        id: 2,
        name: "Awesome project 2",
        description: "not so Sweeet",
        estimation: 1,
        revenue: 440,
        monetaryUnit: exports.MonetaryUnits[0],
        status: exports.Statuses[0],
        created: '',
        finished: false,
        tasks: exports.Tasks
    }
];
exports.Clients = [
    { id: 1, name: 'That guy', projects: exports.Projects }
];
//# sourceMappingURL=mock-data.js.map