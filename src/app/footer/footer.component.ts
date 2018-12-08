import {Component, OnInit} from '@angular/core';
import {Link} from './link/link.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public links: Link[];
  constructor() {
    this.links = [
      new Link('../../assets/img/twitter.png', 'twitter', 'Твитнуть'),
      new Link('../../assets/img/f.png', 'facebook', 'Поделиться 176'),
      new Link('../../assets/img/google.png', 'google'),
      new Link('../../assets/img/vk.png', 'vk'),
      new Link('../../assets/img/o.png', 'одноклассники'),
      new Link('../../assets/img/in.png', 'in'),
      new Link('../../assets/img/telegram.png', 'telegram', 'Отправить')];
  }

  ngOnInit() {
  }

}
