import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createNewUserUrl: string = "http://localhost:8080/register";
  private loginUrl: string = "http://localhost:8080/login";
  private getUsersUrl: string = "http://localhost:8080/user-list";
  private addNewGuideOrAdminUrl: string = "http://localhost:8080/add-user";
  private changePasswordUrl: string = "http://localhost:8080/change-password";

  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    return this.httpClient.get<any>(this.getUsersUrl);
  }

  public changePassowrd(changePasswordFormGroup: FormGroup){
    return this.httpClient.put<any>(this.changePasswordUrl, 
      {
        oldPassword : this.encryptPassword(changePasswordFormGroup.value.oldPassword),
        newPassword : this.encryptPassword(changePasswordFormGroup.value.newPassword)
      });
  }


  public addNewGuideOrAdmin(addNewUserFormGroup: FormGroup){
    return this.httpClient.post<any>(this.addNewGuideOrAdminUrl, 
      {
        email : addNewUserFormGroup.value.email, 
        name : addNewUserFormGroup.value.name,
        lastName : addNewUserFormGroup.value.lastName,
        phoneNumber : addNewUserFormGroup.value.phoneNumber,
        role: addNewUserFormGroup.value.role 
      });
  }

  public insertNewUser(registerFormGroup: FormGroup){
    return this.httpClient.post<any>(this.createNewUserUrl, 
      {
        email : registerFormGroup.value.email, 
        password: this.encryptPassword(registerFormGroup.value.password),
        name : registerFormGroup.value.name,
        lastName : registerFormGroup.value.lastName,
        address : registerFormGroup.value.address,
        city : registerFormGroup.value.city,
        postcode : registerFormGroup.value.postcode,
        phoneNumber : registerFormGroup.value.phoneNumber     
      });
  }

  public loginUser(loginFormGroup: FormGroup){
    return this.httpClient.post<any>(this.loginUrl, 
      {
        email: loginFormGroup.value.email,
        password: this.encryptPassword(loginFormGroup.value.password)
      });
  }

  encryptPassword(password: string){
    let encryptedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.log(encryptedPassword);
    return encryptedPassword;
  }
}
