import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {EventModel} from '../models/event.model';

@Component({
  selector: 'app-regular-events',
  templateUrl: './regular-events.component.html',
  styleUrls: ['./regular-events.component.css']
})
export class RegularEventsComponent implements OnInit {
  events: EventModel[] = [new EventModel()];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.httpService.getEvents('events/regular').subscribe(
      res => {
        this.events = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
