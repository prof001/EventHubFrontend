import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventModel} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }

  getEvents(path: string): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.baseUrl}/${path}`);
  }

  getSpecialEvents(path: string): Observable<EventModel[]> {
    return  this.http.get<EventModel[]>(`${this.baseUrl}/${path}`);
  }
}
