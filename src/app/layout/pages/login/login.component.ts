import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private readonly properties = {
    email: [''],
    password: ['']
  };
  email: string;
  password: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(this.properties);
  }

  login() {

    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    console.log(email, password)
  }

}
