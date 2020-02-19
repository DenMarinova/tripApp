import { Component, OnInit } from '@angular/core';
import { TripList } from '../models/trip-list.model';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tripServise.getById(this.id)
    .subscribe(data => {
      this.trip = data;
    })
  }


  isCreator(): boolean {
    return localStorage.getItem('user') === this.trip.creator;
  }

  deleteTrip() {
    this.tripServise.deleteTrip(this.id)
    .subscribe(() => {
      this.toastr.success('Trip deleted', "Success");
      this.router.navigate(['/trip/list']);
    })
  }
}
