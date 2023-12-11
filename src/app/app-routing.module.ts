import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './services/auth/authGuard.service';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UploadComponent } from './image/upload/upload.component';

const routes: Routes =[
  {
    path:'',
    component:HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'upload',
    component:UploadComponent,
    canActivate:[authGuard]
  },
  {
    path:"login",
    component:LoginComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
