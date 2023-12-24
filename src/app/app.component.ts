import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuInicioComponent } from "./menu-inicio/menu-inicio.component";
import { FooterComponent } from './footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
        NavbarComponent,
        CategoryListComponent,
        AddCategoryComponent, 
        MenuInicioComponent,
        FooterComponent]
})
export class AppComponent {
  title = 'angularnet';
}
