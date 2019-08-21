import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CategoriesService } from './api/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Ana Sayfa',
      url: '/home',
      icon: 'home',
      params: '',
      children: []
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _categoryService: CategoriesService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      /*
      this._categoryService.getAllCategories(0).then((categories) => {
        categories.map((category) => {
          if (category.HasSubCategories) {
            var cat = {
              url: '/categories',
              title: category.Name,
              icon: '',
              params: '{id:' + category.Id + ', categoryName:"' + category.Name + '"}',
              children: []
            };
            this.appPages.push(cat);
            this._categoryService.getAllCategories(category.Id).then((childs) => {
              childs.map((child) => {
                if (child.HasSubCategories) {
                  cat.children.push({
                    url: '/categories',
                    title: child.Name,
                    icon: '',
                    params: '{id:' + category.Id + ', categoryName:"' + category.Name + '"}',
                    children: []
                  });
                }
                else {
                  cat.children.push({
                    url: '/products',
                    title: child.Name,
                    icon: '',
                    params: '{id:' + category.Id + ', categoryName:"' + category.Name + '"}',
                    children: []
                  });
                }
              })
            });
          }
          else {
            this.appPages.push({
              url: '/products',
              title: category.Name,
              icon: '',
              params: '{id:' + category.Id + ', categoryName:"' + category.Name + '"}',
              children: []
            });
          }
        })
      })*/
    });
  }
}
