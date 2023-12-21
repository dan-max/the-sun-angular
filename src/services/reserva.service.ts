import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reservaRequest } from '../models/reserva.request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient) { }
  Addreserva():Observable<any>{
    return this.http.get<any>('https://localhost:7059/api/Habitaciones')
  }
}
