import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { FormBuilder, FormGroup, AbstractControl, Validators,ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    
    const regex = /\d/;

    if(regex.test(control.value) && control.value !== null) {
      return null;
    } else {
      return {passwordInvalid: true};
    }
  }

  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
        ]],
      phone: [null, [
        Validators.required
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.passwordContainsNumber
      ]],
      confirmPassword: [null, [Validators.required]]
    },{
       validators: CustomValidators.passwordsMatch
    })
  }

  onSubmit(){
    if(this.registerForm.invalid) {
      return; 
    }
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).pipe(
      map(user => this.router.navigate(['login']))
    ).subscribe()
  }
}