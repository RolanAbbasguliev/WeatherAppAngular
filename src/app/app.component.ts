import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  weatherInfo$: Observable<IWeather>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherInfo$ = this.weatherService.getAll();
  }
}
