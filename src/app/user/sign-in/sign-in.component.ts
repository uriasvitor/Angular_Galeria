import { AuthService } from './../../services/auth.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Input() title = 'SignIn'

  credentials = {
    email: '',
    password: ''
  }

  constructor(private authService:AuthService){}

  async login(){
    const {email, password} = this.credentials;

    this.authService.login(email,password).subscribe({
      next: (data)=>{
        console.log(data)
      }
    })
  }
}
