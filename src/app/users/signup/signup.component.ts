import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupSuccessful = false;

  roles = [{ 'id': 1, 'name': 'Artist' }, { 'id': 2, 'name': 'User' }];



  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = fb.group({
      'firstname': ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z]*)$'),
      ]],
      'lastname': ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z]*)$'),
      ]],
      'email': ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$')
      ]],
      'role': ['', Validators.required],
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

  onSubmit() {
    if (this.signupForm.valid) {
      const user = {
        'firstName': this.signupForm.value.firstname,
        'lastName': this.signupForm.value.lastname,
        'email': this.signupForm.value.email,
        'password': this.signupForm.value.password,
        'role': this.signupForm.value.role
      };
      this.authService.signUp(user).subscribe(datax => {
      console.log(datax, 'RESPONE FROM SERVER');
      this.signupSuccessful = true;
      this.signupForm.reset();
      });
    }
  }
  ngOnInit() {
  }

}
