import { Component, OnInit } from '@angular/core';
import { TripList } from '../models/trip-list.model';
import { TripService } from '../trip.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  trip: TripList;
  id: string;

  constructor(
    private tripServise: TripService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tripServise.getById(this.id)
    .subscribe(data => {
      this.trip = data;
    })
  }
  deleteTrip() {

  }
}
