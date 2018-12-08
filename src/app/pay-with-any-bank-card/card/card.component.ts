import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public card: Card;
  constructor() { }

  ngOnInit() {
    this.card = new Card();
  }

}

export class Card {
  public number: string;

  constructor(number= '') {
    this.number = number;
  }
}
