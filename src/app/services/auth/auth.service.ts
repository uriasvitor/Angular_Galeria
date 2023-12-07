import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, map, tap } from "rxjs";
import { ISignin } from "../../models/signin.model";
import { ISignup } from "../../models/signup.model";
import { environment } from "src/environments/environment.development";

const AUTH_API = environment.userApi;

interface AuthApiResponse {
  token: string;
}

@Injectable({
  providedIn:'root'
})

export class AuthService{
  isLoggedIn = false;

  constructor(private http:HttpClient){this.getToken() }

  login(userCredentials:ISignin):Observable<AuthApiResponse>{
    return this.http.post<AuthApiResponse>(AUTH_API + 'sign-in',userCredentials)
    .pipe(map(user => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(user.token));
      return user;
    }));
  }

  getToken(){
    const local = localStorage.getItem('user');

    if (local) {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }


  register(user:ISignup):Observable<ISignup>{
    return this.http.post<ISignup>(AUTH_API + 'sign-up',user)
  }
}
