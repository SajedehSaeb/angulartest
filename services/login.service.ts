import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  check(person: Person[]) {
    throw new Error('Method not implemented.');
  }

  loginUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http : HttpClient) {}

  getInfo(){
    return this.http.get(this.loginUrl);
  }

  checkPerson(){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(Person);
    console.log(body);

    return this.http.post(this.loginUrl + 'people', body,{'headers':headers})
  }
}
