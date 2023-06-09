import { Component, Input } from '@angular/core';
import { IWeatherCard } from '../../models/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() weatherCard: IWeatherCard;
}
