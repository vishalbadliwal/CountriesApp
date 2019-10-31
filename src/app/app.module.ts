import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpCountriesService} from './http-countries.service';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesViewComponent,
    SingleCountryComponent,
    NotFoundComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'countries/:region',component:CountriesViewComponent},
      {path:'country/:name',component:SingleCountryComponent},
      {path :'currencyFilter/:currency',component:CountriesViewComponent},
      {path :'languageFilter/:language',component:CountriesViewComponent},
      {path: '**', component: NotFoundComponent }

    ])
  ],
  providers: [HttpCountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
