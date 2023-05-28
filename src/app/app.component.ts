import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  titleH1 = 'To-Do List'
  task = '';
  arrTasks: any = [];


  addTask() {
    this.arrTasks.push({ task: this.task, id: Date.now() });
  }

  rmTask(item: any) {
    const idLi = item.id;
    const index = this.arrTasks.findIndex((elemento: any) => elemento.id === idLi);
    if(index !== -1) {
      const removed = this.arrTasks.splice(index, 1);
      return removed;
    }
    console.log(index);
  }

  clearTasks() {
    this.arrTasks = [];
  }

  doneTask(item: any) {
    item.completed = true;
  }
  
}
