import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { reservaRequest } from '../models/reserva.request.model';

@Injectable({
  providedIn: 'root'
})
export class DatosReservaService {
  constructor (private http: HttpClient){}
  addReserva(model: reservaRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7059/api/Huespedes',model)
  }
}