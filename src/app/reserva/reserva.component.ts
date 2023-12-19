import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';


@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [
    RouterModule
  ],
  providers: [ReservaService],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  
  habitacion: any[]=  [];
  constructor(private reserva: ReservaService){}

  ngOnInit(): void
  {
    this.llenarDatos();
  }

  llenarDatos(){
    this.reserva.Addreserva().subscribe(habitacion=>{
      this.habitacion=habitacion;
      console.log(this.habitacion);
    })
  }
}
