import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ RouterModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

}
