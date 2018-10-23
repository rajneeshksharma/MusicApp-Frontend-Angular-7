import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { FormGroup , Validators , FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
@Output() userData = new EventEmitter<Event>();

  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router ) {
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
   }

  onSubmit() {
    if (this.loginForm.valid) {
const user = {
'email' : this.loginForm.value.email,
'password' : this.loginForm.value.password
};
this.authService.logIn(user).subscribe(data => {
localStorage.setItem('token', data.user.token);
localStorage.setItem('username', data.user.firstName);
this.userData.emit(data);
if (data.user.role === 1) {
this.router.navigate(['/users/artist']);
} else if (data.user.role === 2 ) {
this.router.navigate(['/users/user']);
} else {
 console.error('User Authentication Problem');
}

},
 err => {
console.error(err);
}
);
}
}
    ngOnInit() {
}
}
