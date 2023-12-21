import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { habitacionesRequest } from '../models/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class DatosReservaService {
  private CarritoObservable:BehaviorSubject<habitacionesRequest>=
  new BehaviorSubject<habitacionesRequest>({id: 0,
    Habitacion: 'Habitación 101',
    Precio: 0,
    Disponibles: 0,
    Existentes: 0});
  constructor() { }
}
