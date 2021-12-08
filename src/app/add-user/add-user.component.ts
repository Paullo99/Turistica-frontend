import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForAdmin } from '../classes/user-for-admin';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addNewUserFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router, private appService: AppService) {
    this.addNewUserFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.pattern("[- +()0-9]+")],
      role: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  ngOnInit(): void {
  }


  addNewUser() {
    this.userService.addNewGuideOrAdmin(this.addNewUserFormGroup).subscribe(
      (data) => {
        this.appService.showSnackBar("Utworzono nowe konto!");
        this.router.navigate(['']);
      }, (error) => {
        if (error.status = 409) {
          this.appService.showSnackBar("Konto dla podanego adresu email już istnieje!");
        }
        else {
          this.appService.showSnackBar("Błąd krytyczny! Spróbuj ponownie.");
        }
      }
    );
  }

}
