import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router, private app: AppComponent) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.email,Validators.required]],
      password: ['',  Validators.required]
    });
  }
  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = 'http://localhost:8080/login';
    let result = this.httpClient.post(url, {
        email: this.loginFormGroup.value.email,
        password: this.loginFormGroup.value.password
    }).subscribe(isValid => {
        if (isValid) {
            sessionStorage.setItem(
              'token',
              btoa(this.loginFormGroup.value.email + ':' + this.loginFormGroup.value.password)
            );
            this.router.navigate(['']);
            this.app.isAuthenticated = true;
        } else {
            alert("Authentication failed.");
            this.app.isAuthenticated = false;
        }
    });
}
}
