import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Person } from '../model/person';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 // person: person[]=[];
 public person: Person;

  loginData: any;
  loginUrl = 'http://10.20.30.20:8080/Login'
  loginForm : FormGroup = new FormGroup ({
    username : new FormControl(''),
    name : new FormControl(''),
  })

  constructor(private login : LoginService,private http : HttpClient){
    this.person = new Person();
  }

  ngOnInit(): void {
    this.login.getInfo().subscribe ((allData: any) =>{
    this.loginData = allData;
    console.log(allData)
    });

    this.login.checkPerson().subscribe ((allData: any) =>{
      this.loginData = allData;
      console.log(allData)
      });
  }

  loginFunc( Username:string,Password:string){
    // console.log('add');
    // console.log(this.loginForm.value);
    const headers = { 'content-type': 'application/json'}
    this.person.username='mehr';
    this.person.password='Aa12345';
    return this.http.post(this.loginUrl , this.person,{'headers':headers})

  }


}
