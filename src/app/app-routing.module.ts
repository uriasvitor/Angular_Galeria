import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './image/upload/upload.component';

const routes: Routes =[
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signin",
    component:SignInComponent
  },
  {
    path:'upload',
    component:UploadComponent

  },
  {
    path:'',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path:'**',
    component:HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
