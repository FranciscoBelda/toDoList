import {Component, OnInit, signal} from '@angular/core';
import {ITask} from '../../common/interfaces';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-todo-page',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {
  taskList = signal<ITask[]>([]);
  filteredTaskList = signal<ITask[]>([]);
  deletedTaskList = signal<ITask[]>([]);
  isfilterRecordPresent = signal<boolean>(false);
  taskName: string = "";
  filter = 'All';

  ngOnInit() {
    const localData = localStorage.getItem('taskList');
    const deletedData = localStorage.getItem('deletedTaskList');
    if (deletedData) {
      const parseData = JSON.parse(deletedData);
      this.deletedTaskList.set(parseData);
    }
    if (localData) {
      const parseData = JSON.parse(localData);
      this.taskList.set(parseData);
      this.filteredTaskList.set(parseData);
      if (this.filteredTaskList().length > 0) {
        this.isfilterRecordPresent.set(true);
      }
    }
  }

  onAddTask(): void {
    // Creamos la nueva tarea
    const task: ITask = {
      taskName: this.taskName,
      taskStatus: 'New'
    } as ITask;
    // Añadimos la tarea al final del Array
    this.taskList.update(oldList => [...oldList, task]);
    this.filteredTaskList.set(this.taskList());
    localStorage.setItem('taskList', JSON.stringify(this.taskList()));
    this.isfilterRecordPresent.set(true);
    this.taskName = "";
  }

  onTextChange(): void {
    // Función de búsqueda de tareas dentro del Array
    // Filtra en el Array filterData
    const filterData = this.taskList().filter(m => m.taskName.startsWith(this.taskName));
    if (filterData.length > 0) {
      this.isfilterRecordPresent.set(true);
      this.filteredTaskList.set(filterData);
    } else {
      this.isfilterRecordPresent.set(false);
    }
  }


  deleteTask(task: ITask) {
    if (this.filter === 'Deleted') {
      const index = this.deletedTaskList().findIndex(i => i.taskName === task.taskName);
      const deletedItem = this.deletedTaskList().splice(index, 1)[0];
      this.filteredTaskList.set(this.deletedTaskList());
      localStorage.setItem('deletedTaskList', JSON.stringify(this.deletedTaskList()));
      return;
    }
    const index = this.taskList().findIndex(i => i.taskName === task.taskName);
    const deletedItem = this.taskList().splice(index, 1)[0];
    const deletedList = this.deletedTaskList();
    deletedList.push(deletedItem);
    this.deletedTaskList.set(deletedList);
    console.log(this.deletedTaskList());
    this.filteredTaskList.set(this.taskList());
    localStorage.setItem('taskList', JSON.stringify(this.taskList()));
    localStorage.setItem('deletedTaskList', JSON.stringify(this.deletedTaskList()));
    if (this.filteredTaskList().length == 0) {
      this.isfilterRecordPresent.set(false);
    }
  }

  taskCount(status: string): string {
    if (status === 'All') {
      return "("+this.taskList().length +")";
    }
    const count = this.taskList().filter(
      i => i.taskStatus === status
    );
    return "("+count.length+")";
  }

  filterByStatus(status: string) {
    this.filter = status;
    if (status === 'Deleted') {
      this.isfilterRecordPresent.set(true);
      this.filteredTaskList.set(this.deletedTaskList());
      return;
    }
    if (status === 'All') {
      this.filteredTaskList.set(this.taskList());
    }else {
      const list = this.taskList().filter(
        task => task.taskStatus === status
      );
      this.filteredTaskList.set(list);
    }
  }

  changeStatus(task: ITask,status: string) {
    task.taskStatus = status;
    localStorage.setItem('taskList', JSON.stringify(this.taskList()));
  }

  cleanHistory() {
    this.deletedTaskList.set([]);
    if (this.filter === 'Deleted') this.filteredTaskList.set([]);
    localStorage.setItem('deletedTaskList', JSON.stringify(this.deletedTaskList()));
  }
}
