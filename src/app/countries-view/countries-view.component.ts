import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCountriesService } from '../http-countries.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css'],
  providers: [Location]
})
export class CountriesViewComponent implements OnInit {
  public countriesData: any = [];

  constructor(private _route: ActivatedRoute, private router: Router, public httpCountiresService: HttpCountriesService, private location: Location, public toastrService: ToastrService) {

  }

  ngOnInit() {


    let myRegion = this._route.snapshot.paramMap.get('region');
    console.log(myRegion);
    let currency = this._route.snapshot.paramMap.get('currency')
    console.log(currency);
    let language = this._route.snapshot.paramMap.get('language')
    console.log(language)

    if (myRegion != undefined && myRegion != null) {
      this.httpCountiresService.getCountries(myRegion).subscribe((
        data => {
          console.log(data)
          this.countriesData = data;
          console.log(this.countriesData)
        }
      ))
    }
    else if (currency != undefined && currency != null) {
      this.httpCountiresService.getCurrency(currency).subscribe((
        data => {
          console.log(data)
          this.countriesData = data;
          setTimeout(() => {
            this.toastrService.success('Currency filter applied ', 'Success!')
          }, 100)

        }
      ))
    }
    else {
      this.httpCountiresService.getLanguage(language).subscribe((
        data => {
          console.log(data)
          this.countriesData = data;
          setTimeout(() => {
            this.toastrService.success('Language filter applied ', 'Success!')
          }, 100)

        }
      ))
    }

  }
  public goBackToPreviousPage(): any {
    this.location.back();

  }
}