import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { TripList } from './models/trip-list.model';
import { TripCreate } from './models/trip-create.model';
import { Observable } from 'rxjs';

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

  createNewTrip(body : TripCreate): Observable<{}>{
    console.log(body);
    return this.http.post(`${baseUrl}.json`, body);
  }

  getById(tripId : string) {
    return this.http.get<TripList>(`${baseUrl}${tripId}.json`);
  }

  editTrip( body : TripCreate) {
    return this.http.patch(`${baseUrl}.json`, body);
  }

  deleteTrip(tripId : string) {
    return this.http.delete(`${baseUrl}${tripId}.json`);
  }

}
