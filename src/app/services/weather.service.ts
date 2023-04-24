import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IWeather> {
    return this.http.get<IWeather>(
      'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=current&units=metric&apikey=jQ8ZlsPTkqD7GkDAPJr2J63myGf5bklW'
    );
  }
}
