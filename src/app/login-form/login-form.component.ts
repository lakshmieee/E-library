import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  
  public get: any;
  login =new FormGroup({
    userName : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)

  })

  getDetails(){
this.get={
  userName : this.login.controls['userName'].value,
  password : this.login.controls['password'].value
};
console.log(this.get);



 }

}
