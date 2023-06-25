import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public countryData: any = {};

  constructor(private countryService: CountryService) {}

  // FETCH API

  fetchCountries() {
    this.countryService.getCountries().subscribe((response) => {
      this.countryData = response;
      // console.log(this.countryData);
    });
  }

  ngOnInit(): void {
    this.fetchCountries();
  }
}
