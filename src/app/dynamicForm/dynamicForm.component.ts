import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicForm',
  templateUrl: './dynamicForm.component.html',
  styleUrls: ['./dynamicForm.component.css']
})
export class DynamicFormComponent implements OnInit {

  contacts = ["Correo", "Telefono", "Facebook", "Blackberry PIN"];
  contactSelected = 'Correo';

  config = [
    {
      type: 'input',
      label: 'Correo',
      name: 'Correo',
      placeholder: 'Introduce tu correo',
    },
    {
      type: 'input',
      label: 'Telefono',
      name: 'Telefono',
      placeholder: 'Introduce tu telefono',
    },
    {
      type: 'input',
      label: 'Facebook',
      name: 'Facebook',
      placeholder: 'Introduce tu Facebook',
    },
    {
      type: 'input',
      label: 'Blackberry PIN',
      name: 'Blackberry PIN',
      placeholder: 'Introduce tu Blackberry PIN',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}