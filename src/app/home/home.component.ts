import { Component, OnInit } from '@angular/core';
import { HttpCountriesService } from '../http-countries.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allData: any = [];
  public allRegion: any = [];


  constructor(private httpCountiresService: HttpCountriesService) { }

  ngOnInit() {
    this.httpCountiresService.getRegion().subscribe(
      apiResponse => {
        console.log(Array.isArray(apiResponse))
        this.allData = apiResponse
        let list: any[] = []
        for (let i = 0; i < this.allData.length; i++) {

          list.push(apiResponse[i].region)

        }
        let uniqueList = [...new Set(list)]
        uniqueList.pop()
        console.log(apiResponse);
        console.log(list)
        console.log(uniqueList)
        this.allRegion = uniqueList;
        console.log(this.allRegion)

      });


  }
}
