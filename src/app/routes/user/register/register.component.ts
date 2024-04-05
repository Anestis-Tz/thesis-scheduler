import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {
  registerGroup: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
      password: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
      // privacy: [false, Validators.requiredTrue]
    });
  }

  register() {
    // console.log("sas")
    // if (!this.registerGroup.valid) return;
    this.authService.createUser(this.registerGroup.value.username, this.registerGroup.value.email, this.registerGroup.value.password);
  }
}
