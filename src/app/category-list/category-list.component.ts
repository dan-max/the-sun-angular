import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

}
