import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.email,Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  login(): void {
    console.log("Tutaj będzie wysyłane POST do backendu");
  }
}
