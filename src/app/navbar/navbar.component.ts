import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}