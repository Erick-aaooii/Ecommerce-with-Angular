import { Component, Input } from '@angular/core';

@Component({
  selector: 'double-card',
  imports: [],
  templateUrl: './doubleCard.component.html',
})
export class DoubleCardComponent { 
  img1 = "https://viaevangelica.cdn.magazord.com.br/img/2024/11/banner/247688/banner-whats.gif"
  img2 = "https://viaevangelica.cdn.magazord.com.br/img/2025/05/banner/266635/alto-verao-desk.gif"
  //@Input() img1: string = ""
  //@Input() img2: string = ""
  imgs: String[] = [this.img1, this.img2]
 }
