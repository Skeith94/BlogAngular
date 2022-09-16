import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class RegistrazioneService {
     
 
     
     constructor(private http:HttpClient,private router: Router) {
    
     }

    public registrazione(username:string,password:string,name:string,email:string) {
        
            var loginUrl = "http://localhost:8080/api/user/registration";
            
            return this.http.post(loginUrl,{username,password,name,email},{reportProgress: true,
                responseType: 'text'
             });
    }



  }