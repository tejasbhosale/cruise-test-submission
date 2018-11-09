import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as obj from './cruises.object';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  constructor(private http: HttpClient) { }


  getCofig() {
    return obj.default.data[0].attributes.itineraries;
  }
  /*
  getConfig() {
    console.log(this.http.get(this.configUrl))
    this.http.get(this.configUrl).subscribe((data: any[]) => {
      console.log(data);
    });
    return this.http.get(this.configUrl);
  }
  */

}
