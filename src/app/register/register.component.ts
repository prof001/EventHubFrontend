import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetail: UserModel = new UserModel();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.registerUser('users/register', this.userDetail).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
