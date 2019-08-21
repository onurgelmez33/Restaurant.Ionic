import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appImageLoading]'
})
export class ImageLoadingDirective {

  @Input('appImageLoading') imagePath: string;
  constructor() { }
  ngAfterViewInit() {
    let placeholder: HTMLImageElement = document.querySelector('.placeholder');
    let small: HTMLImageElement = placeholder.querySelector('.img-small');

    // 1: load small image and show it
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
      placeholder.setAttribute("style", "height: " +img.clientHeight+"px;margin-bottom:" +img.clientHeight+"px");
      small.classList.add('loaded');
    };

    // 2: load large image
    var imgLarge = new Image();
    imgLarge.src = this.imagePath;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
  }
}
