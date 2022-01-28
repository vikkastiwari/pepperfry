import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../auth/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    // onSubmit( form: NgForm ) {
    //     console.log( form.value );
    //     form.reset();
    // }
    loginForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        email: new FormControl( null, [
            Validators.required,
            Validators.email,
            Validators.minLength( 6 )] ),
        password: new FormControl( null, [
            Validators.required,
            Validators.minLength( 3 )] )
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      map(token => this.router.navigate(['home']))
    ).subscribe()
  }
}
