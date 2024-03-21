import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";
import {CountryMapper} from "./mappers/country.mapper";
import {Country} from "./models/country.model";
import {CdkDrag, CdkDragDrop, CdkDropList} from '@angular/cdk/drag-drop';
import {Store} from "@ngrx/store";
import {highlightRegion} from "./actions/countries.actions";
import {selectRegionCountries, selectRegions} from "./selectors/countries.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'countries-app';
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  highlightedRegion: string = '';
  countries: Array<Country> = [];

  constructor(private countriesService: CountriesService, private store: Store<{ highlightedRegion: string }>) { }

  ngOnInit() {
    const savedCountries= localStorage.getItem('countries');
    if (savedCountries){
      this.countries = JSON.parse(savedCountries);
    }
    else{
      this.countriesService.fetchAllCountries().subscribe(res => {
        this.countries = CountryMapper.fromCountryDtoToCountry(res);
      })
    }

    this.store.select(selectRegionCountries).subscribe(region => {
      console.log(region);
      this.highlightedRegion = region;
    });
  }

  onCountryHover(region: string) {
    this.store.dispatch(highlightRegion({ highlightedCountry: region }));
  }

}
