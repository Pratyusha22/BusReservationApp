import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
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
