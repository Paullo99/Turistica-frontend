import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router, private appService: AppService) {
    this.changePasswordFormGroup = this.formBuilder.group({
      oldPassword: ['', [Validators.minLength(8), Validators.required]],
      newPassword: ['', [Validators.minLength(8), Validators.required]],
      repeatNewPassword: ['', [Validators.minLength(8), Validators.required]]
    }, {
      validator: this.checkPasswords('newPassword', 'repeatNewPassword')
    });
  }

  ngOnInit(): void {
  }

  checkPasswords(password: string, repeatPassword: string) {
    return (formGroup: FormGroup) => {
      let formControl = formGroup.controls[password];
      let repeatFormControl = formGroup.controls[repeatPassword];

      if (formControl?.value !== repeatFormControl?.value) {
        repeatFormControl.setErrors({ check: true });
      } else {
        repeatFormControl.setErrors(null);
      }
    }
  }

  changePassword(){
    this.userService.changePassowrd(this.changePasswordFormGroup).subscribe((data)=>
    {
      let email = atob(sessionStorage.getItem('token')!).split(':')[0];
      sessionStorage.setItem(
        'token',
        btoa(email + ':' + this.userService.encryptPassword(this.changePasswordFormGroup.value.newPassword))
      );
      this.appService.showSnackBar("Hasło zostało zmienione!")
      this.router.navigate([''])
    }, (error)=> {
      if(error.status==409){
        this.appService.showSnackBar("Stare hasło jest niepoprawne! Spróbuj ponownie")
      }
      else{
        this.appService.showSnackBar("Błąd krytyczny! Spróbuj ponownie")
      }
    });
  }

}
