import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  stuForm : FormGroup = new FormGroup ({
    userName : new FormControl(''),
    email : new FormControl(''),
    city : new FormControl(''),
    check : new FormControl(''),
  })
  submitted = false;
  cityData: any;

  constructor(private formBuilder: FormBuilder , private city : CityService){}

  ngOnInit(): void {
    this.stuForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$]")]],
        city: ['', Validators.required],
        check: ['', Validators.required],
      }
    );

    // services

    this.city.getCity().subscribe ((allData: any) =>{
      this.cityData = allData;
      console.log(allData)
  })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.stuForm.controls;
  }


  save(){
    console.log('save');
    console.log(this.stuForm.value);
    this.submitted = true;
  }



}
