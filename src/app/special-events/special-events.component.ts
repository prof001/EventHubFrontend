import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {EventModel} from '../models/event.model';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: EventModel[] = [new EventModel()];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this.httpService.getSpecialEvents('events/special').subscribe(
      res => {
        this.specialEvents = res;
        // console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
