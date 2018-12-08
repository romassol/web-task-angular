import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-addition-information',
  templateUrl: './addition-information.component.html',
  styleUrls: ['./addition-information.component.css']
})
export class AdditionInformationComponent implements OnInit {
  @Input() public additionInformation: AdditionInformation;
  constructor() { }

  ngOnInit() {
  }

}

export class AdditionInformation {
  public text: string;
  public showAllLink: string;
}
