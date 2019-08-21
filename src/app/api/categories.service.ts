import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from 'src/models/Category';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  toast: HTMLIonToastElement;
  constructor(private http: Http, private toastController: ToastController) { }

  async presentToast() {
    this.toast = await this.toastController.create({
      message: 'Yükleniyor...'
    });
    this.toast.present();
  }

  async getAllCategories(id: number) {
    await this.presentToast();
    return new Promise<Category[]>((resolve) => {
      if (id != 0) {
        this.http.get("/api/Categories/GetAllCategories/" + id).subscribe((data) => {
          resolve(data.json());
          this.toast.dismiss();
        });
      }
      else {
        this.http.get("/api/Categories/GetAllCategories").subscribe((data) => {
          resolve(data.json());
          this.toast.dismiss();
        });
      }
    })
  }
}
