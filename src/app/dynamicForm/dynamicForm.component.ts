import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicForm',
  templateUrl: './dynamicForm.component.html',
  styleUrls: ['./dynamicForm.component.css']
})
export class DynamicFormComponent implements OnInit {

  array = [1]

  constructor() { }

  ngOnInit() {
  }

  eliminarPadre(event){
    this.array.pop();
  }
}