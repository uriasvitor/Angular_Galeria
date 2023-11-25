import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    TabsComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
