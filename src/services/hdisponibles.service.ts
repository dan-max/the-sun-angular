import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habitacionesRequest } from '../models/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class HDisponiblesService {

  constructor(private http: HttpClient) { }
    HDisponible(id:number,model:habitacionesRequest):Observable<void>{
    const url= 'https://localhost:7059/api/Habitaciones/${id}';
    
    return this.http.put<void>(url,model)
  }
}
