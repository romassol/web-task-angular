import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() public link: Link;
  constructor() { }

  ngOnInit() {
  }

}

export class Link {
  public pathToImg: string;
  public name: string;
  public text: string;

  constructor(pathToImg, name, text= '') {
    this.pathToImg = pathToImg;
    this.name = name;
    this.text = text;
  }
}
