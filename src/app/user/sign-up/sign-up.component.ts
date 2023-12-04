import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, Input } from '@angular/core';
import { RegisterValidators } from 'src/app/validators/RegisterValidators';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Input() title = 'SignUp'

  inSubmission = false
  alertMsg = "Wait a moment.."
  alertColor = 'red'
  showAlert = false;

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

    this.showAlert = true
    this.inSubmission = true
    this.alertColor = 'blue'
    this.alertMsg = 'Account is being created..'

    this.authService.register(normalizedUserName, normalizedEmail, normalizedAge, normalizedPassword).subscribe({
      next:(data)=>{
        this.alertMsg = 'Account has been created!'
        this.alertColor = 'green'
        console.log(data)

        this.registerForm.reset();

      },error:(e)=>{
        this.alertMsg = 'An unexpected error occurred. Please try again later'
        this.alertColor = 'red'
        this.inSubmission = false
        console.log(e)
      }
    })
  }

}
