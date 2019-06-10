import {Component, OnInit} from '@angular/core';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-youNeedPermissions',
  templateUrl: './youNeedPermissions.component.html',
  styleUrls: ['./youNeedPermissions.component.css']
})

export class YouNeedPermissions implements OnInit {
  records;

  constructor(private Person: PersonsService){}
  
  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void{
    this.Person.getUsers()
      .subscribe(records => this.records = records);
  }
}