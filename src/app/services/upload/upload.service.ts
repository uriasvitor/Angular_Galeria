import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

const ApiImage = environment.imageApi;

@Injectable({
  providedIn:'root'
})
export class UploadService {

  constructor(private http: HttpClient){
    this.getAllImages()
  }

  getAllImages(){
    return this.http.get(ApiImage)
  }
}
