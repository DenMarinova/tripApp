import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { TripList } from './models/trip-list.model';

const baseUrl = 'https://trips-b868f.firebaseio.com/trips/'

@Injectable({ providedIn: 'root'})
export class TripService {
  constructor(
    private http: HttpClient,
    ) { }

  getAllTrips() {
    return this.http.get(`${baseUrl}.json`)
    .pipe(map((res : Response) => {
      const trips: TripList[] = [];
      const ids = Object.keys(res);
      for (const i of ids) {
        trips
        .push(new TripList(i, res[i].name, res[i].imagePath, res[i].description));
      }

      return trips;
     }));
  }
}
