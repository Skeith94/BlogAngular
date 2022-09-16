
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Tokens } from '../models/Tokens';
@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ['./auth.component.css']
  })
export class AuthComponent{
  isLoginMode = true;
  loading: boolean = false;
  error: string = null;
  token;


constructor(private authService:AuthService, private router: Router) {}


ngOnInit() {
 
}


onSubmit(form:NgForm):object {
  

  if (!form.valid) {
    return;
  }

    this.authService.login(form.value.username,form.value.password);
}

}
