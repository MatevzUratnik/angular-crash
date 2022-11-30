import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: Boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {//toggles value of button, sets value to subject
    console.log('Toogle Add Task');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {//makes subject to observable and makes subscribe
    return this.subject.asObservable();
  }
}
