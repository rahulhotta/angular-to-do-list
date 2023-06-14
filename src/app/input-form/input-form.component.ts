import { Component, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  inputText = '';
  @Output() taskEntered = new EventEmitter();
  
  addClickHandler() {
    let date = new Date().getTime().toString();
    this.taskEntered.emit({
      id: date,
      name: this.inputText,
    });
    this.inputText = '';
  }
}
