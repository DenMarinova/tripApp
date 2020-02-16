import { Component, OnInit } from '@angular/core';
import { TripCreate } from '../models/trip-create.model';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.scss']
})
export class TripEditComponent implements OnInit {
  id: string;
  bindingModel: TripCreate;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tripService.getById(this.id)
    .subscribe((data) => {
      this.bindingModel = data;
    })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }
    this.tripService.editTrip(body)
    .subscribe((data) => {
      this.toastr.success('Trip edited!', 'Success!');
      this.router.navigate(['/trip/list']);
    })
  }
}
