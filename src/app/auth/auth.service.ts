import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';



@Injectable({providedIn:'root'})
export class AuthService {
     
 
     
     constructor(private http:HttpClient,private router: Router) {
    
     }


    public login(username:string,password:string) {
        
      
            var loginUrl = "http://localhost:8080/api/login";
            this.http.get(loginUrl, {withCredentials: true});
            return this.http.post( loginUrl,{"username":username, "password":password},{withCredentials: true,})
          
    }

  }


  
  
