import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IGaleria } from '../models/galeria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  // apiUrl = environment.apiUrl

  // constructor(private http: HttpClient) { }

  // getAllImages(): Observable<IGaleria>{
  //   return this.http.get<IGaleria>(this.apiUrl)
  // }
}
