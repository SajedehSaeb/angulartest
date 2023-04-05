import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit{
  constructor(private http: HttpClient ,private authService: AuthService, private router: Router, private formBuilder: FormBuilder ){}

  loginForm : FormGroup = new FormGroup ({
    userName : new FormControl(''),
    password : new FormControl(''),
  })
  isSubmitted = false;

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  login(){
    this.isSubmitted = true;
    console.log(this.loginForm.value);
    this.http.post<any>("http://10.20.30.20:8080/Login" , this.loginForm.value).subscribe(res=>{
      const user = res.find  ((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
      });
    if(user){
      this.router.navigateByUrl('/admin');
    }else{
      return;
    }
  })
}
}
