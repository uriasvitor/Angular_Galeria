import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  @Input() title = 'SignIn'
  @Output() signInEventEmit = new EventEmitter<{message:string, alertColorBg:string, showAlert:boolean}>

  inLoading = false;

  formLogin = new FormGroup(
    {
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    }
  )

  constructor(private authService:AuthService, private activeRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {

  }


  login(){
    const userCredentials = this.formLogin.value
    this.inLoading = true;

    this.authService.login(userCredentials).subscribe({
      next:(data:any)=>{
        this.inLoading = false;

        this.signInEventEmit.emit({message:data.menssage, alertColorBg:'green', showAlert:true})

        const returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error:(e)=>{
        console.log(e)
        this.signInEventEmit.emit({message:e.error.message, alertColorBg:'red', showAlert:true})

        this.inLoading = false;
      }
    })

  }
}
