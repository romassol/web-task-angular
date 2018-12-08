import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product/product.component';
import {Client} from '../client/client.component';

@Component({
  selector: 'app-company-products',
  templateUrl: './company-products.component.html',
  styleUrls: ['./company-products.component.css']
})
export class CompanyProductsComponent implements OnInit {
  public products: Product[];
  @Input() public client: Client;
  constructor() {
    this.products = [new Product('../../assets/img/1.png', 'first product',
      'Клубника на улице Рамбала', '139,99 руб.'),
      new Product('../../assets/img/2.png', 'second product',
        'Золотой пляж', '35,89 руб.'),
      new Product('../../assets/img/3.png', 'third product',
        'Экскурсии', '1000 р./час')];
  }

  ngOnInit() {
  }

}
