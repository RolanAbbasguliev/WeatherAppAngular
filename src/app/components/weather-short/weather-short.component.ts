import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from '../../models/weather';
@Component({
  selector: 'app-weather-short',
  templateUrl: './weather-short.component.html',
  styleUrls: ['./weather-short.component.css'],
})
export class WeatherShortComponent  {
  @Input() weatherInfo: IWeather;

  @Output() outLocation = new EventEmitter<string>()


  enterLocation(locationInput: HTMLInputElement) {
    this.outLocation.emit(locationInput.value)
  }
}
