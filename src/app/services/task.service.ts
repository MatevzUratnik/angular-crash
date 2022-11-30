import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {   //sets parms option of header
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

/* observable for task items */

  getTasks(): Observable<Task[]> {
   //local api run from script names "server" on port 5000
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`; //get id of task for deletion
    return this.http.delete<Task>(url); //delete item by id from server
  }

  updateTaskReminder(task: Task): Observable<Task> {//change data on server 
    const url = `${this.apiUrl}/${task.id}`;//get id
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

}
