import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../models/user.model";
import { environment } from "src/environments/environment.development";

const AUTH_API = environment.userApi;

@Injectable({
  providedIn:'root'
})
export class AuthService{

  constructor(private http:HttpClient){}


  login(email:string,password:string):Observable<any>{
    return this.http.post(AUTH_API + 'sign-in',{
      email,password
    })
  }

  register(user:IUser):Observable<IUser>{
    console.log(user)
    return this.http.post<IUser>(AUTH_API + 'sign-up',user)
  }
}
