import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})

export class LoginComponent {
  loginGroup: FormGroup;
  private token: string = '';
  hidePassword = true;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService) {
    this.loginGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginGroup.valid) {
      this.authService.login(this.loginGroup.value.email, this.loginGroup.value.password);
      // this.userService.getUsers();
    }
  }
  
}
