import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-inicio-menu',
  standalone: true,
  imports: [RouterModule,MatCardModule, MatButtonModule,RouterLinkActive],
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {
  constructor(private router: Router) {}

  shouldShowComponent(): boolean {
    // Verifica si la ruta actual es la página de inicio
    return this.router.url === '/';
  }
}
