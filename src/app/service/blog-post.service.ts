import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { ApiService } from "./api.service";
import { environment } from "../../environments/environment";
import { BlogPreview } from "../models/blog-preview";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BlogPostService {
  constructor(private apiService: ApiService) {}


  public GetPosts(): Observable<BlogPreview[]> {
    return this.apiService.Get(environment.api.entries+"/home").pipe(
      map(json => {
        return json.map(post => new BlogPreview(post));
      })
    );
  }
  
  public GetPost(id: string): Observable<BlogPreview> {
    return this.apiService.Get(environment.api.entries + "/").pipe(
      map(json => {
        return new BlogPreview(json);
      })
    );
  }

  
  public CreatePost(post: BlogPreview): Observable<any> {
    return this.apiService.Post(environment.api.entries, post);
  }

  public deletePost(id) {
    return this.apiService.Delete(environment.api.entries + "/" + id);
  }
}
