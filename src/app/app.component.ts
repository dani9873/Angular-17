import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'todo-app';
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear un proyecto',
    'Crear un componente',
    'Crear un servicio',
  ];
}
