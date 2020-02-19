import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripList } from '../models/trip-list.model'
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  trips: Observable<TripList[]>;

  constructor(
    private tripService : TripService
  ) { }

  ngOnInit() {
    this.trips = this.tripService.getAllTrips();

  }

}
