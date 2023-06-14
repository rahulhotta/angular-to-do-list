import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public allTasksList: any = [];
  currentTask: any;
  deletedTaskId: any;
  addTaskToList(value: any) {
    var allTasks: any = []
    if (value.name.trim() !== '') allTasks = [value, ...this.allTasksList];
    this.allTasksList = allTasks;
  }
  deleteTask(event: any) {
    // console.log(event);
    // console.log(this.allTasksList);
   
    let deletedTaskIndex = this.allTasksList.findIndex((task : any)=>{
        return task.id === event
    })
    this.allTasksList.splice(deletedTaskIndex, 1);
  }
}
