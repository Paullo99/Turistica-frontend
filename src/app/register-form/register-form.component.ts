import { Component, ErrorHandler, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      phoneNumber: ['', Validators.pattern("[- +()0-9]+")],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      repeatPassword: ['', [Validators.minLength(8), Validators.required]]
    }, {
      validator: this.checkPasswords('password', 'repeatPassword')
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


  register(){
    this.userService.insertNewUser(this.registerFormGroup).subscribe(
      (data) => {
        alert("Rejestracja przebiegła pomyślnie!");
        this.router.navigate(['']);
      }, (error) => {
        if(error.status = 409){
          alert("Konto dla podanego adresu email już istnieje!");
        }
        else{
          alert("Błąd krytyczny! Spróbuj ponownie.");
        }
      }
    );
  }

}
