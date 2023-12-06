import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISignin } from "../models/signin.model";
import { ISignup } from "../models/signup.model";
import { environment } from "src/environments/environment.development";

const AUTH_API = environment.userApi;

@Injectable({
  providedIn:'root'
})
export class AuthService{

  constructor(private http:HttpClient){}


  login(userCredentials:ISignin):Observable<ISignin>{
    return this.http.post(AUTH_API + 'sign-in',userCredentials)
  }

  register(user:ISignup):Observable<ISignup>{
    return this.http.post<ISignup>(AUTH_API + 'sign-up',user)
  }
}
