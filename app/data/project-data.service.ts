import * as console from 'console';
import {Task, Project} from '../models/models';
import {Repository} from './repository';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService extends Repository {
    constructor() {
        super("projects", "project");
    }

    addTask(project: Project, task: Task) {
        let currentDate = new Date();
        task.created = currentDate;
        task.edited = currentDate;
        task.loggedHours = 0;
        //todo get default status from db
        task.status = 'Active';
        task._id = this.createTaskId();
        project.tasks.push(task);
        this.update(project);
    }

    updateTask(project: Project, task: Task) {
        let projectTasks = project.tasks;
        let indexOfTaskToEdit = this.getTaskIndex(projectTasks, task._id);
        if (indexOfTaskToEdit > 0) {
            task.edited = new Date();
            projectTasks[indexOfTaskToEdit] = task;
            //todo log error
            this.update(project);
        }
    }

    deleteTask(project: Project, taskId: string) {
        let indexOfTaskToDelete = this.getTaskIndex(project.tasks, taskId);
        project.tasks.splice(indexOfTaskToDelete);
        this.update(project);
    }

    private getTaskIndex(projectTasks: Task[], taskId: string) {
        let taskIndex = projectTasks.findIndex((item: Task) => {
            return taskId === item._id;
        });
        return taskIndex;
    }

    private createTaskId() {
        return 'task_' + new Date().getTime();
    }
}