import { Component } from '@angular/core';
import {Client, FullName} from './client/client.component';
import {AdditionInformation} from './addition-information/addition-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pay with any bank card';
  client = new Client();
  additionInformation = new AdditionInformation;
  constructor() {
    this.client.fullName = new FullName('Шевцова', 'Мария', 'Валерьевна');
    this.client.phone = '+79193977777';
    this.client.website = 'www.mary.com';
    this.client.email = 'mary@tochka.com';
    this.client.requisitesLink = '#';
    this.client.companyInformationLink = '#';
    this.client.pathToLogo = '../../assets/img/logo.png';

    this.additionInformation.text = 'Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния (исп. и галис. Reino de' +
      ' España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство на юго-западе Европы и частично' +
      ' в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %)' +
      ' Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504' +
      ' 782 км² (вместе с небольшими суверенными территориями на африканском побережье, городами' +
      ' Сеута и Мелилья), являясь четвёртой по величине страной в Европе (после России, Украины и' +
      ' Франции).';
    this.additionInformation.showAllLink = '#';
  }
}
