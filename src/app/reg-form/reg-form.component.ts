import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {

  formLogin: boolean | undefined;

    regFormLogin =new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
      lastName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
      email : new FormControl(),
      password : new FormControl('', [ Validators.required,Validators.minLength(10), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/)])

    })

    constructor(private rou:ActivatedRoute){}
  ngOnInit(): void {
      this.formLogin = this.rou.snapshot.paramMap.get('form') === 'form';
    }

}


  
