import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrazioneService } from './registrazione.service';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  isLoginMode = true;
  loading: boolean = false;
  error: string = null;
  token:Object;
  
  constructor(private registrazioneService:RegistrazioneService) {}

  ngOnInit(): void {
  }


  onSubmit(form:NgForm) {
    const checkusername = "username_occupato";
    const checkemail = "email_occupata";
    const checkcreated = "account_creato";
    let b = false;
    if (!form.valid) {
    return;
  }
 

  this.registrazioneService.registrazione(form.value.username,form.value.password,form.value.nome,form.value.email).subscribe((event:any)=>b = (event === checkemail || event === checkusername || event === checkcreated) ? true : false ) 
  
  setTimeout(() => {
    console.log(b);
   }, 200); 
 
}

}
