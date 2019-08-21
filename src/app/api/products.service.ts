import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  toast: HTMLIonToastElement;
  constructor(private http: Http, private toastController: ToastController) { }

  async presentToast() {
    this.toast = await this.toastController.create({
      message: 'Yükleniyor...'
    });
    this.toast.present();
  }

  async getProductsByCategoryId(id: number) {
    await this.presentToast();
    return new Promise<Product[]>((resolve) => {
      this.http.get("/api/Products/GetAllProducts/" + id).subscribe((data) => {
        resolve(data.json());
        this.toast.dismiss();
      });
    })
  }
}
