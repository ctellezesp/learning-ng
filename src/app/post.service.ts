import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

class Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class PostService{
  baseUrl = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient){}

  getPost(){
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
      .pipe(
        tap(_ => console.log('Post Recibidos'))
      );
  }


  create(post: Post): Observable<any>{
    return this.http.post<Post[]>(`${this.baseUrl}/posts`, post, httpOptions).
    pipe(
      tap(_ => console.log("Post publicado"))
    );
  }

  getOne(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts/${id}`).
    pipe(
      tap(_ => console.log("Post Recibido"))
    );
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/posts/${id}`)
  }

  update(){

  }

  query(){}

}