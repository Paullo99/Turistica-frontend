import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserForAdmin } from '../classes/user-for-admin';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; user: UserForAdmin },
    private userService: UserService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.userService.editUser(this.data.user).subscribe((response) => {
      this.appService.showSnackBar('Użytkownik został zaktualizowany!');
    },
      (error) => {
        if (error.status == 409) {
          this.appService.showSnackBar('Błąd! Spróbuj jeszcze raz');
        }
      }
    );
  }

}
