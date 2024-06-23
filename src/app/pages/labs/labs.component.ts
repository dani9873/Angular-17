import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear un proyecto',
    'Crear un componente',
    'Crear un servicio',
  ]);
  name = signal('Nicolas');
  age= 20;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'Nicolas',
    age: 1,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true,
  });
  nameCtrl = new FormControl('Nicolas',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ]
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler(){
    alert('Hola Mundo');
  }

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.name.set(newValue)
  }

  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  changeAge(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.person.update(preState => {
    return {
      ...preState,
      age: parseInt(newValue, 10)
  }
  });
  }
  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.person.update(preState => {
    return {
      ...preState,
      name: newValue
  }
  });
  }
}
