import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByLocationName(location: string): Observable<IWeather> {
    return this.http.get<IWeather>(
      `http://api.weatherapi.com/v1/current.json?key=7ddee4b4456940b09e962342232504&q=${location}&aqi=no`
    );
  }
}
