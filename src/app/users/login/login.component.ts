import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forgotForm: FormGroup;
  loginForm: FormGroup;
  isLoading = false;
  checked = false;
  loginFormSuccessful = false;
  laddaVal = true;
  forgotPass = true;
  forpassDone = false;
  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router,
    private dataService: DataService) {
    this.loginForm = fb.group({
      'email': ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$')
      ]],
      'password': ['', [
        Validators.required,
        Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
      ]]
    });
    this.forgotForm = fb.group({
      'email': ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$')
      ]]
    });

  }
  forgotPassword() {
    this.forgotPass = false;
  }
  loginAgain() {
    this.forgotPass = true;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.laddaVal = true;
      this.isLoading = !this.isLoading;
      const user = {
        'email': this.loginForm.value.email,
        'password': this.loginForm.value.password
      };
      this.authService.logIn(user).subscribe(data => {
        console.log(data.user);
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('username', data.user.firstName);

        if (!data.user.isVerified) {
          console.log(data.user.isVerified);
          this.loginFormSuccessful = true;
          this.loginForm.reset();
          this.laddaVal = false;
          console.log('user not verified');
        } else {
          if (data.user.role === 1) {
            this.router.navigate(['/users/artist']);
          } else if (data.user.role === 2) {
            this.router.navigate(['/users/user']);
          } else {
            console.error('User Authentication Problem');
            this.laddaVal = false;
          }
        }
      },
        err => {
          this.laddaVal = false;
          console.error(err);
        }
      );
    }


  }
  onSubmit2() {
    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value);
      this.authService.forPass(this.forgotForm.value).subscribe((res) => {
        console.log(res);
        this.forpassDone = true;

      }, (err) => { console.log(err); });

    }
  }


  ngOnInit() {
  }
}
