import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http : HttpClient) {}

  getCity(){
    return this.http.get(this.url);
  }

}
