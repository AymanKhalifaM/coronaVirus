import { CoronaService } from './../../services/corona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  countires: any;
  theCountry: string;
  confirmedData: number;
  recoveredData: number;
  deathsData: number;
  date;
  countryData;
  error;

  constructor(private corona: CoronaService) { }

  ngOnInit() {
    this.corona.getCountries().subscribe(countiresData => {
      // console.log(countiresData)
      this.countires = countiresData;
    }, error => {
      // console.log(error)
      this.error = error.message;
    })

  }



  getCountryStatus(country) {
    this.corona.getData(country).subscribe((d: any) => {
      // console.log(d)
      var i = d.length - 1;
      // console.log(i)
      this.countryData = d[i].Country;
      this.confirmedData = d[i].Confirmed;
      this.recoveredData = d[i].Recovered;
      this.deathsData = d[i].Deaths;
      this.date = d[i].Date;
    }, error => {
      // console.log(error)
      this.error = error.error.message;
    })
  }

}
