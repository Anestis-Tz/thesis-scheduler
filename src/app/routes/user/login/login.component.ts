import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginGroup: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) {
    this.loginGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginGroup.valid) {
      console.log(this.loginGroup.value);
    }
  }
}
