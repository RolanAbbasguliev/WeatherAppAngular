import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '../../models/weather';
@Component({
  selector: 'app-weather-short',
  templateUrl: './weather-short.component.html',
  styleUrls: ['./weather-short.component.css'],
})
export class WeatherShortComponent implements OnInit {
  @Input() weatherInfo: IWeather | null;

  tempreture: number | undefined;

  getTempreture(): void {
    console.log(this.weatherInfo);
    this.tempreture =
      this.weatherInfo?.timelines[0].intervals[0].values.tempreture;
  }

  ngOnInit(): void {
    this.getTempreture();
  }
}
