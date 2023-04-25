import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherToday, IWeatherDaily } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherTodayByLocationName(location: string): Observable<IWeatherToday> {
    return this.http.get<IWeatherToday>(
      `http://api.weatherapi.com/v1/current.json?key=7ddee4b4456940b09e962342232504&q=${location}&aqi=no`
    );
  }

  getWeatherDailyByLocationName(location: string): Observable<IWeatherDaily> {
    // return {} as Observable<IWeatherDaily>
   
    return this.http.get<IWeatherDaily>(
      `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=daily&apikey=YzL5HdKd4jxCgKnRfevS1vzPugn39Q5v`
   
    );
  }
}
