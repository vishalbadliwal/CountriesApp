import { Component, OnInit } from '@angular/core';
import { HttpCountriesService } from '../http-countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  public countryData: any = []

  constructor(public _route: ActivatedRoute, public router: Router, public httpCountriesService: HttpCountriesService, public toastrService: ToastrService) { }

  ngOnInit() {
    let myCountry = this._route.snapshot.paramMap.get('name');
    console.log(myCountry);
    this.httpCountriesService.getCountry(myCountry).subscribe(
      data => {
        console.log(data)
        this.countryData = data;
        console.log(this.countryData)
      },
      error => {
        console.log("some error occured")
        console.log(error.errorMessage);
      })
  }
}
