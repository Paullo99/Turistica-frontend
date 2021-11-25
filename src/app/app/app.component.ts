import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isAuthenticated : boolean;
  public role: any;

  constructor(private router: Router){
    this.isAuthenticated = false;
    this.role = sessionStorage.getItem('role');
  }

  ngOnInit(){
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != '')
    {
      this.isAuthenticated = true;
      this.role = sessionStorage.getItem('role');
    } else {
      sessionStorage.setItem('token','');
      sessionStorage.setItem('role', '');
      this.isAuthenticated = false;
    }
  }

  logout() {
    sessionStorage.setItem('token','');
    sessionStorage.setItem('role', '');
    this.isAuthenticated = false;
    this.role = ""
    this.router.navigate(['']);
  }

  authenticated(){
    return this.isAuthenticated;
  }

}
