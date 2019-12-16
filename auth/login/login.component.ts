import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  loginForm: FormGroup;
  btnDisabled = false;
  hide = true;
  constructor(
    private router: Router,
    private rest: RestApiService,
    private data: DataService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

 
  async login() {
    this.btnDisabled = true;
    try {
      // if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:4000/api/accounts/login',
          {
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
          },
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          await this.data.getProfile();
          this.router.navigate(['/']);
        } else {
          this.data.error(data['message']);
        }
        // this.data.user=undefined;
        // localStorage.clear();
      // }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
