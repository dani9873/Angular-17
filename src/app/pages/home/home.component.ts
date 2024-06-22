import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    },
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators:[
      Validators.required,
    ]
  });
  changeHandler(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
  }
  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
     };
     this.tasks.update((tasks)=>[...tasks, newTask]);
  }
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position ) => position !== index));
  }
  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
          ...task,
          completed: !task.completed
          }
        }
      return task;
    })
  })
}
}