import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import {PostService} from './post.service';

class Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()

export class PostResolver implements Resolve<Post> {
  constructor(private cs: PostService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Observable<never> {
    //let id = route.paramMap.get('id');
 
    return this.cs.getAll().pipe(
      mergeMap(result => {
        if (result) {
          console.log("Resolver funciona");
          return of(result);
        } else { // id not found
          this.router.navigate(['']);
          console.log("Los datos no fueron encontrados");
          return EMPTY;
        }
      })
    );
  }
}