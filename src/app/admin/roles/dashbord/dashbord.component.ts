import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user.service';
import {UserQueryService} from '../../../user-query.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(public user: UserService, public query: UserQueryService) { 
    console.log(user);
    user.test = 'adios';
    console.log(query);
    query.prueba = 'path/adios';
  }

  ngOnInit() {
  }

}