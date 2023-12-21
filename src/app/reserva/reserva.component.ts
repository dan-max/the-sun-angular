import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [RouterModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
  TotalComponent],
  providers: [ReservaService],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  habitacion: any[] = [];

  constructor(private reserva: ReservaService) {}

  ngOnInit(): void {
    this.llenarDatos();
  }

  llenarDatos() {
    this.reserva.Addreserva().subscribe(habitacion => {
      this.habitacion = habitacion;
    });
  }

  onHabitacionChange(event:any) {
    const habitacionSeleccionada = event.target.value;
    console.log('Habitación seleccionada:', habitacionSeleccionada);
  }
}
