import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCountriesService {

  private url = "https://restcountries.eu/rest/v2";

  constructor(public http: HttpClient) { }

  //exception handler
  public handlerError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message)
    return Observable.throw(err.message);

  }

  public getRegion() {
    let myResponse = this.http.get(this.url + '/all?fields=region')
    console.log(myResponse)
    return myResponse;

  }//end region

  public getCountries(region) {
    let countriesResult = this.http.get(this.url + '/region/' + region)
    console.log(countriesResult)
    return countriesResult;

  }//end countries

  public getCountry(name) {
    let countryResult = this.http.get(this.url + '/name/' + name + '?fullText=true')
    console.log(countryResult)
    return countryResult;

  }//end country

  public getCurrency(currencies) {
    let currencyFilter = this.http.get(this.url + '/currency/' + currencies)
    console.log(currencyFilter)
    return currencyFilter;

  }//end currency filter

  public getLanguage(languages) {
    let languageFilter = this.http.get(this.url + '/lang/' + languages)
    console.log(languageFilter)
    return languageFilter;

  }//end language filter
}