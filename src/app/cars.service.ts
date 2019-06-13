import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

class Car{
  id: number;
  brand: string;
  color: string;
  wheels: number;
  price: number;
  img_url: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()

export class CarsService{
  baseUrl = "https://desolate-gorge-81309.herokuapp.com/cars";
  constructor(private http: HttpClient){}

  getCars(){
    return this.http.get(this.baseUrl);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createRecord(car: Car){
    return this.http.post(this.baseUrl, car, httpOptions);
  }

}