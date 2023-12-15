import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

  {
    path: 'admin/categories',
    component: CategoryListComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'reservas',
    component: ReservaComponent
  }
];
