import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ContactForm :FormGroup= new FormGroup({
    Username:new FormControl("",[Validators.required,Validators.minLength(5)]),
    Password:new FormControl("",[Validators.required,Validators.pattern(" /^(?=.[A-Z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/"),
    Validators.minLength(8)])
  }
  );
  constructor() { }

  ngOnInit(): void {
  }
  get Username()
  {
    return this.ContactForm.get('Username');
  }
  get Password()
  {
    return this.ContactForm.get('Password');
  }
  SubmitInfo()
  {
    console.log(this.ContactForm.value)
  }

}