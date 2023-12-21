import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
  reservaForm!: FormGroup

  habitacion: any[] = [];
 

  constructor(private reserva: ReservaService) {
  }

  ngOnInit(): void {
    this.llenarDatos();
    this.initForm()
  }

  llenarDatos() {
    this.reserva.Addreserva().subscribe(habitacion => {
      this.habitacion = habitacion;
    });
  }
  initForm() {
    this.reservaForm = new FormGroup({
      Fecha_ingreso: new FormControl(null, Validators.required),
      Fecha_salida: new FormControl(null, Validators.required),
      habitacion: new FormControl(null, Validators.required),
      N_huespedes: new FormControl(null, Validators.required),
    });
  }
  onHabitacionChange(event:any) {
    const habitacionSeleccionada = event.target.value;
    console.log('Habitación seleccionada:', habitacionSeleccionada);
  }
  onHuespedChange(event:any){
    const HuespedSeleccion=event.target.value;
    console.log('Huespedes', HuespedSeleccion)
  }
  onSubmit(){
    console.log('formulario enviado', this.reservaForm.value);
  }

}