import {Component, Input, OnInit} from '@angular/core';
import {Client, FullName} from '../client/client.component';

@Component({
  selector: 'app-request-payment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.css']
})
export class RequestPaymentComponent implements OnInit {
  public client: Client;

  constructor() { }

  ngOnInit() {
    this.client = new Client();
    this.client.fullName = new FullName('Шевцова', 'Мария', 'Валерьевна');
  }
}
