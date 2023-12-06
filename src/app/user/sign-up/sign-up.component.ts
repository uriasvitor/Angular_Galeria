import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterValidators } from 'src/app/validators/RegisterValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Input() title = 'SignUp'
  @Output() signUpEventEmit = new EventEmitter<{message:string, alertColorBg:string, showAlert:boolean}>
  @Output() registrationSucess = new EventEmitter<void>

  inLoading = false;

  constructor(private authService:AuthService){}

  userName = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])

  age = new FormControl(null,[
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])

  password = new  FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  confirm_password = new FormControl('',[
    Validators.required,
  ])

  registerForm = new FormGroup({
    username:this.userName,
    email:this.email,
    age: this.age,
    password:this.password,
    confirm_password:this.confirm_password
  },[RegisterValidators.match('password','confirm_password')])

  register(){
    const user: any = this.registerForm.value;
    delete user.confirm_password;


    this.signUpEventEmit.emit({message:'Account is being created..', alertColorBg:'brown', showAlert: true})
    this.inLoading = true;

    this.authService.register(user).subscribe({
      next:(data:any)=>{
        this.signUpEventEmit.emit({message:data.message, alertColorBg:'green', showAlert: true})
        console.log(data)

        this.inLoading = false;

        this.registrationSucess.emit()
        this.registerForm.reset();

      },error:(e)=>{

        this.signUpEventEmit.emit({message:e.message, alertColorBg:'red', showAlert: true})

        this.inLoading = false
        console.log(e)
      }
    })
  }

}
