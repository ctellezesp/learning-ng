import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map, first, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxJSComponent implements OnInit {
  obs$

observable1 = interval(400);
observable2 = interval(300);

  constructor() { }

  foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

  ngOnInit() {
    console.log('before');
    this.foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');

    map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    this.obs$ = ajax(`https://jsonplaceholder.typicode.com/users`).pipe(
      map(userResponse => console.log('users: ', userResponse)),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );
    
    /*this.subscription = this.observable1.subscribe(x => console.log('first: ' + x));
    this.childSubscription = this.observable2.subscribe(x => console.log('second: ' + x));
    this.subscription.add(this.childSubscription);
    this.setTimeout();*/

  }


}
