import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app/app.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router, private app: AppComponent, private appService: AppService) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('role', '');
  }

  login() {
    let url = 'http://localhost:8080/login';
    let result = this.httpClient.post<any>(url, {
      email: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password
    }).subscribe(data => {
      if (data.isValid === "true") {
        sessionStorage.setItem(
          'token',
          btoa(this.loginFormGroup.value.email + ':' + this.loginFormGroup.value.password)
        );
        sessionStorage.setItem('role', data.role)
        this.router.navigate(['']);
        this.app.isAuthenticated = true;
        this.app.role = data.role
      } else {
        this.appService.showSnackBar("Niepoprawny login/hasło")
        this.app.isAuthenticated = false;
        this.app.role = ""
      }
    });
  }
}
