import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Category } from 'src/models/Category';
import { CategoriesService } from '../api/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Category[];
  parentCategoryId: number;
  parentCategoryName: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _categoryService: CategoriesService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.categoryName) {
        this.parentCategoryId = JSON.parse(params.categoryId);
        this.parentCategoryName = JSON.parse(params.categoryName);
      }
    });
  }

  ngOnInit() {
    this._categoryService.getAllCategories(this.parentCategoryId).then((data) => {
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
      this._categoryService.getAllCategories(category.Id).then((data) => {
        this.categories = data;
      });
    }
    else{
      this.router.navigate(['products'], navigationExtras);
    }
  }

}
