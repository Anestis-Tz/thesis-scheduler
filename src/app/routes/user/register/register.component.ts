import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ConfirmedValidator } from '../../../validators/ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {
  registerGroup: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: ConfirmedValidator('password', 'confirmPassword')
    } as AbstractControlOptions);
  }

  register() {
    if (this.registerGroup.valid) {
      this.authService.createUser(
        this.registerGroup.value.username, 
        this.registerGroup.value.email, 
        this.registerGroup.value.password);
    }
  }
}
