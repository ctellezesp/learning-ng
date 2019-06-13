import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';


class Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  records;
  id;
  post: Post;

  constructor(private Posty: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void{
    this.Posty.getAll().subscribe(records => this.records = records);
  }

  deletePost(): void{
    //this.Post.delete(id);
    console.log("Si jalo");
    this.id = this.route.snapshot.params.id;
    this.Posty.delete(this.id).subscribe((data)=>{
         console.log("success");
    });
  }

  crear(): void{
    console.log(this.records.length);
    this.post = { "userId": 1, "id": this.records.length, "title": "Mark", "body": "trying"};
    this.Posty.create(this.post).subscribe((data)=>{
         console.log("success");
    });
  }

}