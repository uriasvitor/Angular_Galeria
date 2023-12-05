import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  inSubmission = false;

  constructor(private authService:AuthService, private fb:FormBuilder){}

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
    userName:this.userName,
    email:this.email,
    age: this.age,
    password:this.password,
    confirm_password:this.confirm_password
  },[RegisterValidators.match('password','confirm_password')])

  register(){
    const { userName, email, age, password} = this.registerForm.value
    const normalizedUserName = userName ?? '';
    const normalizedEmail = email ?? '';
    const normalizedAge = typeof Number(age) === 'number' ? Number(age) : 18;
    const normalizedPassword = password ?? '';

    this.signUpEventEmit.emit({message:'Account is being created..', alertColorBg:'brown', showAlert: true})
    this.inSubmission = true;

    this.authService.register(normalizedUserName, normalizedEmail, normalizedAge, normalizedPassword).subscribe({
      next:(data)=>{
        this.signUpEventEmit.emit({message:'Account has been created!', alertColorBg:'green', showAlert: true})

        console.log(data)

        this.registrationSucess.emit()
        this.registerForm.reset();

      },error:(e)=>{

        this.signUpEventEmit.emit({message:'An unexpected error occurred. Please try again later', alertColorBg:'red', showAlert: true})

        this.inSubmission = false
        console.log(e)
      }
    })
  }

}
