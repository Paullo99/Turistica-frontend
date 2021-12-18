import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { UserForAdmin } from '../class/user-for-admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private createNewUserUrl: string = environment.apiURL + '/register';
  private loginUrl: string = environment.apiURL + '/login';
  private getUsersUrl: string = environment.apiURL + '/user-list';
  private addNewGuideOrAdminUrl: string = environment.apiURL + '/add-user';
  private editUserUrl: string = environment.apiURL + '/edit-user';
  private deleteUserUrl: string = environment.apiURL + '/delete-user/';
  private changePasswordUrl: string = environment.apiURL + '/change-password';

  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    return this.httpClient.get<any>(this.getUsersUrl);
  }

  public changePassowrd(changePasswordFormGroup: FormGroup) {
    return this.httpClient.put<any>(this.changePasswordUrl, {
      oldPassword: this.encryptPassword(
        changePasswordFormGroup.value.oldPassword
      ),
      newPassword: this.encryptPassword(
        changePasswordFormGroup.value.newPassword
      ),
    });
  }

  public addNewGuideOrAdmin(addNewUserFormGroup: FormGroup) {
    return this.httpClient.post<any>(this.addNewGuideOrAdminUrl, {
      email: addNewUserFormGroup.value.email,
      name: addNewUserFormGroup.value.name,
      lastName: addNewUserFormGroup.value.lastName,
      phoneNumber: addNewUserFormGroup.value.phoneNumber,
      role: addNewUserFormGroup.value.role,
    });
  }

  public editUser(user: UserForAdmin) {
    return this.httpClient.put<any>(this.editUserUrl, user);
  }

  public deleteUser(userId: number) {
    return this.httpClient.delete<any>(this.deleteUserUrl + userId);
  }

  public insertNewUser(registerFormGroup: FormGroup) {
    return this.httpClient.post<any>(this.createNewUserUrl, {
      email: registerFormGroup.value.email,
      password: this.encryptPassword(registerFormGroup.value.password),
      name: registerFormGroup.value.name,
      lastName: registerFormGroup.value.lastName,
      address: registerFormGroup.value.address,
      city: registerFormGroup.value.city,
      postcode: registerFormGroup.value.postcode,
      phoneNumber: registerFormGroup.value.phoneNumber,
    });
  }

  public loginUser(loginFormGroup: FormGroup) {
    return this.httpClient.post<any>(this.loginUrl, {
      email: loginFormGroup.value.email,
      password: this.encryptPassword(loginFormGroup.value.password),
    });
  }

  encryptPassword(password: string) {
    let encryptedPassword = CryptoJS.SHA256(password).toString(
      CryptoJS.enc.Hex
    );
    return encryptedPassword;
  }
}
