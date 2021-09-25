import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { SeatComponent } from './seat/seat.component';
import { SignUpComponent } from './signup/signup.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'Admin Login',component:AdminloginComponent},
  {path:'Admin Login/AdminForgotPassword',component:AdminforgotpasswordComponent},
  {path:'Admin Login/AdminForgotPassword/Admin Login',component:AdminloginComponent},
  {path:'Admin Login/admindashboard',component:AdmindashboardComponent},
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutComponent},
  {path:'Terms Of Use',component:TermsOfUseComponent},
  {path:'Contact Us',component:ContactUsComponent},
  {path:'Login',component:LoginComponent},
  {path:'Login/ForgotPassword',component:ForgotpasswordComponent},
  {path:'Login/userdashboard',component:UserdashboardComponent},
  {path:'Login/ForgotPassword/Login',component:LoginComponent},
  {path:'Login/Sign-Up',component:SignUpComponent},
  {path:'Sign-Up',component:SignUpComponent},
  {path:'Sign-Up/userdashboard',component:UserdashboardComponent},
  {path:'Sign-Up/Login',component:LoginComponent},
  {path:'Login/Sign-Up/Login',component:LoginComponent},
  {path:'Home/Searchbus',component:SearchbusComponent},
  {path:'home/Searchbus/Seat',component:SeatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
