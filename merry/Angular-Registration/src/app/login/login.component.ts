import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { LoginModel } from '../login/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  email: string = "sample@gmail.com";
  password: string = "test123";

  constructor(fb: FormBuilder, private router: Router){    
    this.loginForm = fb.group({    
      'email' : [null, Validators.required],
      'password': [null,  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
    })
  }

  ngOnInit() {
  }

  submitForm(formValues: LoginModel){
    if(formValues.email == this.email && formValues.password == this.password){
      this.router.navigate(['home']);
      return;
    }  

  }

}
