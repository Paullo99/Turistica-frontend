import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isAuthenticated : boolean;

  constructor(private router: Router){
    this.isAuthenticated = false;
  }

  ngOnInit(){
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != '')
    {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  logout() {
    sessionStorage.setItem('token','');
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  authenticated(){
    return this.isAuthenticated;
  }

}
