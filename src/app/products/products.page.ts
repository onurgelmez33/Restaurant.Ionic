import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductsService } from '../api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[];
  categoryId: number;
  categoryName: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _productService: ProductsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.categoryName) {
        this.categoryId = JSON.parse(params.categoryId);
        this.categoryName = JSON.parse(params.categoryName);
      }
    });
  }

  ngOnInit() {
    this._productService.getProductsByCategoryId(this.categoryId).then((data) => {
      this.products = data;
    });
  }

  openProduct(product: Product) {
    let navigationExtras: NavigationExtras = {
    queryParams: {
      product: JSON.stringify(product),
    }
  };
    this.router.navigate(['product-details'], navigationExtras);
  }

}
