import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() numero: number;
  @Output() eliminar = new EventEmitter<number>();

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

  enviar(){
    this.eliminar.emit(this.numero);
  }

}