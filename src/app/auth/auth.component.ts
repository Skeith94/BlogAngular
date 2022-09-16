
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Tokens } from '../models/Tokens';
import { async } from "rxjs";
@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ['./auth.component.css']
  })

 
export class AuthComponent{
  isLoginMode = true;
  loading: boolean = false;
  error: string = null;
  token: Tokens=null;

constructor(private authService:AuthService, private router: Router  ) {}


ngOnInit() {
 
}



onSubmit(form:NgForm):object {
  
  

  if (!form.valid) {
    return;
  }
  this.authService.login(form?.value?.username,form?.value?.password).forEach((data: Object) => this.token = { access_token:data["access_token"],refresh_token:data["access_token"],roles:data["roles"] });
  setTimeout(() => {
  console.log(this.token)
 }, 200); 
  

}

}
