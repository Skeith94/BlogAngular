import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const API_URL = environment.api.base;

@Injectable({
  providedIn: "root" //TODO: figure out how to inject service instead of being at root of app
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public Get(endpoint: string): Observable<any> {
    return this.http
      .get(API_URL + endpoint)
      .pipe(
        map(response => {
          var json = response;
          return json;
        })
      )
      .pipe(catchError(this.handleError));
  }

  public Post(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data)
      .pipe(catchError(this.handleError));
  }

  public Postlogin(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data)
      .pipe(catchError(this.handleError));
  }

  public Delete(endpoint: string) {
    return this.http
      .delete(API_URL + endpoint)
      .pipe(catchError(this.handleError));
  }

 

  //handle any error encounted while sending http request
  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return throwError(error);
  }

}
