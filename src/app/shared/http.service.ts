import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEvents(path: string) {
    return this.http.get(`${this.baseUrl}/${path}`);
  }
}
