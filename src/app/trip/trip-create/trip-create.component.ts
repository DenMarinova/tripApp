import { Component, OnInit } from '@angular/core';
import { TripCreate } from '../models/trip-create.model';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {
  bindingModel : TripCreate;

  constructor(
    private tripService : TripService,
    private router : Router,
    private toastr : ToastrService,

  ) {
    this.bindingModel = new TripCreate('', '', '','');
  }

  ngOnInit(): void {
  }

  create() {
    this.bindingModel.creator = localStorage.getItem('user');
    this.tripService.createNewTrip(this.bindingModel)
   .subscribe(() => {
     this.toastr.success('New adventure created', 'Success')
     this.router.navigate(['/trip/list']);
   }, (err: Response) => {
    this.toastr.error(`${err.statusText}`,'Error');
    if (err.status == 401) {
     this.router.navigate(['auth/signin']);
   }
  })
  }

}
