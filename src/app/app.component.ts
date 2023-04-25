import { Component, OnInit } from '@angular/core';
import { IWeather } from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  weatherInfo: IWeather;
  location: string = 'Saint-Petersburg';

  constructor(private weatherService: WeatherService) {}

  initWeatherInfo(location: string): void {
    this.weatherService
      .getWeatherByLocationName(this.location)
      .subscribe((info) => {
        this.weatherInfo = info;
        this.weatherInfo.location.localtime = new Date(info.location.localtime);
      });
  }

  initLocation(location: string) {
    this.location = location;
    this.initWeatherInfo(location);
  }

  ngOnInit(): void {
    this.initWeatherInfo('');
  }
}
