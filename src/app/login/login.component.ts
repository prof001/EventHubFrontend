import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }

}
