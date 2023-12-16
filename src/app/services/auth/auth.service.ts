import * as moment from "moment";

import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map, tap} from "rxjs";
import { ISignin } from "../../models/signin.model";
import { ISignup } from "../../models/signup.model";
import { environment } from "src/environments/environment.development";
import { Route } from "@angular/router";

const AUTH_API = environment.userApi;

interface IAuthToken {
  token: string;
  expiresIn:string;
}

@Injectable({
  providedIn:'root'
})
export class AuthService{
  isLoggedIn = false;
  http = inject(HttpClient)

  constructor(){}

  login(userCredentials:ISignin):Observable<IAuthToken>{
    return this.http.post<IAuthToken>(AUTH_API + 'sign-in', userCredentials)
    .pipe(tap(authResponse => {
      this.isLoggedIn = true;
      this.setSession(authResponse)
      return authResponse;
    }));
  }

  setSession(authResponse:IAuthToken){
    const expireAt = moment().add(authResponse.expiresIn, 'second')
    console.log(authResponse)
    localStorage.setItem('id_token', authResponse.token)
    localStorage.setItem('expire_At', JSON.stringify(expireAt.valueOf()))
  }

  getAuthToken(){
    const authToken = localStorage.getItem('id_token')
    return authToken;
  }

  logOut(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('expire_At')
  }

  register(user:ISignup):Observable<ISignup>{
    return this.http.post<ISignup>(AUTH_API + 'sign-up', user)
  }

}
