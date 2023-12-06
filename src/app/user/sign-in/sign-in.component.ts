import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Input() title = 'SignIn'
  inLoading = false;

  formLogin = new FormGroup(
    {
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    }
  )

  constructor(private authService:AuthService){}

  login(){
    const userCredentials = this.formLogin.value
    this.inLoading = true;

    this.authService.login(userCredentials).subscribe({
      next:(data:any)=>{
        console.log(data)
        console.log(data.message)
        this.inLoading = false;
      },
      error:(e)=>{
        this.inLoading = false;
      }
    })

  }
}
