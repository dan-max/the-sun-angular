import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatosReservaService } from '../../services/datos-reserva.service';
import { HttpClientModule } from '@angular/common/http';
import { HDisponiblesService } from '../../services/hdisponibles.service';
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
    HttpClientModule],
  providers: [ReservaService,DatosReservaService],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  reservaForm!: FormGroup;
  habitacion: any[] = [];
  precioSeleccionado?: number;
  existente?: number;
  disponible?: number;
  idHabitacionSeleccionada?:number;
  actualizada?:number
  constructor(private reserva: ReservaService,  private datosReservaService: DatosReservaService) {}
  ngOnInit(): void {
    this.llenarDatos();
    this.initForm();
  }
  llenarDatos() {
    this.reserva.Addreserva().subscribe(habitacion => {
      this.habitacion = habitacion;
    });
  }
  onSubmit(){
    this.reservaForm.patchValue({ precio: this.precioSeleccionado });
    let datosReserva = this.reservaForm.value;
    
  try {
    this.datosReservaService.addReserva(datosReserva).subscribe(
      huesped=>{
        datosReserva= huesped
      }
    );

    console.log('¡Reserva enviada correctamente!');
    // Reinicia el formulario o navega a una página de confirmación
  } catch (error) {
    console.error('Error al enviar reserva:', error);
    // Muestra un mensaje de error al usuario
  }
  }
  initForm() {
    this.reservaForm = new FormGroup({
      fecha_ingreso: new FormControl(null, Validators.required),
      fecha_salida: new FormControl(null, Validators.required),
      habitacion: new FormControl(null, Validators.required),
      n_huespedes: new FormControl(null, Validators.required),
      precio: new FormControl(null) // Agregamos el control para el precio
    });
  }
  onHabitacionChange(event:any) {
    let habitacionSeleccionada = event.target.value;
    console.log('Habitación seleccionada:', habitacionSeleccionada);
    this.precioSeleccionado = this.habitacion[event.target.selectedIndex].precio;
    this.existente=this.habitacion[event.target.selectedIndex].existentes;
    let disponible=this.habitacion[event.target.selectedIndex].disponibles;
    this.actualizada= disponible-1;
    console.log(disponible);
    console.log(this.actualizada);
    this.idHabitacionSeleccionada = this.habitacion[event.target.selectedIndex].id; // Almacenar el ID
    console.log(this.idHabitacionSeleccionada)
    
  }
  onHuespedChange(event:any){
    const HuespedSeleccion=event.target.value;
    console.log('Huespedes', HuespedSeleccion)
  }
}