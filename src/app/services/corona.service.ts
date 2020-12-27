import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  countiresUrl = "https://api.covid19api.com/countries";
  dataUrl = "https://api.covid19api.com/dayone/country/";
  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.countiresUrl)
  }

  getData(c): Observable<any> {
    return this.http.get<any>(this.dataUrl + c);
  }
}
