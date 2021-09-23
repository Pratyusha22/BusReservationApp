import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  ContactForm :FormGroup= new FormGroup({
    FirstName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    LastName:new FormControl(""),
    
    EmailAddress:new FormControl("",[Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"),Validators.required]),
    Password:new FormControl("",[Validators.pattern(" ^(?=\D*\d)(?=[^a-z][a-z])(?=[^A-Z][A-Z]).{8,30}$"),Validators.minLength(8),
                                  Validators.required]),
    ConfirmPassword:new FormControl(""),
    
    Mobileno:new FormControl("",[Validators.pattern("[789][0-9]{9}"),Validators.maxLength(10)])

  });
  constructor() { }

  ngOnInit(): void {
  }
  
  get FirstName()
  {
    return this.ContactForm.get('FirstName');
  }
  get LastName()
  {
    return this.ContactForm.get('LastName');
  }
  get EmailAddress()
  {
    return this.ContactForm.get('EmailAddress');
  }
  get Password()
  {
    return this.ContactForm.get('Password');
  }
  get ConfirmPassword()
  {
    return this.ContactForm.get('ConfirmPassword');
  }
  get Mobileno()
  {
    return this.ContactForm.get('Mobileno');
  }
  Submitinfo(){
    console.log(this.ContactForm.value)
  }

}