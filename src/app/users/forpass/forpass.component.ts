import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-forpass',
  templateUrl: './forpass.component.html',
  styleUrls: ['./forpass.component.css']
})
export class ForpassComponent implements OnInit {
  forgotPassForm: FormGroup;
  param1: string;
  param2: string;
  allgood = false;
  passwordSucess = false;
  someerror = false;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['id'];
      this.param2 = params['email'];
    });
    this.forgotPassForm = fb.group({
      'password': ['', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
      ])],
      'cpassword': ['', [
        Validators.required,
      ]]

    }, { validator: this.passwordMatchValidator });

  }
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('cpassword').value
      ? null : { 'mismatch': true };
  }

  ngOnInit() {
    const userInfo = {
      id: this.param1,
      email: this.param2
    };
    this.authService.testAuth(userInfo).subscribe(res => {
      this.allgood = true;
    }, err => {
      this.someerror = true;
    });
  }
  onSubmit() {
    if (this.forgotPassForm.valid) {
      const userInfo = {
        email : this.param2,
        newPassword : this.forgotPassForm.value.password
      };
      this.authService.newPass(userInfo).subscribe(res => {
        this.passwordSucess = true;
      },
        err => {
          console.error(err);
        }
      );
    }
  }

}
