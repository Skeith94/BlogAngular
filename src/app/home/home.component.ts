import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BlogPostService } from "../service/blog-post.service";
import { BlogPreview } from "../models/blog-preview";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  posts: BlogPreview [];
  constructor(private postService: BlogPostService, private router: Router) {}
  p: number = 1;
  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading =false;
    });
  }
}
