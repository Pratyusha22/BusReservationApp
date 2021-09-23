import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ContactForm :FormGroup= new FormGroup({
    Username:new FormControl(""),
    Password:new FormControl("")
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