import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createNewUserUrl: string;

  constructor(private httpClient: HttpClient) {
    this.createNewUserUrl = "http://localhost:8080/register";
  }

  public insertNewUser(registerFormGroup: FormGroup){
    this.encryptPassword(registerFormGroup.value.password);
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
      }
      );
  }

  encryptPassword(password: string){
    let encryptedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.log(encryptedPassword);
    return encryptedPassword;
  }
}
