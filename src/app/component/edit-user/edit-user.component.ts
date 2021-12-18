import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserForAdmin } from '../../class/user-for-admin';
import { AppService } from '../../service/app.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; user: UserForAdmin },
    private userService: UserService,
    private appService: AppService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.userService.editUser(this.data.user).subscribe(
      (response) => {
        this.appService.showSnackBar('Użytkownik został zaktualizowany!');
      },
      () => {
        this.appService.showSnackBar('Błąd! Spróbuj jeszcze raz');
      }
    );
  }
}
