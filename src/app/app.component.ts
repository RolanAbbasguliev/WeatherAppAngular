import { Component, OnInit } from '@angular/core';
import {
  IWeatherDaily,
  IWeatherHightLights,
  IWeatherToday,
} from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  weatherInfoToday: IWeatherToday;
  weatherInfoDaily: IWeatherDaily;
  weatherHightlights: IWeatherHightLights;

  location: string = 'Saint-Petersburg';

  constructor(private weatherService: WeatherService) {}

  initWeatherInfo(location: string): void {
    this.weatherService
      .getWeatherTodayByLocationName(location)
      .subscribe((infoToday) => {
     
        this.weatherInfoToday = infoToday;

        this.weatherInfoToday.location.localtime = new Date(
          infoToday.location.localtime
        );

        this.weatherHightlights.uvIndex = this.weatherInfoToday.current.uv;
        this.weatherHightlights.feelslike_c =
          this.weatherInfoToday.current.feelslike_c;
        this.weatherHightlights.humidity =
          this.weatherInfoToday.current.humidity;
        this.weatherHightlights.vis_km = this.weatherInfoToday.current.vis_km;
        this.weatherHightlights.wind_kph =
          this.weatherInfoToday.current.wind_kph;
      });

    this.weatherService
      .getWeatherDailyByLocationName(location)
      .subscribe((infoDaily) => {
  
  
        this.weatherInfoDaily = infoDaily;
        console.log(this.weatherInfoDaily, 'GET INFO')
        this.weatherHightlights.sunsetTime = new Date(
          infoDaily.timelines.daily[0].values.sunsetTime
        );
        this.weatherHightlights.sunriseTime = new Date(
          infoDaily.timelines.daily[0].values.sunriseTime
        );
        for (let i = 0; i < infoDaily.timelines.daily.length; i++) {
          //set time
          this.weatherInfoDaily.timelines.daily[i].time = new Date(
            infoDaily.timelines.daily[i].time
          );

          // set sunset time
          this.weatherInfoDaily.timelines.daily[i].values.sunsetTime = new Date(
            infoDaily.timelines.daily[i].values.sunsetTime
          );

          // set sunrise time
          this.weatherInfoDaily.timelines.daily[i].values.sunriseTime =
            new Date(infoDaily.timelines.daily[i].values.sunriseTime);

          // set moonset time
          this.weatherInfoDaily.timelines.daily[i].values.moonsetTime =
            new Date(infoDaily.timelines.daily[i].values.moonsetTime);

          // set moonrise time
          this.weatherInfoDaily.timelines.daily[i].values.moonriseTime =
            new Date(infoDaily.timelines.daily[i].values.moonriseTime);
        }
        console.log(this.weatherInfoDaily, 'DAILY INFO')
      });
  }

  update(location: string) {
    this.location = location;
    this.initWeatherInfo(location);
  }

  ngOnInit(): void {
    console.log(this.weatherInfoDaily);
    this.initWeatherInfo(this.location);
  }
}
