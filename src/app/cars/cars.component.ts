import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  records;
  id;
  car = {};

  constructor(private Post: CarsService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void{
    this.Post.getCars().subscribe(records => {
      this.records = records.cars;
      console.log(this.records);
    });
  }

  delete(id: number): void{
    console.log("Si jalo");
    this.Post.delete(id).subscribe((data)=>{
         console.log("success");
    });
  }

  create(): void{
    this.car = {"id": this.records.length, "brand": "Ford", "color": "white", "wheels": 4, "price": 1000000, "img_url": "https://www.diariomotor.com/imagenes/picscache/1440x655c/ford-kuga-25turbo-individual-10_1440x655c.jpg"};
    this.Post.createRecord(this.car).subscribe(data=> console.log("Record Creado"));
  }

}
