import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  alertMsg = ''
  alertColorBg = 'green'
  showAlert = false;
  redirectTab = ''

  alertProps(event: { message: string, alertColorBg: string , showAlert:boolean}){
    this.alertMsg = event.message;
    this.alertColorBg = event.alertColorBg;
    this.showAlert = event.showAlert;
  }

  alertPropstwo(event: { message: string, alertColorBg: string , showAlert:boolean}){
    this.alertMsg = event.message;
    this.alertColorBg = event.alertColorBg;
    this.showAlert = event.showAlert;
  }

  redirectToLogin(){
    this.redirectTab = 'signIn';
  }
}
