import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name = '';
  upp;
  img;

  constructor() { }

  ngOnInit() {
  }

  check(){
    if(this.name.search('a') == -1){
      this.img = 'https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg';
      this.upp = '';
    }

    else{ this.upp = this.name.toUpperCase(); this.img = ''; }
  }

  tryAgain(){
    this.name='';
    this.upp = '';
    this.img = '';
  }

}
