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
  model: any = {};
  isLoggedIn: boolean = false;
  loginGroup: FormGroup;
  hidePassword = true;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService) {
    this.loginGroup = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]]
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginGroup.valid) {
      this.isLoading = true; // Show loading indicator
      const loginData = this.loginGroup.value;

      this.authService.login(loginData).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          this.isLoading = false; // Hide loading indicator
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false; // Hide loading indicator
        }
      });
    } else {
      console.error('Form is invalid:', this.loginGroup.errors);
    }
  }
  }
