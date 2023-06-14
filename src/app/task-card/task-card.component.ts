import { Component, Input, Output,EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent {
  deleteIcon = faTrash;
  @Input() task: any;
  @Input() deleteTaskFromList: any;
  @Output() id = new EventEmitter();
  deleteHandler(taskId: number) {
    this.id.emit(taskId)
  }
}
