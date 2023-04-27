import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
redirect: any;

  constructor(private rou:Router,private http:HttpClient, private toast:ToastrService){
  }
signUpUser:any;
  formLogin: boolean | undefined;

    regFormLogin =new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('', [ Validators.required,Validators.minLength(10)])

    })

    signup(){
this.signUpUser=this.regFormLogin.value.email
    this.http.post<any>("http://localhost:3000/signUp", this.regFormLogin.value).subscribe((res)=>{
this.toast.success(this.signUpUser, "you are successfully registered");
this.regFormLogin.reset();
this.rou.navigate(['/login']);
    }) 
    }
}


  
