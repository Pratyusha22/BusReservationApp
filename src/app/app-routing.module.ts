import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  {path:'Admin Login',component:AdminloginComponent},
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutComponent},
  {path:'Terms Of Use',component:TermsOfUseComponent},
  {path:'Contact Us',component:ContactUsComponent},
  {path:'Login',component:LoginComponent},
  {path:'Login/ForgotPassword',component:ForgotpasswordComponent},
  {path:'Sign-Up',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
