import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserForAdmin } from '../classes/user-for-admin';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserForAdmin[] = [];
  columnsToDisplay = ['name', 'lastName', 'email', 'role', 'delete', 'edit'];
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
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

  delete() {
    // const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
    //   data: { title: 'Usunąć wybranego użytkownika?' },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.usersList = this.usersList.filter(
    //       (userInList) => userInList !== user
    //     );
    //     this.userService.deleteUser(user.id!).subscribe((response) => {
    //       if (response == 200) {
    //         this.snackBar.open('Użytkownik został usunięty!', 'Ok', {
    //           duration: 3000,
    //         });
    //       }
    //     });
    //   }
    // });
  }

  edit() {
    // const userCopy = { ...user };

    // const dialogRef = this.dialog.open(EditUserDialogComponent, {
    //   data: { title: 'Edycja wybranego użytkownika', user: user },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //   } else {
    //     this.usersList = this.usersList.map((userInList) => {
    //       if (userInList.id == userCopy.id) {
    //         return userCopy;
    //       } else {
    //         return userInList;
    //       }
    //     });
    //   }
    // });
  }

}
