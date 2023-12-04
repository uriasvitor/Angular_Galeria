import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../models/user.model";

const AUTH_API = 'http://localhost:3000/api/user/';

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

  register(username:string, email:string, age:number,password:string):Observable<IUser>{
    return this.http.post<IUser>(AUTH_API + 'sign-up',{
      username,
      email,
      age,
      password
    })
  }
}
