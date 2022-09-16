import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { ApiService } from '../service/api.service';
import { provideCloudinaryLoader, provideImageKitLoader } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Tokens } from '../models/Tokens';
import { Token } from '@angular/compiler';




const API_URL = environment.api.base;

@Injectable({providedIn:'root'})
export class AuthService {
     
    private loginUrl = 'api/login';
    private headers = new Headers({'Content-Type': 'application/json'});
     
     constructor(private http:HttpClient,private router: Router,private apiService: ApiService) {
    
     }

    

    public login(username:string,password:string) {
        
          let token:Token;
            var loginUrl = "http://localhost:8080/api/login";
            this.http.get(loginUrl, {withCredentials: true});
             this.http.post( loginUrl,{"username":username, "password":password},{withCredentials: true,})
            .subscribe(
              res => {
            console.log(res);
              return res
              }, err => {
                console.log(err);
              }
            )
          }
          
    }


   



  
  
