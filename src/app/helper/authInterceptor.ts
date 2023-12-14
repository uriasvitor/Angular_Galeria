import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { Observable, tap } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private auth:AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = this.auth.getAuthToken();

    if (idToken) {
        const authClone = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer " + idToken)
        });

        return next.handle(authClone);
    }

    return next.handle(req);


  }


}
