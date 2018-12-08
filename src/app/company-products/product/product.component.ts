import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  constructor() { }

  ngOnInit() {
  }

}

export class Product {
  public pathToImg: string;
  public imgName: string;
  public name: string;
  public price: string;

  constructor(pathToImg, imgName, name, price) {
    this.pathToImg = pathToImg;
    this.imgName = imgName;
    this.name = name;
    this.price = price;
  }
}
