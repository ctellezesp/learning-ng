import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.css']
})
export class SyntaxComponent implements OnInit {

  teams = ['Manchester City', 'Liverpool', 'Spurs', 'Chelsea'];

  constructor() { }

  ngOnInit() {
  }

}
