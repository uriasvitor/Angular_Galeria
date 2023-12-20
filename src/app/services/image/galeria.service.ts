import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICardImage } from "src/app/models/cardImage.model";

@Injectable({
  providedIn:'root'
})
export class GaleriaService{
  constructor(private http:HttpClient){}


  getImages():Observable<ICardImage[]>{
    return this.http.get<ICardImage[]>('http://localhost:3000/images')
  }
}
