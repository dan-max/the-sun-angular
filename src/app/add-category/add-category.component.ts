import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCategoryRequest } from '../../models/add-category-request.model';
import { CategoryService } from '../../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  providers: [CategoryService],
  imports: [RouterModule, FormsModule,HttpClientModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;
  
    constructor(private categoryService: CategoryService){
      this.model={
        name:'',
        urlHandle:''
      };
    }
  

  onFormSubmit(){

    this.categoryService.addCategory(this.model).subscribe({
      next: (response) => {

        console.log("succes")

      }
    })

  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
