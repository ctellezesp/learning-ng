import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class PersonsService{
  usersUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get(this.usersUrl);
  }


}