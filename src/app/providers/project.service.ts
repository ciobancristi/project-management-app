import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Project } from 'app/models/project';
import { Task } from 'app/models/task';
import { Status } from 'app/models/status';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {
  private projectsUrl = 'api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      catchError(this.handleError('getProjects', []))
    );
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      catchError(this.handleError<Project>(`getProject id = ${id}`))
    );
  }

  addProject(project: Project): Observable<Project> {
    // init default props
    // TODO: change to init default props on server
    project.statuses = this.statuses;
    project.created = new Date();
    project.modified = project.created;
    project.isFinished = false;
    project.tasks = [];
    return this.http.post<Project>(this.projectsUrl, project, httpOptions).pipe(
      catchError(this.handleError<Project>("addProject"))
    );
  }

  update(project: Project): Observable<Project> {
    // TODO: update modified on server
    project.modified = new Date();
    return this.http.put(this.projectsUrl, project, httpOptions).pipe(
      tap(_ => console.log(`updated project id=${project.id}`)),
      catchError(this.handleError<any>('updateProject'))
    )
  }

  addTask(task: Task, project: Project): Observable<Project>{
    // set default values on server
    task.created = new Date();
    task.modified = task.created;
    task.status = this.statuses[0];
    project.tasks.push(task);
    return this.update(project);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

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
}
