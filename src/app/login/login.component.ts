import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {AuthService} from '../shared/auth.service';
import {UserModel} from '../models/user.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: UserModel = new UserModel();
  loginError;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  loginUser() {
    this.authService.loginUser('users/login', this.userDetails).subscribe(
      res => {
        // @ts-ignore
        localStorage.setItem('x-access-token', res.token);
        // @ts-ignore
        localStorage.setItem('userId', res.userId);
        this.router.navigate(['/special']);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.loginError = err.error.message;
          }
        }
      }
    );
  }
}
