import { Component, OnInit } from '@angular/core';
import {FormControl,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
  this.email.hasError('email') ? 'Not a valid email' :'';
  }

  password = new FormControl('', [Validators.required]);

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : 'Nothing';
  }

}
