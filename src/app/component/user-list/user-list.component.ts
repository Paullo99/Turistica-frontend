import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserForAdmin } from '../../class/user-for-admin';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { AppService } from '../../service/app.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: UserForAdmin[] = [];
  columnsToDisplay = [
    'name',
    'lastName',
    'email',
    'phoneNumber',
    'role',
    'edit',
    'delete',
  ];
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      () =>
        this.appService.showSnackBar(
          'Błąd pobierania danych. Spróbuj ponownie.'
        )
    );
  }

  getViewValue(role: any) {
    if (role == 'ROLE_GUIDE') {
      return 'Przewodnik';
    } else if (role == 'ROLE_ADMIN') {
      return 'Administrator';
    } else {
      return '';
    }
  }

  delete(user: UserForAdmin) {
    const dialogRef = this.dialog.open(DeleteUserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(user.id!).subscribe(
          (response) => {
            this.users = this.users.filter((u) => u !== user);
            this.appService.showSnackBar(
              'Użytkownik ' + user.email + ' został usunięty.'
            );
          },
          () =>
            this.appService.showSnackBar('Błąd krytyczny. Spróbuj ponownie.')
        );
      }
    });
  }

  edit(user: UserForAdmin) {
    const userCopy = { ...user };

    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { user: user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      } else {
        this.users = this.users.map((userInList) => {
          if (userInList.id == userCopy.id) {
            return userCopy;
          } else {
            return userInList;
          }
        });
      }
    });
  }
}
