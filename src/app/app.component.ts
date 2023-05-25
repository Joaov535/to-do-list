import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  titleH1 = 'To Do List'
  tarefa = '';
  arrTarefas: any = [];

  addTarefa() {
    this.arrTarefas.push({ tarefa: this.tarefa, id: Date.now() });
    // console.log(this.arrTarefas);
  }

  rmTarefa(item: any) {
    const liClose = item.closest('li');
    const idLi = Number(liClose.id);
    const index = this.arrTarefas.findIndex((elemento: any) => elemento.id === idLi);
    if (index !== -1) {
      const removido = this.arrTarefas.splice(index, 1);
    };
  }
}

// console.log(index);
// console.log({tarefa: liText[1], id: Number(idLi)});
// console.log(this.arrTarefas);