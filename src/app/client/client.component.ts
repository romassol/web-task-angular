import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    @Input() public client: Client;

    constructor() { }

    ngOnInit() {
    }

}

export class Client {
  public fullName: FullName;
  public phone: string;
  public website: string;
  public email: string;
  public companyInformationLink: string;
  public requisitesLink: string;
  public pathToLogo: string;
}

export class FullName {
    public surname: string;
    public name: string;
    public patronymic: string;
    constructor(surname, name, patronymic) {
      this.surname = surname;
      this.name = name;
      this.patronymic = patronymic;
    }
}
