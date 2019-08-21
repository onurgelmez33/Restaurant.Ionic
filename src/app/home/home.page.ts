import { Component } from '@angular/core';
import { CategoriesService } from '../api/categories.service';
import { Category } from 'src/models/Category';
import { Router, NavigationExtras } from '@angular/router';
import { jsonpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Category[];
  constructor(private _categoryService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this._categoryService.getAllCategories(0).then((data) => {
      this.categories = data;
    });
  }

  openCategory(category: Category){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoryId: category.Id,
        categoryName: JSON.stringify(category.Name)
      }
    };
    if(category.HasSubCategories){
      this.router.navigate(['categories'], navigationExtras);
    }
    else{
      this.router.navigate(['products'], navigationExtras);
    }
  }

}
