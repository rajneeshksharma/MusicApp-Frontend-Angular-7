import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import {
  SocialAuthService,
  GoogleLoginProvider
} from 'ng-social';



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
  fullName: any;
  name: string;
  display = false;
  firstName: string;
  lastName: string;
  userSocial_id: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router,
    private dataService: DataService,
    private socialAuthService: SocialAuthService) {
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






  public socialLogin(platform: string) {
    let socialPlatformProvider;

    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {

      this.name = userData.name;
      this.fullName = this.name.split(' ');
      this.firstName = this.fullName[0];
      this.lastName = this.fullName[this.fullName.length - 1];
      // tslint:disable-next-line:max-line-length
      console.log(platform + ' login in data : ', userData, userData.email, userData.id, this.firstName, this.lastName);
      this.userSocial_id = userData.id;
      const socialUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: userData.email,
        social_id: userData.id,
        provider: userData.provider
      };
      this.authService.socialcontrol(socialUser).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.user.token);
        localStorage.setItem('username', res.user.firstName);

        if (res.user.role === 1) {
          this.router.navigate(['/users/artist']);
        } else if (res.user.role === 2) {
          this.router.navigate(['/users/user']);
        } else {
          this.display = true;
          console.log('role not selected');
        }
      }, err => {
        console.error(err);
      });

    });
  }

  forgotPassword() {
    this.forgotPass = false;
  }
  loginAgain() {
    this.forgotPass = true;
  }
  userRole(data) {
    const socialChange = {
      role: data,
      social_id: this.userSocial_id
    };
    console.log(socialChange, 'at start');
    this.authService.userRole(socialChange).subscribe(
      res => {
        console.log(res);
        if (res.user.role === 1) {
          this.router.navigate(['/users/artist']);
        } else if (res.user.role === 2) {
          this.router.navigate(['/users/user']);
        } else {
          console.log('role not selected');
        }
        this.display = false;
      }, err => {
        console.log(err);
      }
    );
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
