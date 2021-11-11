import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  register(){
      console.log("Tutaj do backendu")
  
  }

}
