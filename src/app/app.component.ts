import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  titleH1 = 'To Do List'
  task = '';
  arrTasks: any = [];


  addTask() {
    this.arrTasks.push({ task: this.task, id: Date.now() });
    // console.log(this.arrTasks);
  }

  rmTask(item: any) {
    const liClose = item.closest('li');
    const idLi = Number(liClose.id);
    const index = this.arrTasks.findIndex((elemento: any) => elemento.id === idLi);
    if (index !== -1) {
      const removed = this.arrTasks.splice(index, 1);
    };
  }

  clearTasks() {
    this.arrTasks = [];
  }

  currentDate() {

  }
  
}
