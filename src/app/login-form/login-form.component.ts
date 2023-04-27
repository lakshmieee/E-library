import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

constructor(private rou:ActivatedRoute, private http:HttpClient, private route:Router, private toast:ToastrService){}
  ngOnInit(): void {
   this.rou.params.subscribe((res)=>{
    
   })
  }
  
  
  public get: any;
  login =new FormGroup({
    userName : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)

  })


  getDetails(){
  this.http.get<any>("http://localhost:3000/signUp").subscribe((res)=>{
    const user =res.find((a:any)=>{
      return a.email === this.login.value.userName && a.password ===this.login.value.password
    });
    if(user){
alert("you are successfully login");
this.login.reset();
this.route.navigate(['/search']);
    }else{
      alert("User not found");
      this.route.navigate(['/login']);
    }
  })
  
 }



}
