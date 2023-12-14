import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MenuInicioComponent,HttpClientModule, FormsModule, RouterOutlet, NavbarComponent,CategoryListComponent, AddCategoryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularnet';

}
